<style lang="scss" module>
.list {
  ul,
  ol {
    margin-left: 19px;
    padding: 0.7em 0;
    font-size: 14px;
  }

  ul li {
    list-style-type: disc;
  }

  ol li {
    list-style-type: decimal;
  }

  li {
    line-height: 25px;
    margin-bottom: 2px;
    @extend %breakWord;
  }
}
</style>

<template>
  <div :class="$style.list">
    <ol v-if="item.data.style === 'ordered'">
      <li v-for="(li, index) in item.data.items" :key="index" v-html="li" />
    </ol>
    <ul v-else>
      <li v-for="(li, index) in item.data.items" :key="index" v-html="li" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JsonList',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
