<style lang="scss">
#page-header {
  $search-height: 32px;

  .header-text {
    right: 0;
    left: 0;
    top: 0;
    height: $page-header-hgt;
    z-index: 11;
    background-color: #fff;

    .nav {
      height: $page-header-hgt;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 992px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
      }

      @include h5() {
        padding-right: 0;
      }

      .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .logo {
          line-height: $page-header-hgt;
          margin-right: 10px;
          border-radius: 50%;
          overflow: hidden;

          i {
            display: block;
            width: 32px;
            height: 32px;
            font-size: 32px;
            line-height: 32px;
            color: $color-main;
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

              @include h5() {
                padding: 0 10px;
                font-size: 14px;
              }
            }

            @include pc() {
              &:hover {
                color: $color-main;

                span {
                  background-color: #f3f3f3;
                }
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
            background-color: #f3f3f3;
          }

          i {
            font-size: 25px;
          }
        }

        .user-panel {
          position: relative;
          height: $page-header-hgt;
          @include pc() {
            margin-right: 8px;
          }

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
            transition: 0.3s;
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
            box-shadow: 0 8px 20px 0 rgba(158, 179, 193, 0.3);
            border-radius: 0 0 10px 10px;
            transition: 0.3s;

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

    &.header-fixed {
      position: fixed;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    &.header-static {
      position: absolute;
      box-shadow: rgba(0, 0, 0, 0.03) 0 5px 10px 0, rgba(0, 0, 0, 0.08) 0 10px 30px 0;
    }

    .search-container {
      position: relative;
      height: 100%;
      float: left;
      $transition: 0.2s;

      .search-input-wrap {
        height: $search-height;
        border-radius: $search-height / 2;
        margin-right: 20px;
        transition: $transition;
        width: 167px;
        float: left;
        background-color: #f1f2f4;

        .search-input {
          background-color: transparent;
          padding: 4px 10px 4px 15px;
          border-radius: 16px 0 0 16px;
          border: 1px solid transparent;
          line-height: 24px;
          border-right: 0;
          font-size: 12px;
          color: $color-text-3;
          @include input-placeholder($color-text-3);
        }

        .search-input-btn {
          width: 32px;
          height: 32px;
          border-radius: 0 16px 16px 0;
          background-color: transparent;
          font-size: 18px;
          border: 1px solid transparent;
          border-left: 0;
          line-height: 29px;
          transition: $transition;
          color: $color-text-3;
        }

        &.search-focus {
          width: 267px;
          background-color: #f1f2f4;

          .search-input-btn {
            &:hover {
              color: $color-main;
            }
          }
        }

        &:hover {
          background-color: $color-gray-bg;
        }
      }

      .h5-search-entry {
        display: block;
        height: $search-height;
        width: $search-height;
        line-height: $search-height;
        text-align: center;

        i {
          font-size: 20px;
          color: $color-icon-1;
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
    <div class="header-text" :class="`header-${headerType}`">
      <div class="container nav">
        <nav class="left">
          <NLink class="logo" to="/">
            <i class="iconfont ic-calibur" />
          </NLink>
          <VSwitcher :headers="headers" :routable="true" :anchor-padding="15" :header-height="50" align="start">
            <NLink v-for="(item, index) in headers" :key="index" :slot="`tab-${index}`" :to="item.route">
              <span v-text="item.name" />
            </NLink>
          </VSwitcher>
        </nav>
        <div class="right">
          <div class="search-container">
            <VSearch class="only-pc" :show-suggestion="false" />
            <NLink to="/search" class="h5-search-entry only-h5">
              <i class="iconfont ic-search" />
            </NLink>
          </div>
          <template v-if="showUser">
            <template v-if="isAuth">
              <div class="user-panel icon-link">
                <NLink :to="$alias.user(user.slug)" class="avatar">
                  <VImg :src="user.avatar" def="default-avatar" width="33" height="33" radius="50%" :alt="user.nickname" />
                </NLink>
                <div class="user-popover">
                  <p class="nickname oneline" v-html="user.nickname" />
                  <div class="field">
                    <div class="label">
                      <i class="iconfont ic-night" />
                      <span>夜间模式</span>
                    </div>
                    <div class="value">
                      <ElSwitch v-model="night_mode" active-color="#ff6881" inactive-color="#c0c0c0" @change="handleNightModeSwitch" />
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
              <NLink class="icon-link only-pc" :to="$alias.user(user.slug, 'message')">
                <ElBadge :value="mailbox.unread_notice_total + mailbox.unread_message_total" :hidden="!mailbox.unread_message_total && !mailbox.unread_notice_total">
                  <i class="iconfont ic-remind" />
                </ElBadge>
              </NLink>
            </template>
            <template v-else>
              <ElButton class="only-pc" type="text" @click="handleSignIn">
                登录
              </ElButton>
              <NLink :to="$alias.sign()">
                <ElButton class="only-h5" type="text">
                  登录&nbsp;&nbsp;
                </ElButton>
              </NLink>
            </template>
          </template>
          <div class="creator-wrap only-pc">
            <NLink target="_blank" :to="$alias.create()">
              <ElButton size="small" type="primary" icon="el-icon-s-promotion">
                投稿
              </ElButton>
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
import VSearch from '~/components/search/Input'

export default {
  components: {
    ElBadge: Badge,
    ElSwitch: Switch,
    VSearch
  },
  props: {
    showUser: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      night_mode: false
    }
  },
  computed: {
    headers() {
      return [
        {
          route: '/zone/bangumi',
          name: '动漫'
        },
        {
          route: '/about/managers',
          name: '学园'
        }
      ]
    },
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    },
    mailbox() {
      return this.$store.state.mailbox
    },
    headerType() {
      const { name } = this.$route
      if (name === 'homepage') {
        return 'fixed' // static
      }
      return 'fixed'
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
      window.addEventListener(
        'mousemove',
        throttle(3000, () => {
          lastMoveAt = Date.now()
        })
      )
      setInterval(() => {
        if (document.visibilityState === 'visible' && !this.$store.state.socket.isConnected && Date.now() - lastMoveAt < 30000) {
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
