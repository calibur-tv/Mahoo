<style lang="scss">
#app-notice {
  .v-switcher {
    &-header {
      &-tabs {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: #f2f6fc;
          transform: scaleY(0.5);
        }
      }

      &-item {
        font-size: 14px;
        padding: 0 5px;
        color: $color-text-2;

        &.is-active {
          color: $color-black;
          animation: pop-up 250ms 1;
        }
      }

      &-anchor {
        height: 2px;
        bottom: 0;
        background-color: $color-black;
      }

      @include keyframes(pop-up) {
        50% {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>

<template>
  <div id="app-notice">
    <VSwitcher :headers="['消息', '聊天', '通知']" align="center" sticky disabled-swipe swipe :fixed-top="0" :anchor-padding="5">
      <VScroller slot="0" :throttle="-1">
        <p>start</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>消息</p>
        <p>end</p>
      </VScroller>
      <VScroller slot="1" :throttle="-1">
        <p>start</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>聊天</p>
        <p>end</p>
      </VScroller>
      <VScroller slot="2" :throttle="-1">
        <p>start</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>通知</p>
        <p>end</p>
      </VScroller>
    </VSwitcher>
  </div>
</template>

<script>
export default {
  name: 'AppNotice',
  layout: 'app',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
