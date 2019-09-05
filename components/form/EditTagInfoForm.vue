<style lang="scss">
.edit-tag-info-form {
  .avatar-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 10%;
      margin-right: 15px;
    }
  }

  .form-tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <ElForm ref="form" :model="tag" :rules="rules" :disabled="submitting" label-position="top" class="edit-tag-info-form">
    <ElFormItem label="头像">
      <div class="avatar-field">
        <img :src="$resize(tag.avatar, { width: 100 })" class="avatar" />
        <ElUpload
          :show-file-list="false"
          :action="imageUploadAction"
          :limit="uploadImageLimit"
          :data="uploadHeaders"
          :accept="imageUploadAccept"
          :before-upload="handleImageUploadBefore"
          :on-success="avatarUploadSuccess"
          :on-error="handleImageUploadError"
        >
          <ElButton :loading="!!uploadPending" type="success" plain round size="mini">
            {{ uploadPending ? '图片上传中...' : '点击上传封面' }}
          </ElButton>
        </ElUpload>
      </div>
    </ElFormItem>
    <ElFormItem label="名称">
      <ElInput v-model="tag.name" />
    </ElFormItem>
    <ElFormItem label="别名" prop="alias">
      <p class="form-tip">
        提示：按回车键生效
      </p>
      <ElSelect v-model="tag.alias" multiple filterable allow-create default-first-option placeholder="请输入标签别名" popper-class="hidden-select-options" class="hidden-select-input" />
    </ElFormItem>
    <ElFormItem label="简介">
      <ElInput v-model="tag.intro" type="textarea" :show-word-limit="true" :rows="8" maxlength="233" resize="none" placeholder="请输入板块介绍" />
    </ElFormItem>
    <ElFormItem>
      <ElButton :loading="submitting" type="success" round @click="submit">
        保存更改
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import { Upload, Select } from 'element-ui'
import { updateTag } from '~/api/tagApi'
import upload from '~/mixins/upload'

export default {
  name: 'EditTagInfoForm',
  components: {
    ElUpload: Upload,
    ElSelect: Select
  },
  mixins: [upload],
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  data() {
    const validateAlias = (rule, value, callback) => {
      if (!value || !value.length) {
        callback(new Error('别名不能为空'))
      }
      if (!~value.indexOf(this.tag.name)) {
        callback(new Error('别名中必须包含名称'))
      }
      if (value.some(_ => /,/.test(_))) {
        callback(new Error('别名不能包含英文逗号'))
      }
      if (value.join('').length > 100) {
        callback(new Error('别名最多100个字符'))
      }
      callback()
    }
    return {
      rules: {
        alias: [{ validator: validateAlias, trigger: 'submit' }]
      },
      submitting: false
    }
  },
  methods: {
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.tag.avatar = res.data.url
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitting = true
          updateTag(this, {
            slug: this.tag.slug,
            name: this.tag.name,
            avatar: this.tag.avatar,
            alias: this.tag.alias.join(','),
            intro: this.tag.intro
          })
            .then(() => {
              this.$toast.success('修改成功').then(() => {
                window.location.reload()
              })
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.submitting = false
            })
        }
      })
    }
  }
}
</script>
