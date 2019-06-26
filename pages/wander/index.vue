<style lang="scss">
#wander {
  .wrap {
    width: 660px;
    max-width: 100%;
    margin: 30px auto;
  }

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

  .footer {
    border-top: 1px solid $color-gray-line;
    padding-top: 30px;
    padding-bottom: 30px;

    button {
      display: block;
      width: 200px;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div id="wander">
    <div class="wrap">
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
            <div>请添加封面图（选填）</div>
            <p>支持8MB内的JPG／JPEG／PNG格式的高清图片<br>（建议大于960*540像素）</p>
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
      <el-form class="footer" label-position="top" label-width="80px">
        <el-form-item label="投稿板块">
          <area-picker v-model="area" />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            round
            @click="actionPublish"
          >
            发表
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Upload } from 'element-ui'
import mustSign from '~/mixins/mustSign'
import upload from '~/mixins/upload'
import Editor from '~/components/editor'
import AreaPicker from '~/components/form/AreaPicker'

export default {
  name: 'Wander',
  layout: 'web',
  components: {
    Editor,
    AreaPicker,
    'el-upload': Upload
  },
  mixins: [mustSign, upload],
  data() {
    return {
      title: {
        banner: null,
        text: ''
      },
      content: [],
      area: process.env.TAGS.newbie,
      loading: false
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
      const banner = res.data
      if (banner.width < 960 || banner.height < 540) {
        this.handleImageUploadRemove(file)
        return
      }
      this.title.banner = banner
      this.saveTitle()
    },
    onEditorSave() {
      this.saveTitle()
    },
    saveTitle() {
      this.$cache.set('editor_local_draft_title', this.title)
    },
    deleteBanner() {
      this.title.banner = null
      this.saveTitle()
    },
    actionPublish() {
      if (this.loading) {
        return
      }
      if (!this.title.text) {
        this.$toast.info('标题不能为空')
        return
      }
      if (!this.content.length) {
        this.$toast.info('内容不能为空')
        return
      }

      this.loading = true

      this.$axios.$post('v1/pin/create/story', {
        area: this.area[1],
        content: [
          {
            type: 'title',
            data: this.title
          }
        ].concat(this.content)
      })
        .then(slug => {
          window.location = this.$alias.pin(slug)
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
