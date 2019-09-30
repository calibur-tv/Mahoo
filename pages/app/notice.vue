<style lang="scss">
#app-notice {
  .msg-panel {
    div {
      position: relative;
      width: 25%;
      height: 90px;
      padding-top: 15px;
      padding-bottom: 10px;
      text-align: center;
      float: left;

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

      span {
        display: block;
        font-size: 13px;
        color: $color-text-2;
      }

      i {
        font-size: 26px;
      }
    }

    .ic-message_fill {
      color: $color-green;
    }

    .ic-eit {
      color: #fff;
      background-color: $color-yellow;
      border-radius: 50%;
    }

    .ic-good_fill {
      color: $color-red;
    }

    .ic-notice_fill {
      color: $color-blue;
    }
  }
}
</style>

<template>
  <div id="app-notice">
    <div class="msg-panel clearfix">
      <div>
        <i class="iconfont ic-message_fill" />
        <span>回复我的</span>
      </div>
      <div>
        <i class="iconfont ic-eit" />
        <span>@我</span>
      </div>
      <div>
        <i class="iconfont ic-good_fill" />
        <span>收到的赞</span>
      </div>
      <div>
        <i class="iconfont ic-notice_fill" />
        <span>系统通知</span>
      </div>
    </div>
    <MessageMenu v-if="slug" :slug="slug" />
  </div>
</template>

<script>
import MessageMenu from '~/components/chat/Menu'

export default {
  name: 'AppNotice',
  layout: 'app',
  components: {
    MessageMenu
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    slug() {
      return this.$store.state.user.slug
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
