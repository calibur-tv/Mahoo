<style lang="scss"></style>

<template>
  <div id="bangumi-join">
    该分区还未出题，请等待出题后再来~
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'

export default {
  name: 'BangumiJoin',
  layout: 'app',
  mixins: [mustSign],
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  head: {
    title: '答题'
  }
}
</script>
