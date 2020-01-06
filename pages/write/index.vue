<style lang="scss">
#wander {
  .wrap {
    width: 660px;
    max-width: 100%;
    @include pc() {
      margin: 30px auto;
    }
  }

  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56%;

    .uploader {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fafbfd;
      z-index: 0;
      border-radius: 4px;

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

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 4px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .tool {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      z-index: 2;
      border-radius: 0 0 4px;
      overflow: hidden;
      @include pc() {
        opacity: 0;
      }

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
    @include pc() {
      margin-top: 30px;
      margin-bottom: 20px;
    }

    .el-textarea {
      border-bottom: 1px solid $color-gray-3;

      @include pc() {
        font-size: 24px;

        .el-input__count {
          top: 25px;
          bottom: auto;
        }

        &__inner {
          padding: 12px 50px 12px 0;
        }
      }

      @include h5() {
        font-size: 14px;
        padding: 0 10px;

        .el-input__count {
          top: 13px;
          bottom: auto;
        }

        &__inner {
          padding: 12px 30px 12px 0;
        }
      }

      &__inner {
        border-width: 0 !important;
      }
    }
  }

  .footer {
    border-top: 1px solid $color-gray-line;
    padding-top: 30px;
    @include pc() {
      padding-bottom: 30px;
    }

    @include h5() {
      padding-left: 10px;
      padding-right: 10px;
    }

    .button-wrap {
      text-align: center;
      padding-top: 45px;
      margin-top: 45px;
      border-top: 1px solid $color-gray-line;

      @include pc() {
        button {
          width: 150px;
          margin: 0 10px;
        }
      }

      @include h5() {
        margin-bottom: -22px;

        .el-form-item__content {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-left: -10px;
          margin-right: -10px;
        }

        button {
          margin: 0;
          flex-grow: 1;
          display: block;
          border-radius: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div id="wander">
    <div class="wrap">
      <div class="banner">
        <ElUpload
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
            <p>支持8MB内的JPG／JPEG／PNG格式的高清图片<br />（建议大于960*540像素）</p>
          </div>
        </ElUpload>
        <template v-if="title && title.banner">
          <div class="image" :style="{ backgroundImage: `url(${$resize(title.banner.url, { width: 660 })}` }" />
          <div class="tool">
            <i class="el-icon-delete" @click="deleteBanner" />
          </div>
        </template>
      </div>
      <div class="title">
        <ElInput v-model="title.text" :show-word-limit="true" :autosize="{ minRows: 1, maxRows: 2 }" type="textarea" resize="none" placeholder="请输入标题（建议30字以内）" maxlength="40" />
      </div>
      <Editor v-model="content" :slug="slug" :time="last_edit_at" @save="onEditorSave" />
      <ElForm class="footer" label-position="top" label-width="80px">
        <ElFormItem label="选择专栏">
          <NotebookPicker v-model="notebook" />
        </ElFormItem>
        <ElFormItem class="button-wrap">
          <template v-if="slug">
            <ElButton :loading="loading" type="success" round @click="actionUpdate(true)">
              {{ published_at ? '发布更新' : '更新并发布' }}
            </ElButton>
            <ElButton v-if="!published_at" :loading="loading" round plain type="warning" @click="actionUpdate(false)">
              存草稿
            </ElButton>
            <ElButton :loading="loading" type="primary" round plain @click="actionRedo">
              撤销修改
            </ElButton>
          </template>
          <template v-else>
            <ElButton :loading="loading" type="success" round @click="actionCreate(true)">
              发表文章
            </ElButton>
            <ElButton :loading="loading" round plain type="warning" @click="actionCreate(false)">
              存草稿
            </ElButton>
            <ElButton :loading="loading" type="primary" round plain @click="actionRedo">
              删除文章
            </ElButton>
          </template>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>

<script>
import { Upload } from 'element-ui'
import mustSign from '~/mixins/mustSign'
import upload from '~/mixins/upload'
import Editor from '~/components/editor'
import NotebookPicker from '~/components/form/NotebookPicker'

export default {
  name: 'Write',
  layout: 'web',
  components: {
    Editor,
    NotebookPicker,
    ElUpload: Upload
  },
  mixins: [mustSign, upload],
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/pin/update/content', {
        params: { slug }
      })
      .then(res => {
        const data = { ...res }
        data.area = data.area ? data.area.slug : ''
        data.topic = data.topic ? data.topic.slug : ''
        data.notebook = data.notebook ? data.notebook.slug : ''
        return data
      })
      .catch(error)
  },
  data() {
    return {
      slug: '',
      title: {
        banner: null,
        text: ''
      },
      content: [],
      notebook: '',
      area: '',
      topic: '',
      last_edit_at: '',
      published_at: '',
      loading: false
    }
  },
  mounted() {
    if (this.$cache.has(`editor_local_draft_title-${this.slug}`)) {
      this.title = this.$cache.get(`editor_local_draft_title-${this.slug}`)
    }
  },
  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      const banner = res.data
      if (banner.width < 960 || banner.height < 540) {
        this.handleImageUploadRemove(file)
        this.$toast.info('图片尺寸不符合要求')
        return
      }
      this.title.banner = banner
      this.saveTitle()
    },
    onEditorSave() {
      this.saveTitle()
    },
    saveTitle() {
      this.$cache.set(`editor_local_draft_title-${this.slug}`, this.title)
    },
    deleteBanner() {
      this.title.banner = null
      this.saveTitle()
    },
    preValidate() {
      if (this.loading) {
        return true
      }
      if (!this.title.text) {
        this.$toast.info('标题不能为空')
        return true
      }
      if (!this.content.length) {
        this.$toast.info('内容不能为空')
        return true
      }
      this.loading = true
      return false
    },
    actionCreate(publish) {
      if (this.preValidate()) {
        return
      }

      this.$axios
        .$post('v1/pin/create/story', {
          notebook: this.notebook,
          content: [
            {
              type: 'title',
              data: this.title
            }
          ].concat(this.content),
          publish
        })
        .then(slug => {
          this.removeCache()
          window.location = this.$alias.pin(slug)
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    actionUpdate(publish) {
      if (this.preValidate()) {
        return
      }

      const { slug } = this
      this.$axios
        .$post('v1/pin/update/story', {
          slug,
          notebook: this.notebook,
          content: [
            {
              type: 'title',
              data: this.title
            }
          ].concat(this.content),
          publish
        })
        .then(result => {
          this.removeCache()
          window.location = this.$alias.pin(result)
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    actionRedo() {
      if (this.content.length || this.title.text.length || this.title.banner) {
        this.removeCache()
        this.$toast.success(this.slug ? '撤销成功' : '删除成功').then(() => {
          window.location.reload()
        })
      }
    },
    removeCache() {
      this.$cache.remove(`editor_local_draft_title-${this.slug}`)
      this.$cache.remove(`editor_local_draft-${this.slug}`)
    }
  },
  head: {
    title: '创作中心'
  }
}
</script>
