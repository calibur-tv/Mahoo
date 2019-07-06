<style lang="scss">
.user-timeline-1 {
  a {
    color: $color-main;
  }
}
</style>

<template>
  <div class="user-timeline-1">
    <span>{{ item.parent_slug === notebookSlug ? '关注专栏' : '加入专区' }}</span>
    <NLink target="_blank" :to="$alias.tag(item.slug)" v-text="item.name" />
  </div>
</template>

<script>
export default {
  name: 'TagBookmark',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      notebookSlug: process.env.TAGS.notebook
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
