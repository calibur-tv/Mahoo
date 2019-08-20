<style lang="scss" module>
.topic {
  :global(.img) {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #e5e9ef;
    margin-right: 12px;
    float: left;
  }

  .name {
    overflow: hidden;
    line-height: 40px;
  }
}
</style>

<template>
  <li :class="$style.topic">
    <NLink class="avatar" target="_blank" :to="$alias.tag(item.slug)">
      <VImg :src="item.avatar" width="40" height="40" :alt="item.name" />
    </NLink>
    <p :class="$style.name" class="oneline">
      <NLink class="fade-link" target="_blank" :to="$alias.tag(item.slug)" v-html="item.name" />
    </p>
  </li>
</template>

<script>
export default {
  name: 'TopicItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
