<style lang="scss">
.user-timeline-2 {
  a {
    color: $color-main;
  }
}
</style>

<template>
  <div class="user-timeline-2">
    <span>{{ item.parent_slug === notebookSlug ? '新建专栏' : '创建专区' }}</span>
    <NLink target="_blank" :to="$alias.tag(item.slug)" v-text="item.name" />
  </div>
</template>

<script>
export default {
  name: 'TagCreate',
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
