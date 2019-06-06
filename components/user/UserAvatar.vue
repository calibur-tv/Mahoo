<style lang="scss">
.user-avatar {
  display: block;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

<template>
  <div
    v-if="disabled"
    :style="{ width: `${size}px`, height: `${size}px` }"
    class="user-avatar"
  >
    <img class="avatar" :src="$resize(avatar || user.avatar, { width: size })" :alt="user.nickname">
  </div>
  <nuxt-link
    v-else
    :style="{ width: `${size}px`, height: `${size}px` }"
    :to="$alias.user(user.slug)"
    class="user-avatar"
  >
    <img class="avatar" :src="$resize(avatar || user.avatar, { width: size })" :alt="user.nickname">
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true
    },
    avatar: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 40
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
