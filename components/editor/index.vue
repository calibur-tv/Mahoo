<style lang="scss">
.editor-wrap {
  .ce-inline-toolbar--showed {
    display: none !important;
  }

  .image-tool {
    &__image-picture {
      margin: 0 auto !important;
    }

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
      min-width: 100px !important;

      &:before {
        left: 50%;
        transform: translateX(-50%);
      }
    }
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
    source: {
      type: Object,
      default: null
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
        import('@editorjs/marker'),
        import('@editorjs/link'),
        import('@editorjs/image')
      ])
        .then(modules => {
          const self = this
          let data = {}
          if (self.source) {
            data = self.source
          } else if (self.$cache.has('editor_local_draft')) {
            data = self.$cache.get('editor_local_draft')
          }
          const [EditorJS, Header, List, Delimiter, Marker, LinkTool, ImageTool] = modules.map(_ => _.default)
          const editor = new EditorJS({
            data,
            holder: 'codex-editor',
            placeholder: '请输入内容',
            autofocus: self.autofocus,
            tools: {
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
              linkTool: {
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
              marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M'
              }
            }
          })

          editor.isReady
            .then(() => {
              this.editor = editor
              this.bindSaveEvent()
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
        this.$cache.set('editor_local_draft', outputData)
      }).catch(() => {
        this.$toast.error('保存失败')
      })
    }
  }
}
</script>
