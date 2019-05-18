<style lang="scss">
#tag-edit {
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
  <div id="tag-edit">
    <el-row>
      <el-col :span="12" :offset="6">
        <el-form
          ref="form"
          :model="tag"
          :rules="rules"
          :disabled="submitting"
          label-position="top"
        >
          <el-form-item label="头像">
            <div class="avatar-field">
              <img
                :src="$resize(tag.avatar, { width: 200, height: 200 })"
                class="avatar"
              >
              <el-upload
                :show-file-list="false"
                :action="imageUploadAction"
                :limit="uploadImageLimit"
                :data="uploadHeaders"
                :accept="imageUploadAccept"
                :before-upload="handleImageUploadBefore"
                :on-success="avatarUploadSuccess"
                :on-error="handleImageUploadError"
              >
                <el-button
                  type="success"
                  plain
                  round
                  size="mini"
                >
                  上传标签封面
                </el-button>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="tag.name" disabled />
          </el-form-item>
          <el-form-item label="别名" prop="alias">
            <p class="form-tip">
              提示：按回车键生效
            </p>
            <el-select
              v-model="tag.alias"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请输入标签别名"
              popper-class="hidden-select-options"
              class="hidden-select-input"
            />
          </el-form-item>
          <el-form-item label="简介">
            <el-input
              v-model="tag.intro"
              type="textarea"
              :show-word-limit="true"
              :rows="8"
              maxlength="233"
              resize="none"
              placeholder="请输入板块介绍"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="submitting"
              type="success"
              round
              @click="submit"
            >
              保存更改
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import upload from '~/mixins/upload'
import { showTag, updateTag } from '~/api/tag'
import { Upload, Input, Form, FormItem, Select } from 'element-ui'

export default {
  name: '',
  layout: 'web',
  components: {
    'el-upload': Upload,
    'el-input': Input,
    'el-form': Form,
    'el-select': Select,
    'el-form-item': FormItem
  },
  mixins: [upload],
  props: {
    slug: {
      type: String,
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
      tag: null,
      parent: null,
      children: [],
      rules: {
        alias: [
          { validator: validateAlias, trigger: 'submit' }
        ]
      },
      submitting: false
    }
  },
  asyncData({ app, error, params }) {
    return showTag(app, {
      slug: params.slug
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  methods: {
    avatarUploadSuccess(res) {
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
              this.$toast.success('修改成功')
                .then(() => {
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
