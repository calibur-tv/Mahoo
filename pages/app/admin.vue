<style lang="scss"></style>

<template>
  <div id="app-admin">
    {{ isQQ }}
  </div>
</template>

<script>
export default {
  name: 'AppAdmin',
  layout: 'app',
  components: {},
  props: {},
  data() {
    return {
      isQQ: true
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.isQQ = /qq/.test(window.navigator.userAgent.toLowerCase())
  },
  methods: {},
  head: {
    title: '控制台'
  }
}
</script>
