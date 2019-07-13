<style lang="scss">
.join-card {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

  .poster {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,.2);
    }
  }
}
</style>

<template>
  <div class="join-card">
    <VImg class="poster" :src="tag.avatar" width="250" height="150" />
  </div>
</template>

<script>
export default {
  name: 'JoinCard',
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
