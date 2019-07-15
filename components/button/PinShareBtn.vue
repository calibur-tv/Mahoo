<style lang="scss">
.sss-popover {
  padding: 6px 0;

  button {
    display: block;
    width: 100%;
    text-align: left;
    font-size: 14px;
    height: 40px;
    padding: 0 20px;
    color: #8590a6;

    &:hover {
      background-color: #f6f6f6;
    }

    i {
      margin-right: 6px;
      margin-left: -2px;
      font-size: 20px;
    }
  }
}

.sss-btn {
  color: $color-icon-1;

  &:hover {
    color: $color-main;
  }

  i {
    font-size: 24px;
  }

  span {
    font-size: 14px;
  }
}
</style>

<template>
  <ElPopover
    placement="bottom"
    width="134"
    trigger="click"
    popper-class="sss-popover"
  >
    <button
      v-clipboard="shareUrl"
      @click="handleCopySuccess"
    >
      <i class="iconfont ic-accessory" />
      <span>复制链接</span>
    </button>
    <button>
      <i class="iconfont ic-weibo" />
      <span>微博</span>
    </button>
    <button>
      <i class="iconfont ic-qq" />
      <span>QQ</span>
    </button>
    <button>
      <i class="iconfont ic-tieba" />
      <span>百度贴吧</span>
    </button>
    <button>
      <i class="iconfont ic-qzone" />
      <span>QQ空间</span>
    </button>
    <button slot="reference" class="sss-btn">
      <i class="iconfont ic-share_fill" />
      <span>分享</span>
    </button>
  </ElPopover>
</template>

<script>
import { Popover } from 'element-ui'

export default {
  name: 'PinShareBtn',
  components: {
    ElPopover: Popover
  },
  props: {
    pin: {
      type: Object,
      required: true
    },
    url: {
      type: String,
      default: ''
    }
  },
  computed: {
    shareUrl() {
      if (typeof window === 'undefined') {
        return ''
      }
      return this.url
        ? `${window.location.origin}${this.url}${this.query}`
        : `${window.location.origin}${this.$route.path}${this.query}`
    },
    query() {
      return ''
    }
  },
  methods: {
    handleCopySuccess() {
      this.$toast.success('复制成功')
    }
  }
}
</script>
