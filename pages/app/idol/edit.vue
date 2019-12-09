<style lang="scss">
#edit-idol {
  padding: 15px;

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
}
</style>

<template>
  <div v-if="idol" id="edit-idol">
    <el-form ref="form" label-position="top" label-width="80px">
      <ElFormItem label="名称">
        <ElInput v-model="idol.name" disabled />
      </ElFormItem>
      <ElFormItem label="头像">
        <div class="avatar-field">
          <img :src="$resize(idol.avatar, { width: 100 })" class="avatar" />
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
              {{ uploadPending ? '图片上传中...' : '点击上传头像' }}
            </ElButton>
          </ElUpload>
        </div>
      </ElFormItem>
      <ElFormItem label="别名">
        <ElSelect v-model="idol.alias" multiple filterable allow-create default-first-option placeholder="请输入番剧别名" popper-class="hidden-select-options" class="hidden-select-input" />
      </ElFormItem>
      <ElFormItem label="简介">
        <ElInput v-model="idol.intro" type="textarea" rows="4" resize="vertical" />
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="handleSubmit">提交</ElButton>
      </ElFormItem>
    </el-form>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'
import { Upload, Select } from 'element-ui'
import upload from '~/mixins/upload'

export default {
  name: 'EditBangumi',
  layout: 'app',
  components: {
    ElUpload: Upload,
    ElSelect: Select
  },
  mixins: [mustSign, upload],
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/idol/show', {
        params: { slug }
      })
      .then(idol => {
        return { idol }
      })
      .catch(error)
  },
  data() {
    return {
      idol: null,
      loading: false
    }
  },
  methods: {
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.idol.avatar = res.data.url
    },
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/idol/update', this.idol)
        .then(() => {
          this.$toast.success('修改成功')
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  head: {
    title: '编辑偶像'
  }
}
</script>
