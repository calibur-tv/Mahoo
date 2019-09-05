<style lang="scss">
.create-comment-form {
  .avatar {
    float: left;

    @include pc() {
      margin: 17px 24px 0 5px;
    }
  }

  .input-wrap {
    overflow: hidden;

    .el-textarea {
      margin-bottom: 8px;

      &__inner {
        background-color: #f4f5f7;

        &:hover {
          background-color: transparent;
        }
      }
    }

    .el-input__count {
      background-color: transparent;
      user-select: none;
      pointer-events: none;
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

      .el-icon-picture-outline-round {
        font-size: 18px;
      }
    }
  }

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
}
</style>

<template>
  <div class="create-comment-form">
    <div v-if="showAvatar" class="avatar only-pc">
      <VImg :src="avatar" radius="50%" width="40" height="40" />
    </div>
    <button class="submit-btn" @click="submit">点击<br />发送</button>
    <div class="input-wrap">
      <ElInput
        v-model="content"
        type="textarea"
        :autosize="{ minRows: 3 }"
        :autofocus="autofocus"
        :show-word-limit="true"
        :maxlength="1000"
        :placeholder="placeholder"
        @keydown.meta.enter.prevent.native="submit"
      />
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
        class="only-pc"
      >
        <i class="el-icon-picture-outline-round" />
      </ElUpload>
    </div>
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
      type: [String, Number],
      default: ''
    },
    showAvatar: {
      type: Boolean,
      default: true
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '和谐讨论，共建社区'
    }
  },
  data() {
    return {
      content: '',
      loading: false
    }
  },
  computed: {
    avatar() {
      return this.$store.state.user.avatar || 'default-avatar'
    }
  },
  methods: {
    submit() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.content.trim().length < 2) {
        this.$toast.error('内容至少要两个字')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/comment/create', {
          content: this.content.trim(),
          images: this.uploadImageList.map(_ => _.data),
          pin_slug: this.pinSlug,
          comment_id: this.commentId
        })
        .then(data => {
          this.$emit('submit', data)
          this.content = ''
          this.resetUploaderStatus()
          this.$toast.success('评论成功')
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
