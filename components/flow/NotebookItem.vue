<style lang="scss" module>
.notebook {
  padding-bottom: 20px;

  .avatar {
    float: right;
    border-radius: 4px;
    overflow: hidden;
  }

  .content {
    overflow: hidden;
    height: 88px;

    &:not(:last-child) {
      border-bottom: 1px solid #f4f5f7;
    }

    .note-title a {
      color: $color-text-1;
      font-size: 18px;
      line-height: 26px;
    }

    .desc {
      font-size: 12px;
      color: #6d757a;
      line-height: 20px;
      margin-top: 5px;
    }

    .meta {
      margin-top: 15px;
      color: #999;
      height: 14px;
      line-height: 14px;
    }
  }
}
</style>

<template>
  <li :class="$style.notebook">
    <NLink :class="$style.avatar" target="_blank" :to="$alias.tag(item.slug)">
      <VImg :src="item.avatar" width="117" height="88" :alt="item.name" />
    </NLink>
    <div :class="$style.content">
      <div class="note-title oneline">
        <NLink :class="$style.name" class="fade-link" target="_blank" :to="$alias.tag(item.slug)" v-html="item.name" />
      </div>
      <p class="oneline" :class="$style.desc" :title="item.intro" v-text="item.intro || '暂无简介'" />
      <div :class="$style.meta">
        <div>
          <i class="iconfont ic-order_fill" />
          <span>文章数：{{ item.pin_count || 0 }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NotebookItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
