<style lang="scss">
.pin-ranker {
  .rank {
    float: left;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    padding: 0 3px;
    background-color: #b8c0cc;
    color: #fff;
    margin-right: 7px;
    font-weight: bolder;

    &.highlight {
      background-color: $color-main;
    }
  }

  .content {
    display: block;
    overflow: hidden;
  }

  &.show {
    .content {
      height: 50px;
      margin-bottom: 15px;

      &:hover {
        .text {
          p {
            color: $color-main;
          }
        }
      }

      .poster {
        width: 80px;
        height: 50px;
        float: left;
        border-radius: 4px;
        overflow: hidden;
        margin-right: 5px;
        background-color: #f1f3f4;
      }

      .text {
        overflow: hidden;

        p {
          @include multi-line(18px);
          height: 36px;
          font-size: 12px;
          color: #222;
          margin-top: -3px;
        }

        div {
          line-height: 12px;
          color: #99a2aa;
          height: 12px;
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }
  }

  &.hide {
    .content {
      min-height: 18px;
      line-height: 18px;
      height: 18px;

      &:hover {
        color: $color-main;
      }
    }
  }
}
</style>

<template>
  <li class="pin-ranker" :class="[show ? 'show' : 'hide']">
    <div class="rank" :class="{ highlight: index < 3 }" v-text="index + 1" />
    <NLink v-show="show" class="content" :to="$alias.pin(item.slug)" target="_blank">
      <div class="poster">
        <VImg :src="item.media && item.media.banner ? item.media.banner.url : 'default-poster'" width="80" height="50" />
      </div>
      <div class="text">
        <p v-html="item.title.text" />
        <div>综合评分：{{ +item.visit_count + item.comment_count * 2 + item.like_count * 2 + item.mark_count * 2 + item.reward_count * 5 }}</div>
      </div>
    </NLink>
    <NLink v-show="!show" class="content oneline" :to="$alias.pin(item.slug)" target="_blank" v-html="item.title.text" />
  </li>
</template>

<script>
export default {
  name: 'PinRanker',
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
