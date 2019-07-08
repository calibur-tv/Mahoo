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
      height: $page-header-hgt;
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
          margin-right: 15px;
          font-size: 0;
        }

        .v-switcher {
          &-header {
            &-anchor {
              top: $page-header-hgt - 2px;
              height: 2px;
              background-color: $color-main;
            }
          }

          a {
            display: block;
            font-size: 15px;
            color: #222;
            height: 100%;

            &.nuxt-link-exact-active {
              color: $color-main;
            }

            span {
              display: inline-block;
              padding: 0 15px;
              height: 30px;
              line-height: 30px;
              border-radius: 4px;
            }

            &:hover {
              color: $color-main;

              span {
                background-color: #F3F3F3;
              }
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

            .img {
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
          margin-left: 15px;
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
          <NLink class="logo" to="/">
            <VImg src="default-poster" width="32" height="32" radius="50%" alt="calibur" />
          </NLink>
          <VSwitcher :headers="headers" :routable="true" :anchor-padding="15" :header-height="50" align="start">
            <NLink
              v-for="(item, index) in headers"
              :key="index"
              :slot="`tab-${index}`"
              :to="item.route"
            >
              <span v-text="item.name" />
            </NLink>
          </VSwitcher>
        </nav>
        <div class="right">
          <template v-if="showUser">
            <template v-if="isAuth">
              <div class="user-panel icon-link">
                <NLink
                  :to="$alias.user(user.slug)"
                  class="avatar"
                >
                  <VImg
                    :src="user.avatar"
                    def="default-avatar"
                    width="33"
                    height="33"
                    radius="50%"
                    :alt="user.nickname"
                  />
                </NLink>
                <div class="user-popover">
                  <div class="bottom">
                    <button @click="handleLogout">
                      退出
                    </button>
                  </div>
                </div>
              </div>
              <NLink class="icon-link" :to="$alias.user(user.slug, 'message')">
                <ElBadge :value="mailbox.unread_notice_total + mailbox.unread_message_total" :hidden="!mailbox.unread_message_total && !mailbox.unread_notice_total">
                  <i class="iconfont ic-remind" />
                </ElBadge>
              </NLink>
            </template>
            <template v-else>
              <el-button
                type="text"
                @click="handleSignIn"
              >
                登录
              </el-button>
            </template>
          </template>
          <div class="creator-wrap">
            <NLink target="_blank" :to="$alias.create()">
              <el-button size="small" type="primary" icon="el-icon-s-promotion">
                投稿
              </el-button>
            </NLink>
          </div>
        </div>
      </div>
    </div>
    <div class="header-shim" />
  </header>
</template>

<script>
import { Badge } from 'element-ui'
import { throttle } from 'throttle-debounce'
import { logout } from '~/api/userApi'

export default {
  components: {
    ElBadge: Badge
  },
  props: {
    showUser: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      headers: [
        {
          route: '/zone/bangumi',
          name: '动漫'
        },
        {
          route: '/zone/game',
          name: '游戏'
        },
        {
          route: '/zone/topic',
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
  mounted() {
    this.$channel.$when('user-signed', () => {
      this.getUnreadMessageCount()
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
      this.$store.dispatch('refreshMailbox')
      let lastMoveAt = Date.now()
      let isVisible = true
      window.addEventListener('mousemove', throttle(3000, () => {
        lastMoveAt = Date.now()
      }))
      document.addEventListener('visibilitychange', () => {
        isVisible = document.visibilityState === 'visible'
      })
      setInterval(() => {
        if (isVisible && Date.now() - lastMoveAt < 30000) {
          this.$store.dispatch('refreshMailbox')
        }
      }, 10000)
    }
  }
}
</script>
