<style lang="scss">
#user-bangumi {
  li {
    width: 50%;
    margin-bottom: 20px;
    padding-right: 20px;
    float: left;
  }
}
</style>

<template>
  <div id="user-bangumi">
    <ul>
      <BangumiItem v-for="item in list" ref="list" :key="item.slug" :item="item" />
    </ul>
  </div>
</template>

<script>
import BangumiItem from '~/components/flow/BangumiItem'
import { bookmarkTags } from '~/api/tagApi'

export default {
  name: 'UserBangumi',
  components: {
    BangumiItem
  },
  asyncData({ app, error, params }) {
    return bookmarkTags(app, params)
      .then(tags => {
        return { list: tags.bangumi }
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
