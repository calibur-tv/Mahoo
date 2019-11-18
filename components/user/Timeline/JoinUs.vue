<style lang="scss">
.user-timeline-0 {
  a {
    color: $color-main;
  }
}
</style>

<template>
  <div class="user-timeline-0">
    <template v-if="item"> 由 <NLink target="_blank" :to="$alias.user(item.slug)" v-html="item.nickname" />邀请加入 calibur！ </template>
    <template v-else>
      加入 calibur！
    </template>
  </div>
</template>

<script>
export default {
  name: 'JoinUs',
  props: {
    item: {
      type: [Object, null],
      required: true
    }
  }
}
</script>
