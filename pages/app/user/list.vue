<style lang="scss">
#user-list {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .v-switcher-header-item {
    padding: 0 10px;
  }

  .v-switcher-header-wrap {
    border-bottom: 1px solid $color-gray-line;
  }
}
</style>

<template>
  <div id="user-list">
    <template v-if="headers.length">
      <VSwitcher :headers="headers" align="center" @change="handleChange">
        <FlowLoader v-for="(item, index) in headers" ref="loader" :key="index" :slot="`${index}`" :func="item.func" :type="item.type" :query="item.query">
          <ul slot-scope="{ flow }">
            <UserItem v-for="user in flow" :key="user.slug" :user="user" :score="computedUserScore(user, item.query.sort)" />
          </ul>
        </FlowLoader>
      </VSwitcher>
    </template>
    <FlowLoader
      v-else
      :func="query.func"
      :type="query.type"
      :query="{
        $axios,
        ...query
      }"
    >
      <ul slot-scope="{ flow }">
        <UserItem v-for="user in flow" :key="user.slug" :user="user" :score="computedUserScore(user)" />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import UserItem from '~/components/app/UserItem'

export default {
  name: 'UserList',
  layout: 'app',
  components: {
    UserItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    query() {
      return this.$route.query
    },
    headers() {
      const { query } = this
      if (query.type === 'idol_fans') {
        return [
          {
            name: '最近入股',
            func: 'getIdolFans',
            type: 'page',
            query: {
              $axios: this.$axios,
              take: 20,
              slug: query.slug,
              sort: 'news'
            }
          },
          {
            name: '最多入股',
            func: 'getIdolFans',
            type: 'page',
            query: {
              $axios: this.$axios,
              take: 20,
              slug: query.slug,
              sort: 'hots'
            }
          }
        ]
      }
      return []
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChange(index) {
      this.$refs.loader[index].initData()
    },
    computedUserScore(user, sort) {
      const { query } = this
      if (query.type === 'idol_fans') {
        if (sort === 'news') {
          return this.$utils.timeAgo(user.list_score)
        }
        return `${user.list_score}股`
      }
      return ''
    }
  },
  head: {
    title: '用户列表'
  }
}
</script>
