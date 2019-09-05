<style lang="scss">
.pin-poster {
  position: relative;
  width: 160px;
  height: 148px;
  font-size: 12px;
  overflow: hidden;

  &:hover {
    .text {
      .mask {
        bottom: -20px;
      }
    }
  }

  .poster {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    background-color: #f1f3f4;
    width: 160px;
    height: 100px;

    .mask {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      padding-top: 10px;

      > div {
        height: 12px;
        line-height: 12px;
        margin-right: 20px;
        color: #fff;
      }

      .author {
        position: absolute;
        left: 56px;
        bottom: 2px;
        right: 10px;
        color: #fff;
        text-align: left;
      }
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }

    .default-poster {
      filter: grayscale(100%);
      opacity: 0.3;
    }
  }

  .user {
    display: block;
    position: absolute;
    top: 77px;
    left: 5px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    z-index: 1;
  }

  .text {
    position: relative;
    padding-top: 8px;

    .title {
      color: #222;
      height: 40px;
      display: block;
      text-indent: 55px;
      @include multi-line(20px);
    }

    .mask {
      position: absolute;
      height: 20px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      transition: bottom 0.3s;

      > div {
        float: left;
        width: 50%;
        height: 20px;
        line-height: 20px;
        color: #99a2aa;
      }
    }
  }
}
</style>

<template>
  <li class="pin-poster">
    <NLink class="poster" target="_blank" :to="$alias.pin(item.slug)">
      <VImg v-if="item.media && item.media.banner" :src="item.media.banner.url" width="160" height="100" />
      <VImg v-else class="default-poster" src="default-poster" width="160" height="100" />
      <div class="mask">
        <div>
          <i class="iconfont ic-good_fill" />
          <span v-text="item.like_count" />
        </div>
        <div>
          <i class="iconfont ic-mark_fill" />
          <span v-text="item.mark_count" />
        </div>
        <div>
          <i class="iconfont ic-reward_fill" />
          <span v-text="item.reward_count" />
        </div>
        <p class="author oneline" v-html="item.author.nickname" />
      </div>
    </NLink>
    <NLink class="user" :to="$alias.user(item.author.slug)" target="_blank">
      <VImg :src="item.author.avatar" width="45" height="45" />
    </NLink>
    <div class="text">
      <NLink class="title fade-link" target="_blank" :to="$alias.pin(item.slug)" v-html="item.title.text" />
      <div class="mask">
        <div>
          <i class="iconfont ic-browse_fill" />
          <span v-text="item.visit_count" />
        </div>
        <div>
          <i class="iconfont ic-message_fill" />
          <span v-text="item.comment_count" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'PinPoster',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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
