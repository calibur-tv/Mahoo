<style lang="scss">
#user-layout {
  background-color: #f6f6f6;
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
      padding: 0 20px;

      &-header {
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
    overflow: hidden;
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
        <div class="actions">
          <daily-sign-btn v-model="user" />
          <el-button type="primary" size="small">
            关注
          </el-button>
          <el-button type="info" size="small" @click="toMessage">
            发消息
          </el-button>
        </div>
      </div>
      <v-switcher
        :headers="headers"
        :routable="true"
        :item-height="66"
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
            <span class="value">0</span>
          </li>
          <li>
            <div class="label">
              粉丝数
            </div>
            <span class="value">0</span>
          </li>
        </ul>
      </v-switcher>
    </div>
    <div class="container">
      <el-row :gutter="10">
        <el-col :span="18">
          <section class="user-section">
            <nuxt-child />
          </section>
        </el-col>
        <el-col :span="6">
          <aside class="user-section">
            6
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

export default {
  name: 'UserLayout',
  layout: 'web',
  components: {
    UserAvatar,
    UserNickname,
    DailySignBtn
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  head() {
    const { user } = this
    return {
      title: user.nickname,
      meta: [
        { hid: 'description', name: 'description', content: `${user.nickname},${user.signature},${process.env.META_DESC}` }
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
          route: `/user/${this.slug}/`
        },
        {
          name: '喜好',
          icon: 'like_fill',
          color: '#fb7299',
          route: `/user/${this.slug}/emotion/`
        }
      ]
      if (this.isMine) {
        result = result.concat([
          {
            name: '消息',
            icon: 'message_fill',
            color: '#02b5da',
            route: `/user/${this.slug}/message/`
          },
          {
            name: '通知',
            icon: 'remind_fill',
            color: '#ff5d47',
            route: `/user/${this.slug}/notice/`
          },
          {
            name: '设置',
            icon: 'setup_fill',
            color: '#23c9ed',
            route: `/user/${this.slug}/setting/basic/`
          }
        ])
      }
      return result
    }
  },
  asyncData({ app, error, params }) {
    return getUserInfo(app, {
      slug: params.slug
    })
      .then(user => {
        return { user }
      })
      .catch(error)
  },
  methods: {
    toMessage() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        return
      }
      window.open(this.$alias.user(this.self.slug, `message/?mailto=${this.slug}`))
    }
  }
}
</script>
