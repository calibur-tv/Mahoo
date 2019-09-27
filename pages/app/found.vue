<template>
  <div id="app-found">
    <VSwitcher :headers="['关注', '推荐']" sticky swipe animated>
      <template slot="0">
        关注
      </template>
      <template slot="1">
        推荐
      </template>
    </VSwitcher>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
  layout: 'app',
  components: {},
  props: {},
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
