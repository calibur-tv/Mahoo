<style lang="scss">
#user-layout {
  background-color: #f6f6f6;

  .container {
    background-color: #fff;
  }

  #user-panel {
    margin-bottom: 20px;

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
  }
}
</style>

<template>
  <div id="user-layout">
    <div id="user-panel" class="container">
      <div class="banner" :style="{ backgroundImage: `url(${$resize(banner, { height: 200, mode: 2 })})`}">
        <div class="user">
          <user-avatar :user="user" :size="68" />
          <div class="content">
            <user-nickname :user="user" />
            <p class="signature oneline" v-text="user.signature" />
          </div>
        </div>
      </div>
      <v-switcher
        :headers="headers"
        :routable="true"
        align="start"
      >
        <nuxt-link
          v-for="(item, index) in headers"
          :key="index"
          :slot="`tab-${index}`"
          :to="item.route"
        >
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
    headers() {
      const result = [
        {
          name: '动态',
          route: `/user/${this.slug}/`
        }
      ]
      if (this.isMine) {
        result.push({
          name: '设置',
          route: `/user/${this.slug}/setting`
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
