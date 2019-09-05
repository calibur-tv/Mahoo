<style lang="scss" module>
.tag-search-item {
  &-pc {
    .poster {
      float: left;
      margin-right: 15px;
    }

    .content {
      overflow: hidden;
      min-height: 105px;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;

        span {
          display: inline-block;
          height: 22px;
          padding: 0 10px;
          border: 1px solid #979797;
          color: #979797;
          text-align: center;
          line-height: 22px;
          border-radius: 100px;
          font-size: 12px;
          margin-right: 5px;
          flex-shrink: 0;
        }

        a {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: #1a1a1a;
        }
      }

      .intro {
        height: 40px;
        @include multi-line(20px);
      }

      footer {
        color: #99a2aa;
        font-size: 12px;
        margin-top: 8px;

        span {
          margin-right: 30px;
        }
      }
    }
  }

  &-h5 {
    .poster {
      float: left;
      margin-right: 10px;
    }

    .content {
      overflow: hidden;
      height: 80px;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: -3px;

        span {
          display: inline-block;
          height: 22px;
          padding: 0 10px;
          border: 1px solid #979797;
          color: #979797;
          text-align: center;
          line-height: 22px;
          border-radius: 100px;
          font-size: 12px;
          margin-right: 10px;
          flex-shrink: 0;
        }

        :global(.oneline) {
          font-size: 18px;
          font-weight: 600;
          line-height: 30px;
          color: #1a1a1a;
        }
      }

      .intro {
        height: 30px;
        font-size: 12px;
        margin-top: 3px;
        @include multi-line(15px);
      }

      footer {
        color: #99a2aa;
        font-size: 12px;
        margin-top: 3px;

        span {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>

<template>
  <li :class="$style['tag-search-item']">
    <div class="only-pc" :class="$style['tag-search-item-pc']">
      <NLink :to="$alias.tag(item.slug)" target="_blank" :class="$style.poster">
        <VImg :src="item.avatar" :width="105" :height="105" radius="5px" />
      </NLink>
      <div :class="$style.content">
        <h3 :class="$style.title">
          <span>分区</span>
          <NLink class="fade-link oneline" :to="$alias.tag(item.slug)" target="_blank" v-html="item.name" />
        </h3>
        <p :class="$style.intro" v-text="item.intro" />
        <footer>
          <span>帖子数：{{ item.pin_count || 0 }}</span>
          <span>关注数：{{ item.seen_user_count || 0 }}</span>
        </footer>
      </div>
    </div>
    <NLink :to="$alias.tag(item.slug)" class="only-h5" :class="$style['tag-search-item-h5']">
      <VImg :class="$style.poster" :src="item.avatar" :width="80" :height="80" radius="5px" />
      <div :class="$style.content">
        <h3 :class="$style.title">
          <span>分区</span>
          <p class="oneline" v-html="item.name" />
        </h3>
        <p :class="$style.intro" v-text="item.intro" />
        <footer>
          <span>帖子数：{{ item.pin_count || 0 }}</span>
          <span>关注数：{{ item.seen_user_count || 0 }}</span>
        </footer>
      </div>
    </NLink>
  </li>
</template>

<script>
export default {
  name: 'TagSearchItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
