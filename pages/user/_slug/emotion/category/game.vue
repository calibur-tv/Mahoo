<style lang="scss">
#user-game {
  li {
    float: left;
    width: 20%;
    margin-bottom: 25px;
    padding-right: 20px;
  }
}
</style>

<template>
  <div id="user-game">
    <ul>
      <GameItem v-for="item in list" ref="list" :key="item.slug" :item="item" />
    </ul>
  </div>
</template>

<script>
import GameItem from '~/components/flow/GameItem'
import { bookmarkTags } from '~/api/tagApi'

export default {
  name: 'UserGame',
  components: {
    GameItem
  },
  asyncData({ app, error, params }) {
    return bookmarkTags(app, params)
      .then(tags => {
        return { list: tags.game }
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
