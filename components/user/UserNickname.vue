<style lang="scss">
.user-nickname {
  display: flex;
  flex-direction: row;
  align-items: center;

  .nickname {
    overflow: hidden;
  }

  .badge {
    flex-shrink: 0;
  }
}
</style>

<template>
  <nuxt-link
    :to="$alias.user(user.slug)"
    class="user-nickname"
  >
    <div class="nickname">
      <p class="oneline" v-text="user.nickname" />
    </div>
    <span v-for="(item, index) in badges" :key="index">{{ item }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserNickname',
  props: {
    user: {
      type: Object,
      required: true
    },
    badges: {
      type: Array,
      default: () => []
    }
  }
}
</script>
