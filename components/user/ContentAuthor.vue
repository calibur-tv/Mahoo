<style lang="scss">
.content-author {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  .avatar-area {
    margin-right: 10px;
  }

  .content-area {
    flex-grow: 1;
  }

  .tail-area {
    margin-left: 10px;
  }

  .content-meta {
    color: $color-text-3;
  }
}
</style>

<template>
  <div class="content-author clearfix">
    <div class="avatar-area">
      <user-avatar :user="user" :size="size" />
    </div>
    <div class="content-area">
      <user-nickname :user="user" />
      <div class="content-meta oneline">
        <slot name="intro" />
      </div>
    </div>
    <div class="tail-area">
      <slot v-if="isMine" name="mine" />
      <user-follow-btn v-else v-model="relation" :slug="user.slug" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import UserFollowBtn from '~/components/button/UserFollowBtn'

export default {
  name: 'ContentAuthor',
  components: {
    UserAvatar,
    UserNickname,
    UserFollowBtn
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 40
    },
    relation: {
      type: String,
      default: 'unknown'
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.user.slug)
    }
  }
}
</script>
