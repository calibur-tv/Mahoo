<style lang="scss">
$tabBarHeight: 50px;
#app-launch {
  height: 100vh;
  padding-bottom: $tabBarHeight;

  .tab-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    height: $tabBarHeight;
    width: 100%;

    .v-switcher {
      &-header {
        &-wrap {
          height: $tabBarHeight;
        }

        &-item {
          height: $tabBarHeight;
          transition: color 0.2s;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div id="app-launch">
    <nuxt-child />
    <div class="tab-bar">
      <v-switcher
        :routeable="true"
        :headers="tabs"
      >
        <nuxt-link
          slot="tab-0"
          to="/app/launch"
        >
          <span>首页</span>
        </nuxt-link>
        <nuxt-link
          slot="tab-1"
          to="/app/launch/create"
        >
          <span>创建</span>
        </nuxt-link>
        <nuxt-link
          slot="tab-2"
          to="/app/launch/home"
        >
          <span>我的</span>
        </nuxt-link>
      </v-switcher>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      tabs: [
        {
          route: '/app/launch',
          name: '首页'
        },
        {
          route: '/app/launch/create',
          name: '创建'
        },
        {
          route: '/app/launch/home',
          name: '我的'
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
