<template>
  <div id="user-social-friends">
    <FlowLoader
      ref="loader"
      func="getUserRelation"
      type="seenIds"
      :query="query"
      :callback="detectUserRelation"
    >
      <ul slot-scope="{ flow }">
        <UserRelationItem
          v-for="user in flow"
          :key="user.slug"
          :user="user"
        />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import UserRelationItem from '~/components/user/UserRelationItem'

export default {
  name: 'UserSocialFriends',
  components: {
    UserRelationItem
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
        relation: 'friend',
        changing: 'slug'
      }
    }
  },
  methods: {
    detectUserRelation({ data }) {
      const { result } = data
      if (!result.length) {
        return
      }
      this.$axios.$get('v1/user/detect_relation', {
        params: {
          type: 'user',
          targets: result.map(_ => _.slug).join(',')
        }
      })
        .then(data => {
          this.$store.commit('social/set', {
            type: 'user-follow',
            data: data
          })
          this.$refs.loader.patch(data)
        })
        .catch(() => {})
    }
  }
}
</script>
