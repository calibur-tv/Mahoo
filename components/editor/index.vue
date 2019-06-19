<template>
  <div class="editor-wrap">
    <button @click="handleSave">
      save
    </button>
    <div id="codex-editor" />
  </div>
</template>

<script>
export default {
  name: 'JsonEditor',
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
        import('@editorjs/paragraph'),
        import('@editorjs/delimiter'),
        import('@editorjs/table'),
        import('@editorjs/marker'),
        import('@editorjs/link'),
        import('@editorjs/image')
      ])
        .then(modules => {
          const [EditorJS, Header, List, Paragraph, Delimiter, Table, Marker, LinkTool, ImageTool] = modules.map(_ => _.default)
          const editor = new EditorJS({
            holder: 'codex-editor',
            autofocus: true,
            tools: {
              header: {
                class: Header,
                shortcut: 'CMD+SHIFT+H',
                inlineToolbar: true
              },
              list: {
                class: List,
                inlineToolbar: true
              },
              paragraph: {
                class: Paragraph,
                inlineToolbar: true
              },
              delimiter: Delimiter,
              table: {
                class: Table,
                inlineToolbar: true,
                config: {
                  rows: 2,
                  cols: 3
                }
              },
              marker: {
                class: Marker,
                shortcut: 'CMD+SHIFT+M'
              },
              linkTool: {
                class: LinkTool,
                config: {
                  endpoint: ''
                }
              },
              image: {
                class: ImageTool,
                config: {
                  endpoints: {
                    byFile: '',
                    byUrl: ''
                  }
                }
              }
            }
          })

          editor.isReady
            .then(() => {
              this.editor = editor
            })
            .catch(reason => {
              this.$toast.error(`编辑器初始化失败：${reason}`)
            })
        })
    },
    handleSave() {
      if (!this.editor) {
        return
      }
      this.editor.save().then(outputData => {
        console.log('Article data: ', outputData)
      }).catch(error => {
        console.log('Saving failed: ', error)
      })
    }
  }
}
</script>
