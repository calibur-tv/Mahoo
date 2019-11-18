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
      transition: background-image 0.2s ease, background-size 1s ease;
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
            border: 2px solid hsla(0, 0%, 100%, 0.4);
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
        float: right;
        margin-top: 22px;

        button {
          margin-right: 20px;
          box-shadow: 0 0 0 2px #fff;
        }
      }
    }

    .v-switcher {
      &-header {
        &-wrap {
          background-color: #fff;
          box-shadow: 0 0 0 1px #eee;

          @include pc() {
            border-radius: 0 0 4px 4px;
            padding: 0 20px;
          }
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

        @include h5() {
          &-after {
            width: 100%;
          }
        }
      }
    }

    .user-meta {
      @include h5() {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;

        li {
          flex-grow: 1;
        }
      }

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
          color: #222;
          font-size: 12px;
        }
      }
    }
  }

  .user-section {
    background-color: #fff;
    margin-bottom: 10px;
    overflow: hidden;

    @include pc() {
      padding: 15px 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }

    @include h5() {
      padding: 10px;
    }

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
        transition: background-color 0.3s ease;
        height: 44px;
        line-height: 44px;

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

  .h5-no-margin {
    @include h5() {
      margin-left: 0 !important;
      margin-right: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>

<template>
  <div id="user-layout">
    <div id="user-panel" class="container">
      <div class="banner" :style="{ backgroundImage: `url(${$resize(banner, { height: 200, mode: 2 })})` }">
        <div class="user">
          <UserAvatar :user="user" :avatar="avatar" :size="68" />
          <div v-if="user" class="actions only-pc">
            <UserFollowBtn :slug="slug" @change="handleFollowAction" />
            <SendMailBtn :slug="slug" :nickname="nickname" />
          </div>
          <div class="content">
            <UserNickname :user="user" :nickname="nickname" :sex="sex" />
            <p class="signature oneline" v-text="signature" />
          </div>
        </div>
      </div>
      <VSwitcher :headers="headers" :routable="true" :header-height="66" anchor-trigger="hover" align="start">
        <NLink v-for="(item, index) in headers" :key="index" :slot="`tab-${index}`" :to="item.route" class="only-pc">
          <i class="iconfont" :class="`ic-${item.icon}`" :style="{ color: item.color }" />
          <span v-text="item.name" />
        </NLink>
        <ul slot="header-after" class="user-meta">
          <li>
            <div class="label">
              访问数
            </div>
            <span class="value" v-text="user.visit_count" />
          </li>
          <li>
            <div class="label">
              关注数
            </div>
            <span class="value" v-text="user.following_count" />
          </li>
          <li>
            <div class="label">
              粉丝数
            </div>
            <span class="value" v-text="user.followers_count" />
          </li>
          <li>
            <div class="label">
              活跃度
            </div>
            <span class="value" v-text="user.stat.activity" />
          </li>
          <li>
            <div class="label">
              曝光度
            </div>
            <span class="value" v-text="user.stat.exposure" />
          </li>
        </ul>
      </VSwitcher>
    </div>
    <div class="container">
      <template v-if="showBirthday">
        <br />
        <ElAlert title="祝这位不愿透露姓名的御坂妹妹生日快乐~！" type="success" />
        <br />
      </template>
      <ElRow class="h5-no-margin" :gutter="10">
        <ElCol class="h5-no-margin" :span="17" :xs="24">
          <section class="user-section">
            <NuxtChild :user="user" />
          </section>
        </ElCol>
        <ElCol v-if="user" :xs="0" :span="7">
          <aside class="user-section">
            <h3 class="title">
              签到
            </h3>
            <DailySignBtn v-model="user" />
            <template>
              <p>总签到次数：{{ user.sign.total_sign_count }}次</p>
              <p>连续签到数：{{ user.sign.continuous_sign_count }}次</p>
              <p>最后签到于：{{ user.sign.latest_signed_at ? $utils.timeAgo(user.sign.latest_signed_at) : '未签到' }}</p>
            </template>
          </aside>
          <aside v-if="isMine" class="user-section">
            <h3 class="title">
              钱包
            </h3>
            <template>
              <p>团子：{{ parseFloat(self.wallet_coin).toFixed(2) }}</p>
              <p>光玉：{{ parseFloat(self.wallet_money).toFixed(2) }}</p>
            </template>
          </aside>
        </ElCol>
      </ElRow>
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
import { Alert } from 'element-ui'

export default {
  name: 'UserLayout',
  layout: 'web',
  components: {
    ElAlert: Alert,
    UserAvatar,
    UserNickname,
    DailySignBtn,
    UserFollowBtn,
    SendMailBtn
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  asyncData({ app, error, params }) {
    return getUserInfo(app, params)
      .then(user => {
        return { user }
      })
      .catch(error)
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    showBirthday() {
      const ts = Date.now()
      return ts >= 1571155200000 && ts <= 1571241599000 && this.slug === 'cc-a18jd'
    },
    isMine() {
      return this.$store.getters.isMine(this.slug)
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
      return this.isMine ? (this.self.sex_secret ? -1 : this.self.sex) : this.user.sex
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
            name: '草稿',
            icon: 'document_fill',
            color: '#f3a034',
            route: `/user/${this.slug}/draft`
          },
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
  beforeMount() {
    this.patchUser()
  },
  methods: {
    patchUser() {
      this.$axios
        .$get('v1/user/patch', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.user = this.$set(this, 'user', Object.assign(this.user, data))
          this.$store.commit('social/set', {
            type: 'user-follow',
            slug: this.slug,
            data: {
              is_following: data.is_following,
              is_followed_by: data.is_followed_by
            }
          })
        })
        .catch(() => {})
    },
    handleFollowAction(result) {
      this.user.followers_count -= -result
    }
  },
  head() {
    const { user } = this
    return {
      title: `${user.nickname}的个人空间`,
      meta: [
        { hid: 'keywords', name: 'keywords', content: user.nickname },
        { hid: 'description', name: 'description', content: `${user.nickname},${user.signature}` },
        { hid: 'share-image', name: 'share-image', content: user.avatar }
      ]
    }
  }
}
</script>
