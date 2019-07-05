<template>
  <div id="user-social-friends">
    <flow-loader
      ref="loader"
      func="getUserRelation"
      type="seenIds"
      :query="query"
      :callback="detectUserRelation"
    >
      <ul slot-scope="{ flow }">
        <user-relation-item
          v-for="user in flow"
          :key="user.slug"
          :user="user"
        />
      </ul>
    </flow-loader>
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
          const arr = []
          Object.keys(data).forEach(slug => {
            arr.push({
              slug,
              ...data[slug]
            })
            this.$store.commit('social/set', {
              type: 'user-follow',
              slug,
              data: data[slug]
            })
          })
          this.$refs.loader.patch(arr)
        })
        .catch(() => {})
    }
  }
}
</script>
