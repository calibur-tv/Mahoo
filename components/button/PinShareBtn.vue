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

    .ic-accessory {
      color: #9266f9;
    }

    .ic-weibo {
      color: rgb(251, 102, 34);
    }

    .ic-qzone {
      color: $color-yellow;
    }

    .ic-qq {
      color: $color-blue;
    }

    .ic-tieba {
      color: #38f;
    }

    .ic-wechat {
      color: $color-green;
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
  <ElPopover placement="bottom" width="134" trigger="click" popper-class="sss-popover">
    <button v-copy="shareUrl" v-copy:callback="handleCopySuccess">
      <i class="iconfont ic-accessory" />
      <span>复制链接</span>
    </button>
    <button v-share.weibo="opt">
      <i class="iconfont ic-weibo" />
      <span>微博</span>
    </button>
    <button v-share.qq="opt">
      <i class="iconfont ic-qq" />
      <span>QQ</span>
    </button>
    <button v-share.tieba="opt">
      <i class="iconfont ic-tieba" />
      <span>百度贴吧</span>
    </button>
    <button v-share.qzone="opt">
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
import { copy } from 'v-copy'

export default {
  name: 'PinShareBtn',
  directives: {
    copy
  },
  components: {
    ElPopover: Popover
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    shareUrl() {
      if (typeof window === 'undefined') {
        return ''
      }
      return this.options && this.options.url ? `${window.location.origin}${this.options.url}${this.query}` : `${window.location.origin}${this.$route.path}${this.query}`
    },
    query() {
      return ''
    },
    opt() {
      if (this.option && this.option.url) {
        return this.option
      }
      if (typeof window === 'undefined') {
        return {}
      }
      const title = document.title
      const content = document.querySelector('[name=description]').content
      const allNoteImages = []
      ;[].forEach.call(document.querySelectorAll('.is-full'), imagePackage => {
        const image = imagePackage.querySelector('img')
        if (image) {
          let imageSrc = image.getAttribute('origin-src')
          if (imageSrc.match(/^\/\//)) {
            imageSrc = `http:${imageSrc}`
          }
          allNoteImages.push(imageSrc)
        }
      })
      return {
        url: window.location.href,
        title,
        desc: content,
        summary: content,
        shortTitle: title,
        pic: allNoteImages,
        weiboTag: '#calibur#'
      }
    }
  },
  methods: {
    handleCopySuccess() {
      this.$toast.success('复制成功')
    }
  }
}
</script>
