<style lang="scss">
#app-layout {
  #main-tab {
    position: relative;
    height: 50px;
    width: 100%;

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

      a {
        flex-grow: 1;
        text-align: center;
        height: 100%;
        padding-top: 4px;
        color: rgb(140, 140, 140);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
          display: block;
          width: 30px;
          height: 30px;
          background-color: rgb(140, 140, 140);
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
  }
}
</style>

<template>
  <div id="app-layout">
    <nuxt />
    <div id="main-tab">
      <div class="tab-core">
        <NLink to="/app/found" replace>
          <i />
          <span>发现</span>
        </NLink>
        <NLink to="/app/category" replace>
          <i />
          <span>分类</span>
        </NLink>
        <NLink to="/app/write">
          <span>+</span>
        </NLink>
        <NLink to="/app/notice" replace>
          <i />
          <span>消息</span>
        </NLink>
        <NLink to="/app/home" replace>
          <i />
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
