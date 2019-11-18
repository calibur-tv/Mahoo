<template>
  <div id="user-notebook">
    <ul>
      <NotebookItem v-for="item in list" ref="list" :key="item.slug" :item="item" />
    </ul>
  </div>
</template>

<script>
import NotebookItem from '~/components/flow/NotebookItem'
import { bookmarkTags } from '~/api/tagApi'

export default {
  name: 'UserNotebook',
  components: {
    NotebookItem
  },
  asyncData({ app, error, params }) {
    return bookmarkTags(app, params)
      .then(tags => {
        return { list: tags.notebook }
      })
      .catch(error)
  },
  data() {
    return {
      list: []
    }
  },
  beforeMount() {
    this.batchPatch()
  },
  methods: {
    batchPatch() {
      this.$axios
        .$get('v1/tag/batch_patch', {
          params: {
            slug: this.list.map(_ => _.slug).join(',')
          }
        })
        .then(data => {
          this.list.forEach((item, index) => {
            Object.keys(data).forEach(slug => {
              if (item.slug === slug) {
                this.$set(this.list, index, Object.assign(item, data[slug]))
                this.$refs.list[index].$forceUpdate()
              }
            })
          })
        })
        .catch(() => {})
    }
  }
}
</script>
