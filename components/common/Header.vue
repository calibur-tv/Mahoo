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
          margin-right: 10px;
          font-size: 0;

          svg {
            display: block;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            fill: $color-main;
          }
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
            width: 295px;
            padding: 25px 12px 12px;
            box-shadow: 0 8px 20px 0 rgba(158,179,193,.3);
            border-radius: 0 0 10px 10px;
            transition: .3s;

            &:hover {
              opacity: 1;
              visibility: visible;
            }

            .nickname {
              margin: 10px 0;
              text-align: center;
              font-size: 16px;
              color: #666;
            }

            .field {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding: 5px;
              margin-left: -5px;
              margin-right: -5px;
              border-radius: 5px;

              &:hover {
                background-color: #f4f5f7;
              }

              .label {
                margin-left: 5px;
                cursor: default;
                color: $color-text-2;

                .iconfont {
                  font-size: 16px;
                  color: $color-icon-2;
                }
              }
            }

            .sign-out {
              display: block;
              width: 100%;
              height: 30px;
              line-height: 30px;
              background-color: #f4f5f7;
              text-align: center;
              font-size: 12px;
              border-radius: 5px;
              margin-top: 10px;

              &:hover {
                color: $color-main;
              }
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
          <NLink class="logo" to="/homepage">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="180.000000pt"
              height="180.000000pt"
              viewBox="0 0 180.000000 180.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)" stroke="none">
                <path
                  d="M0 900 l0 -900 900 0 900 0 0 900 0 900 -900 0 -900 0 0 -900z m821
560 c81 -15 191 -73 249 -132 53 -54 103 -145 119 -215 l9 -43 -37 0 c-67 0
-170 -29 -240 -65 -134 -71 -233 -209 -247 -344 l-7 -63 -69 6 c-251 25 -404
159 -416 364 -2 43 1 103 7 135 36 170 173 309 347 351 70 17 210 20 285 6z
m492 -460 c226 -70 364 -302 283 -475 -59 -128 -211 -199 -426 -199 -160 0
-278 36 -360 110 -227 204 5 583 356 584 54 0 104 -7 147 -20z"
                />
                <path
                  d="M430 1296 c0 -3 27 -13 60 -22 l60 -17 0 -93 c0 -94 5 -109 34 -98
14 5 16 21 14 97 l-3 91 -56 17 c-82 24 -109 30 -109 25z"
                />
                <path
                  d="M860 1276 l-75 -21 -3 -86 c-2 -68 1 -89 13 -99 12 -10 18 -10 30 0
11 9 15 34 15 100 l0 88 63 20 c84 27 51 25 -43 -2z"
                />
                <path
                  d="M964 827 c-3 -8 -4 -41 -2 -73 2 -44 7 -59 18 -59 12 0 15 14 15 69
0 47 -4 71 -12 73 -7 3 -15 -2 -19 -10z"
                />
                <path
                  d="M1177 834 c-4 -4 -7 -35 -7 -70 0 -46 4 -63 15 -68 21 -8 27 11 23
79 -3 54 -14 75 -31 59z"
                />
              </g>
            </svg>
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
                  <p class="nickname oneline" v-text="user.nickname" />
                  <div class="field">
                    <div class="label">
                      <i class="iconfont ic-night" />
                      <span>夜间模式</span>
                    </div>
                    <div class="value">
                      <ElSwitch
                        v-model="night_mode"
                        active-color="#ff6881"
                        inactive-color="#c0c0c0"
                        @change="handleNightModeSwitch"
                      />
                    </div>
                  </div>
                  <NLink :to="$alias.user(user.slug, 'setting')">
                    <div class="field">
                      <div class="label">
                        <i class="iconfont ic-setup_fill" />
                        <span>设置</span>
                      </div>
                    </div>
                  </NLink>
                  <button class="sign-out" @click="handleLogout">
                    退出
                  </button>
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
import { Badge, Switch } from 'element-ui'
import { throttle } from 'throttle-debounce'
import { logout } from '~/api/userApi'

export default {
  components: {
    ElBadge: Badge,
    ElSwitch: Switch
  },
  props: {
    showUser: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      night_mode: false,
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
      window.addEventListener('mousemove', throttle(3000, () => {
        lastMoveAt = Date.now()
      }))
      setInterval(() => {
        if (
          document.visibilityState === 'visible' &&
          !this.$store.state.socket.isConnected &&
          Date.now() - lastMoveAt < 30000
        ) {
          this.$store.dispatch('refreshMailbox')
        }
      }, 10000)
    },
    handleNightModeSwitch() {
      this.$toast.success('开个玩笑，还没支持~')
    }
  }
}
</script>
