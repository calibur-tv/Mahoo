<style lang="scss">
#menubar {
  .v-switcher {
    &-header {
      width: 100%;

      &-wrap {
        width: 100%;
      }

      &-item {
        text-align: left;
      }
    }

    a {
      display: block;
      border-bottom-width: 0;
    }
  }
}
</style>

<template>
  <aside id="menubar">
    <v-switcher :headers="headers" :routable="true" align="vertical" />
    <!--
    <i-divider orientation="left">热门圈子</i-divider>
    -->
  </aside>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      headers: [
        {
          route: 'index',
          name: '为你推荐'
        },
        {
          route: 'trending-hottest-daily',
          name: '近期热门'
        },
        {
          route: 'trending-newest',
          name: '最新内容'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
