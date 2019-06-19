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
        import('@editorjs/table'),
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
          const [EditorJS, Header, List, Delimiter, Table, Marker, LinkTool, ImageTool] = modules.map(_ => _.default)
          const editor = new EditorJS({
            data,
            holder: 'codex-editor',
            autofocus: true,
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
              table: {
                class: Table,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+T',
                config: {
                  rows: 2,
                  cols: 3
                }
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
