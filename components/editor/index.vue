<style lang="scss">
.editor-wrap {
  .ce-inline-toolbar--showed {
    display: none !important;
  }

  .ce-delimiter {
    background-image: url(~assets/img/divider.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50%;
    height: 100px;

    &:before {
      content: none !important;
    }
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

  .cdx-list {
    margin-left: 19px;
    padding: .7em 0;
    font-size: 14px;

    li {
      line-height: 25px;
      margin-bottom: 2px;
      padding: 0;
      @extend %breakWord;
    }
  }

  .image-tool {
    &__image {
      border-radius: 0;
      margin-bottom: 0;

      &-picture {
        margin: 0 auto !important;
      }
    }

    &--withBackground .image-tool__image {
      background-color: $color-gray-bg;
    }

    &--withBorder .image-tool__image {
      border-color: $color-gray-border;
    }
  }

  .embed-tool {
    iframe {
      margin: 0 auto;
      display: block;
    }
  }

  .image-tool,
  .embed-tool {
    &__caption {
      display: inline-block;
      position: relative;
      width: auto !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      text-align: center !important;
      box-shadow: none !important;
      border-top-width: 0 !important;
      border-left-width: 0 !important;
      border-right-width: 0 !important;
      border-radius: 0 !important;
      min-width: 115px !important;
      border-color: $color-gray-line;

      &[contentEditable=true][data-placeholder]::before {
        content: '文字描述';
      }

      &:before {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .link-tool__content {
    display: block !important;
  }

  .cdx-checklist__item {
    padding-left: 0;
    padding-right: 0;

    &--checked {
      .cdx-checklist__item-checkbox {
        background-color: $color-main;
        border-color: $color-main;

        &:hover {
          border-color: $color-main-dark;
          background-color: $color-main-dark;
        }
      }
    }
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
      type: String,
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
      Promise.all([
        import('@editorjs/editorjs'),
        import('@editorjs/header'),
        import('@editorjs/list'),
        import('@editorjs/delimiter'),
        import('@editorjs/link'),
        import('@editorjs/image'),
        import('@editorjs/checklist'),
        import('@editorjs/embed')
      ])
        .then(modules => {
          const self = this
          let data = {}
          if (self.slug) {
            // 编辑模式
            const cache = self.$cache.get(`editor_local_draft-${self.slug}`)
            if (cache && cache.time > new Date(self.time).getTime()) {
              // 如果有缓存，并且缓存的版本更高，就使用缓存
              data = cache
            } else {
              data = {
                blocks: self.value,
                time: Date.now(),
                version: self.$cache.get('editor_version', '2.14.0')
              }
            }
          } else if (self.$cache.has('editor_local_draft')) {
            data = self.$cache.get('editor_local_draft')
            self.$emit('input', data.blocks)
          }
          const [EditorJS, Header, List, Delimiter, LinkTool, ImageTool, Checklist, Embed] = modules.map(_ => _.default)
          const editor = new EditorJS({
            data: self.decodeData(data || {}),
            holder: 'codex-editor',
            placeholder: '请输入内容',
            autofocus: self.autofocus,
            tools: {
              video: {
                class: Embed,
                inlineToolbar: true,
                config: {
                  services: {
                    bilibili: {
                      regex: /https?:\/\/www\.bilibili\.com\/video\/av([\w\W]*)/,
                      embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
                      html: "<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
                      id: val => val[0].split('/')[0].split('?')[0]
                    },
                    bilih5: {
                      regex: /https?:\/\/m\.bilibili\.com\/video\/av([\w\W]*)/,
                      embedUrl: '//player.bilibili.com/player.html?aid=<%= remote_id %>',
                      html: "<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",
                      id: val => val[0].split('.')[0].split('?')[0]
                    },
                    netease: {
                      regex: /https?:\/\/music\.163\.com\/#\/song\?id=([\w\W]*)/,
                      embedUrl: '//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>',
                      html: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",
                      id: val => val[0].split('/')[0].split('?')[0]
                    },
                    neteaseh5: {
                      regex: /https?:\/\/music\.163\.com\/m\/song\?id=([\w\W]*)/,
                      embedUrl: '//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>',
                      html: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",
                      id: val => val[0].split('/')[0].split('?')[0]
                    }
                  }
                }
              },
              header: {
                class: Header,
                shortcut: 'CMD+SHIFT+H',
                inlineToolbar: true
              },
              image: {
                class: ImageTool,
                shortcut: 'CMD+SHIFT+P',
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
                class: LinkTool,
                shortcut: 'CMD+SHIFT+L',
                config: {
                  endpoint: `${process.env.API_URL_BROWSER}v1/pin/editor/fetch_site`
                }
              },
              delimiter: Delimiter,
              list: {
                class: List,
                shortcut: 'CMD+SHIFT+U',
                inlineToolbar: true
              },
              checklist: {
                class: Checklist,
                inlineToolbar: true
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
      document.addEventListener('keydown', e => {
        if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
          e.stopPropagation()
          e.preventDefault()
          this.handleSave()
        }
      }, false)
    },
    handleSave() {
      if (!this.editor) {
        return
      }
      this.editor.save().then(outputData => {
        const value = this.encodeData(outputData)
        const cacheKey = this.slug ? `editor_local_draft-${this.slug}` : 'editor_local_draft'
        this.$cache.set(cacheKey, value)
        this.$cache.set('editor_version', value.version)
        if (this.value) {
          this.$emit('input', value.blocks)
        }
        this.$emit('save')
      }).catch(() => {
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
