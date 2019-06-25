<style lang="scss">
#create-story {
  .banner {
    position: relative;
    width: 100%;
    height: 240px;

    .uploader {
      width: 100%;
      height: 100%;
      background-color: #fafbfd;

      &:hover {
        background-color: #ebeef2;
      }

      .el-upload {
        &-dragger {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          opacity: 0;
        }

        &-tip {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #99a2aa;
          text-align: center;
          pointer-events: none;

          i {
            font-size: 50px;
          }

          div {
            font-size: 16px;
            font-weight: 400;
            line-height: 1;
            margin: 10px 0;
          }

          p {
            font-size: 12px;
          }
        }

        &-list__item {
          font-size: 0;
          transition-duration: 0s;
          position: static;

          .el-progress {
            top: 100% !important;

            &__text {
              display: none;
            }
          }
        }
      }
    }

    .img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .tool {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      opacity: 0;

      i {
        display: block;
        width: 50px;
        height: 50px;
        font-size: 24px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        background-color: rgba(#000, 0.5);

        &:hover {
          background-color: rgba(#000, 0.8);
        }
      }
    }

    &:hover {
      .tool {
        opacity: 1;
      }
    }
  }

  .title {
    margin-top: 30px;
    margin-bottom: 20px;

    .el-textarea {
      font-size: 28px;

      &__inner {
        border-width: 0 !important;
        padding: 12px 50px 12px 0;
      }

      .el-input__count {
        top: 25px;
        bottom: auto;
      }
    }
  }
}
</style>

<template>
  <div id="create-story">
    <div class="banner">
      <el-upload
        class="uploader"
        drag
        :action="imageUploadAction"
        :accept="imageUploadAccept"
        :data="uploadHeaders"
        :before-upload="handleImageUploadBefore"
        :on-success="customImageUploadSuccess"
        :on-error="handleImageUploadError"
      >
        <div slot="tip" class="el-upload-tip">
          <i class="el-icon-picture" />
          <div>请添加专栏头图（选填）</div>
          <p>支持8MB内的JPG／JPEG／BMP／PNG格式的高清图片<br>（建议大于960*540像素）</p>
        </div>
      </el-upload>
      <template v-if="title.banner">
        <v-img :src="title.banner.url" width="100%" height="240" />
        <div class="tool">
          <i class="el-icon-delete" @click="deleteBanner" />
        </div>
      </template>
    </div>
    <div class="title">
      <el-input
        v-model="title.text"
        :show-word-limit="true"
        :autosize="{ minRows: 1 }"
        type="textarea"
        resize="none"
        placeholder="请输入标题（建议30字以内）"
        maxlength="40"
      />
    </div>
    <editor
      v-model="content"
      @save="onEditorSave"
    />
  </div>
</template>

<script>
import { Upload } from 'element-ui'
import Editor from '~/components/editor'
import upload from '~/mixins/upload'

export default {
  name: 'CreateStory',
  components: {
    Editor,
    'el-upload': Upload
  },
  mixins: [upload],
  data() {
    return {
      title: {
        banner: null,
        text: ''
      },
      content: []
    }
  },
  mounted() {
    if (this.$cache.has('editor_local_draft_title')) {
      this.title = this.$cache.get('editor_local_draft_title')
    }
  },
  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.title.banner = res.data
    },
    onEditorSave() {
      this.$cache.set('editor_local_draft_title', this.title)
    },
    deleteBanner() {
      this.title.banner = null
      this.onEditorSave()
    }
  }
}
</script>
