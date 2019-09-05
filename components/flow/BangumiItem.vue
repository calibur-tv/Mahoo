<style lang="scss" module>
.bangumi {
  img {
    width: 110px;
    height: 144px;
  }

  .avatar {
    float: left;
    margin-right: 20px;
    border-radius: 4px;
    box-shadow: 0 0 0 1px #e5e9ef;
    overflow: hidden;
  }

  .content {
    overflow: hidden;

    .name {
      font-size: 18px;
    }

    .desc {
      margin-top: 10px;
      font-size: 12px;
      @include multi-line(20px);
    }
  }
}
</style>

<template>
  <li :class="$style.bangumi">
    <NLink :class="$style.avatar" target="_blank" :to="$alias.tag(item.slug)">
      <VImg :src="item.avatar" width="110" height="144" :alt="item.name" />
    </NLink>
    <div :class="$style.content">
      <div class="oneline">
        <NLink :class="$style.name" class="fade-link" target="_blank" :to="$alias.tag(item.slug)" v-html="item.name" />
      </div>
      <p :class="$style.desc" v-text="item.intro" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'BangumiItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
