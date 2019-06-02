<style lang="scss">
#user-layout {
  background-color: #f6f6f6;

  .container {
    background-color: #fff;
  }

  #user-panel {
    margin-bottom: 20px;
    box-shadow: 0 0 0 1px #eee;
    border-radius: 0 0 4px 4px;

    .banner {
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAEElEQVR4AWP48vU7MqKUDwA7qkfh9iF73wAAAABJRU5ErkJggg==);
      transition: background-image .2s ease,background-size 1s ease;
      height: 200px;
      padding-top: 116px;

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
            margin-right: 5px;
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
            <user-nickname :user="user" :nickname="nickname" :sex="true" />
            <p class="signature oneline" v-text="signature" />
          </div>
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
      </v-switcher>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { getUserInfo } from '~/api/userApi'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  layout: 'web',
  components: {
    UserAvatar,
    UserNickname
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    isMine() {
      if (!this.$store.state.isAuth) {
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
    headers() {
      const result = [
        {
          name: '动态',
          icon: 'homepage_fill',
          color: '#00c091',
          route: `/user/${this.slug}/`
        }
      ]
      if (this.isMine) {
        result.push({
          name: '设置',
          icon: 'setup_fill',
          color: '#23c9ed',
          route: `/user/${this.slug}/setting/`
        })
      }
      return result
    }
  },
  watch: {},
  asyncData({ app, error, params }) {
    return getUserInfo(app, {
      slug: params.slug
    })
      .then(user => {
        return { user }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
