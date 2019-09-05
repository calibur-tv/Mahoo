<template>
  <div id="user-social-following">
    <ElAlert v-if="isMine" title="如果你并不关注TA，那么就取关吧" type="success" />
    <FlowLoader ref="loader" func="getUserRelation" type="seenIds" :query="query" :callback="detectUserRelation">
      <ul slot-scope="{ flow }">
        <UserRelationItem v-for="user in flow" :key="user.slug" :user="user" />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import { Alert } from 'element-ui'
import UserRelationItem from '~/components/user/UserRelationItem'

export default {
  name: 'UserSocialFollowing',
  components: {
    UserRelationItem,
    ElAlert: Alert
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        relation: 'following',
        changing: 'slug'
      }
    },
    isMine() {
      return this.$store.getters.isMine(this.slug)
    }
  },
  methods: {
    detectUserRelation({ data }) {
      const { result } = data
      if (!result.length) {
        return
      }
      this.$axios
        .$get('v1/user/detect_relation', {
          params: {
            type: 'user',
            targets: result.map(_ => _.slug).join(',')
          }
        })
        .then(data => {
          this.$store.commit('social/set', {
            type: 'user-follow',
            data
          })
          this.$refs.loader.patch(data)
        })
        .catch(() => {})
    }
  }
}
</script>
