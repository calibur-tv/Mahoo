<style lang="scss">
#user-layout {
  background-color: $color-gray-bg;
  min-height: 100vh;

  #user-panel {
    background-color: #fff;
    box-shadow: 0 0 0 1px #eee;
    border-radius: 0 0 4px 4px;
    margin-bottom: 10px;

    .banner {
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAEElEQVR4AWP48vU7MqKUDwA7qkfh9iF73wAAAABJRU5ErkJggg==);
      transition: background-image .2s ease,background-size 1s ease;
      height: 110px;
      padding-top: 24px;
      @media (min-width: 768px) {
        height: 200px;
        padding-top: 116px;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 84px;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAABdCAMAAADNEjtLAAABEVBMVEUDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAACnjvHuAAAAW3RSTlMBAgMEBQYHCAkKCwwNDxAREhQVFhgZGxweHyEiJCUnKSosLS8xMjQ2ODk7PT5AQkNFR0hKTE5PUVNUVldZW1xeX2FiZGVnaGprbG5vcHFzdHV2d3h5ent8fX5/XoZ4lgAAAPVJREFUeAHt1AERADAQAiDdrX/mDyKEIAAAjGkDsOk3AAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECAgQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQECCBBAgAACBBAggAABBAggQAABAggQQIAAAgQQIIAAAQQIIEAAAQIIEECAAAIEECCAAAEECCBAAAECCBBAgAACBAQIIEAAAQIseAEYdZ9sAcJDX4ICAAAAAElFTkSuQmCC);
        background-repeat: repeat-x;
        z-index: 0;
      }

      .user {
        position: relative;
        z-index: 1;

        .user-avatar {
          float: left;
          margin-left: 20px;
          margin-right: 20px;

          .avatar {
            border: 2px solid hsla(0,0%,100%,.4);
          }
        }

        .content {
          padding-top: 10px;
          overflow: hidden;

          .nickname {
            font-weight: 700;
            line-height: 18px;
            font-size: 18px;
            color: #fff;
          }

          .signature {
            margin-top: 8px;
            color: #d6dee4;
            font-size: 12px;
            line-height: 26px;
            height: 26px;
          }
        }
      }

      .actions {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;

        button {
          margin: 0 20px 17px 0;
          box-shadow: 0 0 0 2px #fff;
        }
      }
    }

    .v-switcher {
      &-header {
        &-wrap {
          background-color: #fff;
          padding: 0 20px;
          box-shadow: 0 0 0 1px #eee;
          border-radius: 0 0 4px 4px;
        }

        &-anchor {
          height: 3px;
          bottom: 0;
          background-color: $color-main;
        }

        &-item {
          margin-right: 31px;

          .iconfont {
            font-size: 20px;
          }

          a {
            display: block;
            line-height: 66px;
            height: 66px;

            span {
              font-size: 13px;
            }
          }
        }
      }
    }

    .user-meta {
      li {
        display: inline-block;
        width: 58px;
        text-align: center;

        .label {
          line-height: 14px;
          font-size: 12px;
          color: #99a2aa;
        }

        .value {
          line-height: 16px;
          margin-top: 5px;
          color: #222;
          font-size: 12px;
        }
      }
    }
  }

  .user-section {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 15px 20px;
    margin-bottom: 10px;
    overflow: hidden;

    .title {
      color: #000;
      border-bottom: 1px solid #e5e9ef;
      font-size: 14px;
      font-weight: 700;
      padding: 0;
      margin: -15px 0 10px;
      height: 45px;
      line-height: 45px;
    }
  }

  .v-switcher-vertical {
    .v-switcher {
      &-header-wrap {
        width: 100%;
      }

      &-header-item {
        text-align: left;
        padding-left: 30px;
        transition: background-color .3s ease;

        a {
          display: block;
          height: 100%;
          font-size: 14px;
        }

        &.is-active {
          background-color: $color-main !important;
          color: #fff !important;
        }

        &:hover {
          color: $color-main;
          background-color: #f4f5f7;
        }
      }
    }
  }

  .column-wrap {
    .el-col:first-child {
      margin-left: -20px;
      margin-top: -5px;
    }

    .el-col:last-child {
      position: relative;
      box-sizing: content-box;
      padding-left: 20px;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 1px;
        top: -15px;
        bottom: -999px;
        background-color: #eee;
      }
    }
  }
}
</style>

