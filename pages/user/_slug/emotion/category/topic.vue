<style lang="scss">
#user-topic {
  li {
    float: left;
    width: 25%;
    padding-right: 10px;
    margin-bottom: 25px;
  }
}
</style>

<template>
  <div id="user-topic">
    <ul>
      <TopicItem v-for="item in list" ref="list" :key="item.slug" :item="item" />
    </ul>
  </div>
</template>

<script>
import TopicItem from '~/components/flow/TopicItem'
import { bookmarkTags } from '~/api/tagApi'

export default {
  name: 'UserBangumi',
  components: {
    TopicItem
  },
  asyncData({ app, error, params }) {
    return bookmarkTags(app, params)
      .then(tags => {
        return { list: tags.topic }
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
