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
    overflow: hidden;
  }

  .tail-area {
    margin-left: 14px;
    flex-shrink: 0;
  }

  .content-meta {
    color: $color-text-3;
    font-size: 12px;
  }
}
</style>

<template>
  <div class="content-author clearfix">
    <div class="avatar-area">
      <UserAvatar :user="user" :size="size" />
    </div>
    <div class="content-area">
      <UserNickname :user="user" />
      <div class="content-meta oneline">
        <slot name="intro" />
      </div>
    </div>
    <div class="tail-area">
      <slot name="tail" />
    </div>
  </div>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'ContentAuthor',
  components: {
    UserAvatar,
    UserNickname
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 40
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.user.slug)
    }
  }
}
</script>
