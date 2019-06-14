<style lang="scss">
#page-header {
  .header-fixed {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: $page-header-hgt;
    z-index: 11;
    box-shadow: 0 1px 2px rgba(0 ,0 ,0 , 0.1);
    background-color: #fff;

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

        .icon-link {
          width: $page-header-hgt;
          height: $page-header-hgt;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            background-color: #F3F3F3;
          }

          i {
            font-size: 25px;
          }
        }

        .user-panel {
          position: relative;
          height: $page-header-hgt;
          margin-right: 8px;

          &:hover {
            background-color: transparent;

            .user-popover {
              opacity: 1;
              visibility: visible;
            }

            .avatar {
              transform: scale(2) translateY(10px);
            }
          }

          .avatar {
            position: relative;
            transition: .3s;
            z-index: 1;

            img {
              width: 33px;
              height: 33px;
              border-radius: 50%;
              border: 1px solid $color-gray-1;
            }
          }

          .user-popover {
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%);
            background-color: #fff;
            width: 260px;
            padding: 50px 0 0;
            box-shadow: 0 2px 4px rgba(0,0,0,.16);
            border-radius: 0 0 4px 4px;
            transition: .3s;

            &:hover {
              opacity: 1;
              visibility: visible;
            }

            .bottom {
              padding: 0 20px;
              height: 30px;
              line-height: 30px;
              background-color: #f4f5f7;
              text-align: right;
              font-size: 12px;
            }
          }
        }

        .creator-wrap {
          margin-left: 8px;
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
          <template v-if="isAuth">
            <div class="user-panel icon-link">
              <nuxt-link
                :to="$alias.user(user.slug)"
                class="avatar"
              >
                <img :src="$resize(user.avatar, { width: 64 })" :alt="user.nickname">
              </nuxt-link>
              <div class="user-popover">
                <div class="bottom">
                  <button @click="handleLogout">
                    退出
                  </button>
                </div>
              </div>
            </div>
            <nuxt-link class="icon-link" :to="$alias.user(user.slug, 'message')">
              <el-badge :value="mailbox.unread_message_total" :hidden="!mailbox.unread_message_total">
                <i class="iconfont ic-message" />
              </el-badge>
            </nuxt-link>
            <nuxt-link class="icon-link" :to="$alias.user(user.slug, 'notice')">
              <el-badge :value="mailbox.unread_notice_total" :hidden="!mailbox.unread_notice_total">
                <i class="iconfont ic-remind" />
              </el-badge>
            </nuxt-link>
          </template>
          <template v-else>
            <el-button
              type="text"
              @click="handleSignIn"
            >
              登录
            </el-button>
          </template>
          <div class="creator-wrap">
            <nuxt-link to="/create/cosplay/">
              <el-button size="small" type="primary" icon="el-icon-s-promotion">
                投稿
              </el-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header-shim" />
  </header>
</template>

<script>
import { logout } from '~/api/userApi'
import { Badge } from 'element-ui'
import { throttle } from 'throttle-debounce'

export default {
  components: {
    'el-badge': Badge
  },
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
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    },
    mailbox() {
      return this.$store.state.mailbox
    }
  },
  beforeMount() {
    this.$watch('isAuth', val => {
      if (val) {
        this.getUnreadMessageCount()
      }
    })
  },
  methods: {
    handleLogout() {
      logout(this)
      this.$cookie.remove('JWT-TOKEN')
      this.$channel.socketDisconnect()
      window.location = '/'
    },
    handleSignIn() {
      this.$channel.$emit('sign-in')
    },
    getUnreadMessageCount() {
      this.$channel.socketConnect()
      setTimeout(() => {
        if (this.$store.state.socket.reconnectErr) {
          this.$store.dispatch('refreshMailbox')
        }
      }, 1000)
      let lastMoveAt = Date.now()
      window.addEventListener('mousemove', throttle(3000, () => {
        lastMoveAt = Date.now()
      }))
      setInterval(() => {
        if (Date.now() - lastMoveAt < 60000) {
          this.$store.dispatch('refreshMailbox')
        }
      }, 30000)
    }
  }
}
</script>
