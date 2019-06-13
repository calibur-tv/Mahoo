<style lang="scss">
.user-rel-item {
  .avatar {
    float: left;
  }

  .control {
    float: right;
  }

  .intro {
    overflow: hidden;
  }
}
</style>

<template>
  <li class="user-rel-item clearfix">
    <div class="avatar">
      <user-avatar :user="user" />
    </div>
    <div class="control">
      <user-follow-btn v-model="action" :slug="user.slug" @change="handleFollowAction" />
      <send-mail-btn :slug="user.slug" />
    </div>
    <div class="intro">
      <user-nickname :user="user" />
    </div>
  </li>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import UserFollowBtn from '~/components/button/UserFollowBtn'
import SendMailBtn from '~/components/button/SendMailBtn'

export default {
  name: 'UserRelationItem',
  components: {
    UserAvatar,
    UserNickname,
    UserFollowBtn,
    SendMailBtn
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    relation: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      action: this.relation
    }
  },
  methods: {
    handleFollowAction({ relation }) {
      this.action = relation
    }
  }
}
</script>
