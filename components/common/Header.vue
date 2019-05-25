<style lang="scss">
$page-height: 60px;
$border-height: 3px;

#page-header {
  position: relative;
  z-index: 3;
  border-top: 3px solid $color-main;
  box-shadow: 0 2px 6px 0 rgba(36, 33, 46, 0.06);
  background-color: #fff;

  .nav {
    height: $page-height;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 991px) {
      height: 44px;
      line-height: 44px;
      padding: 0;
    }
  }

  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .logo {
      line-height: $page-height;
      margin-right: 20px;
      font-size: 24px;

      .prefix {
        padding: 5px 5px;
        color: #333333;
      }
    }

    .v-switcher {
      li {
        margin-left: 3px;
        padding: 0;
      }

      a {
        display: block;
        padding: 0 12px;
        font-weight: 600;
        font-size: 16px;
        line-height: 34px;
        background-color: transparent;
        border-radius: 4px;
        color: #757575;
        border-bottom-width: 0;

        &:hover {
          background-color: #F3F3F3;
        }

        &.nuxt-link-exact-active {
          color: $color-main;
        }
      }
    }
  }
}
</style>

<template>
  <header id="page-header">
    <div class="container nav">
      <nav class="left">
        <nuxt-link class="logo" to="/">
          <span class="prefix">calibur.tv</span>
        </nuxt-link>
        <v-switcher :headers="headers" :routable="true" align="start">
          <nuxt-link
            v-for="(item, index) in headers"
            :key="index"
            :slot="`tab-${index}`"
            :to="item.route"
          >
            <span v-text="item.name" />
          </nuxt-link>
        </v-switcher>
      </nav>
      <div class="right">
        <el-button
          v-if="login"
          type="text"
          @click="handleLogout"
        >
          退出
        </el-button>
        <el-button
          v-else
          type="text"
          @click="handleSignIn"
        >
          登录
        </el-button>
        &nbsp;&nbsp;
        <nuxt-link to="/create/cosplay/">
          <el-button size="large" type="primary" icon="el-icon-s-promotion">
            投稿
          </el-button>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      headers: [
        {
          route: '/',
          name: '首页'
        },
        {
          route: '/tag/2he',
          name: '动漫'
        },
        {
          route: '/tag/285',
          name: '游戏'
        },
        {
          route: '/tag/3p6',
          name: '话题'
        }
      ]
    }
  },
  computed: {
    login() {
      return this.$store.state.login
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleLogout() {
      this.$store.dispatch('destroyAuth')
      this.$cookie.remove('JWT-TOKEN')
      window.location = '/'
    },
    handleSignIn() {
      this.$channel.$emit('sign-in')
    }
  }
}
</script>
