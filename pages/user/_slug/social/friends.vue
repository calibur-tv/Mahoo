<template>
  <div id="user-social-friends">
    <flow-loader
      func="getUserRelation"
      type="seenIds"
      :query="query"
    >
      <ul slot-scope="{ flow }">
        <user-relation-item
          v-for="user in flow"
          :key="user.slug"
          :user="user"
          relation="friend"
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
        relation: 'friend'
      }
    }
  }
}
</script>
