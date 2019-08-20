<style lang="scss" module>
.game {
  img {
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    margin-bottom: 11px;
    width: 100%;
    height: auto;
  }

  .name {
    font-size: 18px;
    line-height: 24px;
  }
}
</style>

<template>
  <li :class="$style.game">
    <NLink target="_blank" :to="$alias.tag(item.slug)">
      <VImg :src="item.avatar" width="150" height="150" :alt="item.name" />
      <p :class="$style.name" class="oneline fade-link" v-html="item.name" />
    </NLink>
  </li>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