<template>
  <div id="user-layout">
    <div id="user-panel" class="container">
      <div class="banner" :style="{ backgroundImage: `url(${$resize(banner, { height: 200, mode: 2 })})`}">
        <div class="user">
          <user-avatar :user="user" :avatar="avatar" :size="68" />
          <div class="content">
            <user-nickname :user="user" :nickname="nickname" :sex="sex" />
            <p class="signature oneline" v-text="signature" />
          </div>
        </div>
        <div
          v-if="user"
          class="actions"
        >
          <user-follow-btn v-model="user.social.relation" :slug="slug" @change="handleFollowAction" />
          <send-mail-btn :slug="slug" />
        </div>
      </div>
      <v-switcher
        :headers="headers"
        :routable="true"
        :header-height="66"
        :fixed-top="50"
        anchor-trigger="hover"
        align="start"
      >
        <nuxt-link
          v-for="(item, index) in headers"
          :key="index"
          :slot="`tab-${index}`"
          :to="item.route"
        >
          <i class="iconfont" :class="`ic-${item.icon}`" :style="{ color: item.color }" />
          <span v-text="item.name" />
        </nuxt-link>
        <ul slot="header-after" class="user-meta">
          <li>
            <div class="label">
              关注数
            </div>
            <span class="value" v-text="user.social.following_count" />
          </li>
          <li>
            <div class="label">
              粉丝数
            </div>
            <span class="value" v-text="user.social.followers_count" />
          </li>
        </ul>
      </v-switcher>
    </div>
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="17">
          <section class="user-section">
            <nuxt-child :user="user" />
          </section>
        </el-col>
        <el-col v-if="user" :span="7">
          <aside class="user-section">
            <h3 class="title">
              钱包
            </h3>
            <template>
              <p>团子：{{ parseFloat(user.balance.coin).toFixed(2) }}</p>
              <p>光玉：{{ parseFloat(user.balance.money).toFixed(2) }}</p>
            </template>
          </aside>
          <aside class="user-section">
            <h3 class="title">
              签到
            </h3>
            <daily-sign-btn v-model="user" />
            <template>
              <p>总签到次数：{{ user.sign.total_sign_count }}次</p>
              <p>连续签到数：{{ user.sign.continuous_sign_count }}次</p>
              <p>最后签到于：{{ user.sign.latest_signed_at ? $utils.timeAgo(user.sign.latest_signed_at) : '未签到' }}</p>
            </template>
          </aside>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '~/api/userApi'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import DailySignBtn from '~/components/button/DailySignBtn'
import UserFollowBtn from '~/components/button/UserFollowBtn'
import SendMailBtn from '~/components/button/SendMailBtn'
import onUserSign from '~/mixins/onUserSign'

export default {
  name: 'UserLayout',
  layout: 'web',
  components: {
    UserAvatar,
    UserNickname,
    DailySignBtn,
    UserFollowBtn,
    SendMailBtn
  },
  mixins: [onUserSign],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  head() {
    const { user } = this
    return {
      title: `${user.nickname}的个人空间`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: user.nickname },
        { hid: 'description', name: 'description', content: `${user.nickname},${user.signature}` }
      ]
    }
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    isMine() {
      if (!this.isAuth) {
        return false
      }
      return this.self.slug === this.slug
    },
    self() {
      return this.$store.state.user
    },
    avatar() {
      return this.isMine ? this.self.avatar : this.user.avatar
    },
    banner() {
      return this.isMine ? this.self.banner : this.user.banner
    },
    nickname() {
      return this.isMine ? this.self.nickname : this.user.nickname
    },
    signature() {
      return this.isMine ? this.self.signature : this.user.signature
    },
    sex() {
      return this.isMine ? (
        this.self.sex_secret ? -1 : this.self.sex
      ) : this.user.sex
    },
    headers() {
      let result = [
        {
          name: '动态',
          icon: 'homepage_fill',
          color: '#00c091',
          route: `/user/${this.slug}/timeline`
        },
        {
          name: '爱好',
          icon: 'like_fill',
          color: '#fb7299',
          route: `/user/${this.slug}/emotion`
        },
        {
          name: '圈子',
          icon: 'group_fill',
          color: '#02b5da',
          route: `/user/${this.slug}/social`
        }
      ]
      if (this.isMine) {
        result = result.concat([
          {
            name: '消息',
            icon: 'remind_fill',
            color: '#ff5d47',
            route: `/user/${this.slug}/message`
          },
          {
            name: '设置',
            icon: 'setup_fill',
            color: '#23c9ed',
            route: `/user/${this.slug}/setting`
          }
        ])
      }
      return result
    }
  },
  asyncData({ app, error, params }) {
    return getUserInfo(app, params)
      .then(user => {
        return { user }
      })
      .catch(error)
  },
  mounted() {
    this.patchUser()
    this.onUserSign(this.connectSocket)
  },
  beforeDestroy() {
    if (this.isMine && this.$store.state.socket.isConnected) {
      this.$channel.socketDisconnect()
    }
  },
  methods: {
    patchUser() {
      this.$axios.$get('v1/user/patch', {
        params: {
          slug: this.slug
        }
      })
        .then(data => {
          this.user.social = data
        })
        .catch(() => {})
    },
    handleFollowAction({ change }) {
      this.user.social.followers_count += change
    },
    connectSocket() {
      if (this.isMine && !this.$store.state.socket.isConnected) {
        this.$channel.socketConnect()
      }
    }
  }
}
</script>
