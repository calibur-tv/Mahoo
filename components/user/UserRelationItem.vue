<style lang="scss">
.user-rel-item {
  position: relative;
  padding: 20px 0;
  line-height: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  .avatar {
    margin-right: 15px;
    flex-shrink: 0;
  }

  .control {
    margin-left: 10px;
    flex-shrink: 0;
  }

  .intro {
    flex-grow: 1;
    overflow: hidden;

    .nickname {
      font-size: 16px;
    }

    .intro {
      color: #6d757a;
      line-height: 20px;
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <li class="user-rel-item clearfix">
    <div class="avatar">
      <user-avatar :user="user" :size="60" />
    </div>
    <div class="intro">
      <user-nickname :user="user" />
      <p class="oneline intro" v-text="user.signature" />
    </div>
    <div class="control">
      <user-follow-btn
        v-model="user.relation"
        :slug="user.slug"
      />
      <send-mail-btn :slug="user.slug" />
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
    }
  }
}
</script>
