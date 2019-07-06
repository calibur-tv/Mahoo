<style lang="scss">
.create-comment-form {
  .content-wrap {
    margin-bottom: 8px;

    .submit-btn {
      float: right;
      margin-left: 8px;
      height: 75px;
      width: 75px;
      color: #fff;
      background-color: $color-main;
      border-radius: 4px;
      line-height: 1.4;
      letter-spacing: 2px;

      &:hover {
        background-color: $color-main-light;
      }
    }

    .input-wrap {
      overflow: hidden;
    }

    .el-textarea__inner {
      background-color: #f4f5f7;

      &:hover {
        background-color: transparent;
      }
    }

    .el-input__count {
      background-color: transparent;
      user-select: none;
      pointer-events: none;
    }
  }

  .el-upload {
    &-list__item,
    &--picture-card {
      width: 50px;
      height: 50px;
    }

    &-list__item {
      transition-duration: 0s;
    }

    &--picture-card {
      line-height: 47px;
    }

    &-list__item-status-label {
      display: none !important;
    }

    .el-icon-plus {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="create-comment-form">
    <div class="content-wrap">
      <button
        class="submit-btn"
        @click="submit"
      >
        点击<br>发送
      </button>
      <div class="input-wrap">
        <ElInput
          v-model="content"
          type="textarea"
          :autosize="{ minRows: 3 }"
          :show-word-limit="true"
          :maxlength="1000"
          :placeholder="placeholder"
        />
      </div>
    </div>
    <ElUpload
      multiple
      list-type="picture-card"
      :action="imageUploadAction"
      :limit="9"
      :data="uploadHeaders"
      :file-list="uploadImageList"
      :accept="imageUploadAccept"
      :before-upload="handleImageUploadBefore"
      :on-success="handleImageUploadSuccess"
      :on-error="handleImageUploadError"
      :on-remove="handleImageUploadRemove"
      :on-exceed="handleImageUploadExceed"
    >
      <i class="el-icon-plus" />
    </ElUpload>
  </div>
</template>

<script>
import { Upload } from 'element-ui'
import upload from '~/mixins/upload'

export default {
  name: 'CreateCommentForm',
  components: {
    ElUpload: Upload
  },
  mixins: [upload],
  props: {
    pinSlug: {
      type: String,
      required: true
    },
    commentId: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论'
    }
  },
  data() {
    return {
      content: '',
      loading: false
    }
  },
  methods: {
    submit() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
      }
      if (this.content.trim().length < 2) {
        this.$toast.error('内容至少要两个字')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios.$post('v1/comment/create', {
        content: this.content.trim(),
        images: this.uploadImageList.map(_ => _.data),
        pin_slug: this.pinSlug,
        comment_id: this.commentId
      })
        .then(data => {
          this.$emit('submit', data)
          this.content = ''
          this.resetUploaderStatus()
          this.loading = false
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
