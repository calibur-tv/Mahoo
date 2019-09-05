<style lang="scss">
.chat-avatar {
  &-mine {
    margin-left: 10px;
    pointer-events: none;
  }

  &-other {
    margin-right: 10px;
  }
}
</style>

<template>
  <div class="chat-avatar" :class="[isMine ? 'chat-avatar-mine' : 'chat-avatar-other']">
    <UserAvatar :user="item" :size="36" />
  </div>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'

export default {
  name: 'ChatAvatar',
  components: {
    UserAvatar
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMine() {
      return this.$store.state.user.slug === this.item.slug
    }
  }
}
</script>
