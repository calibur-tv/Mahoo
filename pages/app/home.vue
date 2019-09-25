<style lang="scss">
#app-home {
  .panel {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 150px;
    padding: 15px 15px 0;
    background-color: #fff;

    header {
      margin-bottom: 18px;
      @extend %clearfix;

      .avatar {
        width: 65px;
        height: 65px;
        display: block;
        float: left;
        border-radius: 50%;
        margin-right: 14px;
        border: 1px solid #e7ecf2;
      }

      .content {
        overflow: hidden;

        .nickname-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          line-height: 37px;
          margin-top: 5px;

          .nickname {
            overflow: hidden;
            margin-right: 6px;
            color: #14171a;
            font-size: 23px;
            font-weight: 500;
          }

          .badge {
            flex-shrink: 0;
          }

          .level {
            height: 32px;
            padding: 0 18px;
            color: #fff;
            background-color: #ffc83f;
            border-radius: 16px;
            @include half-font(11px);
            line-height: 32px;
            margin-right: -30px;
          }
        }

        .intro {
          color: #657786;
          font-size: 13px;
          line-height: 18px;
        }
      }

      .link {
        float: right;
        width: 20px;
        height: 20px;
        margin-top: 23px;
      }
    }

    main {
      @extend %clearfix;

      button {
        float: right;
        margin-left: 10px;
      }

      .meta {
        overflow: hidden;

        .item {
          width: 30%;
          float: left;

          &:not(:last-child) {
            margin-right: 5%;
          }

          p {
            color: #14171a;
            font-size: 18px;
            line-height: 20px;
            font-weight: 500;
          }

          span {
            font-size: 13px;
            color: #657786;
          }
        }
      }
    }
  }

  .shim {
    height: 150px;
    width: 100%;
    background-color: #fff;
  }

  .hr {
    height: 10px;
    background-color: #e7ecf2;
  }

  .main-menu {
    padding-bottom: 30px;

    .item {
      height: 45px;
      margin-top: 8px;
      margin-bottom: 2px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 10px;
      padding-top: 10px;

      .icon {
        width: 25px;
        height: 25px;
        margin-right: 8px;
        float: left;
      }

      .text {
        color: #14171a;
        font-size: 16px;
        overflow: hidden;
        line-height: 25px;
      }

      .tail {
        height: 25px;
        float: right;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 5px;

        img {
          width: 20px;
          height: 20px;
        }

        span {
          color: #657786;
          font-size: 12px;
          margin-right: 5px;
        }
      }

      &:active {
        background-color: #f6f6f6;
      }
    }
  }

  .logout-btn {
    padding: 10px 15px;

    button {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: $color-red;
      color: #fff;
      border-radius: 4px;
    }
  }
}
</style>

<template>
  <div id="app-home">
    <div class="panel">
      <header>
        <img :src="$resize(self.avatar, { width: 130 })" class="avatar" />
        <img src="~/assets/img/app/home/link.png" class="link" />
        <div class="content">
          <div class="nickname-wrap">
            <div class="nickname"><p class="oneline" v-text="self.nickname" /></div>
            <div class="badge level">LV{{ self.level }}</div>
          </div>
          <p class="intro">邀请码 {{ self.slug }}</p>
        </div>
      </header>
      <main>
        <!--        <DaySignBtn :signed="daySign" @signed="handleSigned" />-->
        <div class="meta">
          <div class="item">
            <p class="oneline" v-text="$utils.shortenNumber(self.stat_activity + self.stat_exposure)" />
            <span>战斗力</span>
          </div>
          <div class="item">
            <p class="oneline" v-text="$utils.shortenNumber(self.wallet_coin)" />
            <span>团子</span>
          </div>
          <div class="item">
            <p class="oneline" v-text="$utils.shortenNumber(self.wallet_money)" />
            <span>光玉</span>
          </div>
        </div>
      </main>
    </div>
    <div class="shim" />
    <div class="hr" />
    <div class="main-menu">
      <div class="item">
        <img src="~/assets/img/app/home/post.png" class="icon" />
        <div class="tail"><img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">我的主页</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/transaction.png" class="icon" />
        <div class="tail"><img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">交易记录</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/bookmark.png" class="icon" />
        <div class="tail"><img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">我的收藏</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/invite.png" class="icon" />
        <div class="tail"><span>邀请送团子</span> <img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">我的邀请码</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/help.png" class="icon" />
        <div class="tail"><span>玩转C站</span> <img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">帮助</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/feedback.png" class="icon" />
        <div class="tail"><img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">意见反馈</p>
      </div>
      <div class="item">
        <img src="~/assets/img/app/home/setting.png" class="icon" />
        <div class="tail"><img src="~/assets/img/app/home/link.png" /></div>
        <p class="text oneline">设置</p>
      </div>
      <div class="logout-btn">
        <button @click="handleLogout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { logout } from '~/api/userApi'

export default {
  name: 'AppHome',
  layout: 'app',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    self() {
      return this.$store.state.user
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleLogout() {
      logout(this)
      this.$cookie.remove('JWT-TOKEN')
      this.$channel.socketDisconnect()
      window.location = '/app/found'
    }
  }
}
</script>
