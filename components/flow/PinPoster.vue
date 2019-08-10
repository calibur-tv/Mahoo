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
    background-color: #F1F3F4;
    width: 160px;
    height: 100px;

    .mask {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.2);
      transition: opacity .3s;
      padding: 6px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-end;

      >div {
        height: 12px;
        line-height: 12px;
        margin-right: 15px;
        color: #fff;
      }
    }

    &:hover {
      .mask {
        opacity: 1;
      }
    }
  }

  .text {
    position: relative;
    padding-top: 8px;

    .title {
      color: #222;
      height: 40px;
      display: block;
      @include multi-line(20px);
    }

    .mask {
      position: absolute;
      height: 20px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      transition: bottom .3s;

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
      </div>
    </NLink>
    <div class="text">
      <NLink class="title fade-link" target="_blank" :to="$alias.pin(item.slug)" v-text="item.title.text" />
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
