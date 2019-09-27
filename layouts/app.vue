<style lang="scss">
#app-layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .main-view {
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
  }

  #main-tab {
    .tab-core {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
      background-color: #fff;
      z-index: 10;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      backdrop-filter: saturate(180%) blur(20px);

      /*
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        background-color: #e7e7e7;
      }
      */

      a {
        flex-grow: 1;
        text-align: center;
        height: 100%;
        color: rgb(140, 140, 140);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
          display: block;
          width: 25px;
          height: 25px;
          font-size: 23px;
          margin-bottom: 3px;
        }

        span {
          font-size: 10px;
          line-height: 15px;
        }

        &.nuxt-link-active {
          color: $color-main;
        }
      }
    }

    .nuxt-link-active i {
      animation: scale 250ms 1;
    }

    .link-0 {
      i:before {
        content: '\e905';
      }

      &.nuxt-link-active {
        i:before {
          content: '\e906';
        }
      }
    }

    .link-1 {
      i:before {
        content: '\e70e';
      }

      &.nuxt-link-active {
        i:before {
          content: '\e70b';
        }
      }
    }

    .link-2 {
      i:before {
        content: '\e720';
      }

      &.nuxt-link-active {
        i:before {
          content: '\e71f';
        }
      }
    }

    .link-3 {
      i:before {
        content: '\e703';
      }

      &.nuxt-link-active {
        i:before {
          content: '\e702';
        }
      }
    }

    @include keyframes(scale) {
      50% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}
</style>

<template>
  <div id="app-layout">
    <nuxt class="main-view" />
    <div id="main-tab">
      <div class="tab-core">
        <NLink class="link-0" to="/app/found" replace>
          <i class="iconfont" />
          <span>发现</span>
        </NLink>
        <NLink class="link-1" to="/app/category" replace>
          <i class="iconfont" />
          <span>分类</span>
        </NLink>
        <NLink to="/app/write">
          <span>+</span>
        </NLink>
        <NLink class="link-2" to="/app/notice" replace>
          <i class="iconfont" />
          <span>消息</span>
        </NLink>
        <NLink class="link-3" to="/app/home" replace>
          <i class="iconfont" />
          <span>我的</span>
        </NLink>
      </div>
    </div>
  </div>
</template>

<script>
import useSignMixin from '~/mixins/useSign'
import socketMixin from '~/mixins/socket'

export default {
  name: 'AppLayout',
  mixins: [useSignMixin, socketMixin],
  beforeMount() {
    this.$channel.$when('user-not-sign', () => {
      this.$router.replace(`/app/sign?redirect=${encodeURIComponent('/app/found')}`)
    })
  }
}
</script>
