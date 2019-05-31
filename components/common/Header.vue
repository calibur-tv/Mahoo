<style lang="scss">
#page-header {
  .header-fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: $page-header-hgt;
    z-index: 3;
    box-shadow: 0 1px 2px rgba(0 ,0 ,0 , 0.1);
    background-color: #fff;

    @media (max-width: 991px) {
      height: 44px;
      line-height: 44px;
      padding: 0;
    }

    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .logo {
          line-height: $page-header-hgt;
          margin-left: 10px;
          margin-right: 10px;
          font-size: 0;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }

        .v-switcher {
          a {
            display: block;
            padding: 0 12px;
            font-size: 15px;
            line-height: 34px;
            background-color: transparent;
            border-radius: 4px;
            color: #222;
            border-bottom-width: 0;
            height: 100%;

            &:hover {
              background-color: #F3F3F3;
            }

            &.nuxt-link-exact-active {
              color: $color-main;
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .user-panel {
          .avatar {
            img {
              width: 33px;
              height: 33px;
              border-radius: 50%;
              border: 1px solid $color-gray-normal;
            }
          }
        }
      }
    }
  }

  .header-shim {
    height: $page-header-hgt;
    width: 100%;
  }
}
</style>

<template>
  <header id="page-header">
    <div class="header-fixed">
      <div class="container nav">
        <nav class="left">
          <nuxt-link class="logo" to="/">
            <img :src="$resize('default-poster', { width: 32 })" alt="calibur">
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
          <no-ssr>
            <div
              v-if="login"
              class="user-panel"
            >
              <nuxt-link
                :to="$alias.user(user.slug)"
                class="avatar"
              >
                <img :src="$resize(user.avatar, { width: 32 })" :alt="user.nickname">
              </nuxt-link>
            </div>
          </no-ssr>
          &nbsp;&nbsp;
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
            <el-button size="small" type="primary" icon="el-icon-s-promotion">
              投稿
            </el-button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-shim" />
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
    },
    user() {
      return this.$store.state.user
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleLogout() {
      this.$store.dispatch('removeAuth')
      this.$cookie.remove('JWT-TOKEN')
      this.$channel.socketDisconnect()
      window.location = '/'
    },
    handleSignIn() {
      this.$channel.$emit('sign-in')
    }
  }
}
</script>
