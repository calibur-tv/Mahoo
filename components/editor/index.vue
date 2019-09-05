<style lang="scss">
.editor-wrap {
  @include h5() {
    padding: 0 10px;
  }

  .ce-inline-toolbar--showed {
    display: none !important;
  }

  .ce-block {
    font-weight: normal;
    font-style: normal;

    h1,
    h2 {
      border-bottom: 1px solid $color-gray-line;
      padding-bottom: 10px;
      padding-top: 1.5em;
      margin-bottom: 1px;
    }

    h3 {
      padding-top: 1.5em;
    }

    a {
      display: none;
    }

    &__content {
      max-width: 100%;
    }
  }

  .ce-paragraph {
    @extend %breakWord;
  }
}
</style>

<template>
  <div class="editor-wrap">
    <div id="codex-editor" class="mousetrap" />
  </div>
</template>

<script>
import upload from '~/mixins/upload'
import { uploadToQiniu } from '~/api/imageApi'
import HeaderPlugin from '~/components/editor/plugin/header'
import BaiduPlugin from '~/components/editor/plugin/baidu'
import EmbedPlugin from '~/components/editor/plugin/media/embed'
import DelimiterPlugin from '~/components/editor/plugin/delimiter'
import ListPlugin from '~/components/editor/plugin/list'
import ChecklistPlugin from '~/components/editor/plugin/checklist'
import MarkPlugin from '~/components/editor/plugin/mark'
import ParagraphPlugin from '~/components/editor/plugin/paragraph'
import VotePlugin from '~/components/editor/plugin/vote'

export default {
  name: 'JsonEditor',
  mixins: [upload],
  props: {
    value: {
      required: true,
      type: Array
    },
    slug: {
      type: String,
      default: ''
    },
    time: {
      type: [String, Number],
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      Promise.all([import('@editorjs/editorjs'), import('~/components/editor/plugin/image'), import('~/components/editor/plugin/link')]).then(modules => {
        const self = this
        let data = {}
        if (self.slug) {
          // 编辑模式
          const cache = self.$cache.get(`editor_local_draft-${self.slug}`)
          if (cache && cache.time > self.$utils.adjustDate(self.time).getTime()) {
            // 如果有缓存，并且缓存的版本更高，就使用缓存
            data = cache
          } else {
            data = {
              blocks: self.value,
              time: Date.now(),
              version: self.$cache.get('editor_version', '2.15.0')
            }
          }
        } else {
          data = self.$cache.get('editor_local_draft-')
          if (data) {
            self.$emit('input', data.blocks)
          }
        }
        const [EditorJS, ImagePlugin, LinkPlugin] = modules.map(_ => _.default)
        const editor = new EditorJS({
          data: self.decodeData(data || {}),
          holder: 'codex-editor',
          placeholder: '请输入内容',
          autofocus: self.autofocus,
          tools: {
            video: {
              class: EmbedPlugin,
              inlineToolbar: true
            },
            marker: {
              class: MarkPlugin,
              shortcut: 'CMD+SHIFT+M'
            },
            header: {
              class: HeaderPlugin,
              inlineToolbar: true
            },
            image: {
              class: ImagePlugin,
              types: 'image/jpeg, image/png, image/jpg',
              config: {
                uploader: {
                  uploadByFile(file) {
                    return new Promise((resolve, reject) => {
                      const formData = new FormData()
                      formData.append('file', file)
                      formData.append('token', self.uploadHeaders.token)
                      uploadToQiniu(self, formData)
                        .then(data => {
                          data.url = `https://m1.calibur.tv/${data.url}`
                          resolve({
                            success: 1,
                            file: data
                          })
                        })
                        .catch(reject)
                    })
                  }
                }
              }
            },
            link: {
              class: LinkPlugin,
              config: {
                endpoint: `${process.env.API_URL_BROWSER}v1/pin/editor/fetch_site`
              }
            },
            delimiter: {
              class: DelimiterPlugin
            },
            list: {
              class: ListPlugin,
              inlineToolbar: true
            },
            checklist: {
              class: ChecklistPlugin,
              inlineToolbar: true
            },
            baidu: {
              class: BaiduPlugin
            },
            paragraph: {
              class: ParagraphPlugin
            },
            vote: {
              class: VotePlugin
            }
          },
          onChange: () => {
            self.handleSave()
          }
        })

        editor.isReady
          .then(() => {
            this.editor = editor
            this.bindSaveEvent()
            this.handleSave()
          })
          .catch(reason => {
            this.$toast.error(`编辑器初始化失败：${reason}`)
          })
      })
    },
    bindSaveEvent() {
      document.addEventListener(
        'keydown',
        e => {
          if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
            e.stopPropagation()
            e.preventDefault()
            this.handleSave()
          }
        },
        false
      )
    },
    handleSave() {
      if (!this.editor) {
        return
      }
      this.editor
        .save()
        .then(outputData => {
          const value = this.encodeData(outputData)
          const cacheKey = `editor_local_draft-${this.slug || ''}`
          this.$cache.set(cacheKey, value)
          this.$cache.set('editor_version', value.version)
          if (this.value) {
            this.$emit('input', value.blocks)
          }
          this.$emit('save')
        })
        .catch(() => {
          this.$toast.error('保存失败')
        })
    },
    decodeData({ version, blocks, time }) {
      if (!blocks) {
        return null
      }
      blocks.forEach((item, index) => {
        if (item.type === 'music') {
          blocks[index].type = 'video'
        }
      })
      return {
        version,
        blocks,
        time
      }
    },
    encodeData({ version, blocks, time }) {
      blocks.forEach((item, index) => {
        if (item.type === 'video' && item.data.service.startsWith('netease')) {
          blocks[index].type = 'music'
          blocks[index].data.embed = blocks[index].data.embed.replace(/&amp;/g, '&')
        }
      })
      return {
        version,
        blocks,
        time
      }
    }
  }
}
</script>
