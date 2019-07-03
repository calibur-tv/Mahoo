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

    .banner {
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
      font-size: 24px;
      border-bottom: 1px solid $color-gray-3;

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

    .button-wrap {
      text-align: center;
      padding-top: 45px;
      margin-top: 45px;
      border-top: 1px solid $color-gray-line;

      button {
        width: 150px;
        margin: 0 10px;
      }
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
          <img class="banner" :src="$resize(title.banner.url, { width: 660 })">
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
        :slug="slug"
        :time="last_edit_at"
        @save="onEditorSave"
      />
      <el-form class="footer" label-position="top" label-width="80px">
        <el-form-item label="选择分区">
          <area-picker v-model="area" />
        </el-form-item>
        <el-form-item label="选择专栏">
          <notebook-picker v-model="notebook" />
        </el-form-item>
        <el-form-item class="button-wrap">
          <template v-if="slug">
            <el-button
              :loading="loading"
              type="success"
              round
              @click="actionUpdate(true)"
            >
              发布更新
            </el-button>
            <el-button
              v-if="visit_type === 1"
              :loading="loading"
              round
              plain
              type="warning"
              @click="actionUpdate(false)"
            >
              存草稿
            </el-button>
            <el-button
              :loading="loading"
              type="primary"
              round
              plain
              @click="actionDelete"
            >
              删除文章
            </el-button>
          </template>
          <template v-else>
            <el-button
              :loading="loading"
              type="success"
              round
              @click="actionCreate(true)"
            >
              发表文章
            </el-button>
            <el-button
              :loading="loading"
              round
              plain
              type="warning"
              @click="actionCreate(false)"
            >
              存草稿
            </el-button>
            <el-button
              :loading="loading"
              type="primary"
              round
              plain
              @click="actionDelete"
            >
              删除文章
            </el-button>
          </template>
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
import NotebookPicker from '~/components/form/NotebookPicker'

export default {
  name: 'Wander',
  layout: 'web',
  components: {
    Editor,
    AreaPicker,
    NotebookPicker,
    'el-upload': Upload
  },
  mixins: [mustSign, upload],
  data() {
    return {
      slug: '',
      title: {
        banner: null,
        text: ''
      },
      content: [],
      notebook: '',
      area: process.env.TAGS.newbie,
      loading: false,
      last_edit_at: '',
      visit_type: 0
    }
  },
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios.$get('v1/pin/update/content', {
      params: { slug }
    })
      .then(data => {
        data.area = data.area.slug
        data.notebook = data.notebook.slug
        return { ...data }
      })
      .catch(error)
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
      if (!this.area) {
        this.$toast.info('请选择分区')
        return true
      }
      if (!this.notebook) {
        this.$toast.info('请选择专栏')
        return true
      }
      this.loading = true
      return false
    },
    actionCreate(publish) {
      if (this.preValidate()) {
        return
      }

      this.$axios.$post('v1/pin/create/story', {
        area: this.area,
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
          this.$cache.remove(`editor_local_draft_title-${this.slug}`)
          this.$cache.remove('editor_local_draft')
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
      this.$axios.$post('v1/pin/update/story', {
        slug,
        area: this.area,
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
          this.$cache.remove(`editor_local_draft_title-${slug}`)
          this.$cache.remove(`editor_local_draft-${slug}`)
          window.location = this.$alias.pin(result)
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    actionDelete() {
      const deleteCache = () => {
        if (this.content.length || this.title.text.length || this.title.banner) {
          this.$cache.remove(`editor_local_draft_title-${this.slug}`)
          this.$cache.remove('editor_local_draft')
          this.$toast.success('删除成功')
            .then(() => {
              window.location.reload()
            })
        }
      }
      if (!this.slug) {
        deleteCache()
        return
      }

      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.loading) {
            return
          }
          this.loading = true
          this.$axios.$post('v1/pin/delete', {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('删除成功')
                .then(() => {
                  deleteCache()
                  window.location = '/'
                })
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.loading = false
            })
        })
        .catch(() => {})
    }
  }
}
</script>
