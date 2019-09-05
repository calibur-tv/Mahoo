<style lang="scss">
#category-layout {
  .v-switcher {
    margin-bottom: 17px;

    &-header {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #eee;
      }

      &-item {
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        color: $color-text-1;

        a {
          padding: 0 15px;
        }
      }

      &-anchor {
        height: 1px;
        bottom: 0;
        background-color: $color-main;

        &:after {
          content: '';
          position: absolute;
          left: 50%;
          margin-left: -3px;
          bottom: 1px;
          width: 0;
          height: 0;
          border-bottom: 3px solid $color-main;
          border-top: 0;
          border-left: 3px dashed transparent;
          border-right: 3px dashed transparent;
        }
      }
    }
  }
}
</style>

<template>
  <section id="category-layout">
    <VSwitcher :headers="headers" :routable="true" :anchor-padding="15" align="start">
      <NLink v-for="(item, index) in headers" :key="index" :slot="`tab-${index}`" :to="item.route" v-text="item.name" />
    </VSwitcher>
    <NuxtChild />
  </section>
</template>

<script>
export default {
  name: 'CategoryLayout',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    headers() {
      const prefix = `/user/${this.slug}/emotion/category/`
      return [
        {
          route: `${prefix}bangumi`,
          name: '动漫'
        },
        {
          route: `${prefix}game`,
          name: '游戏'
        },
        {
          route: `${prefix}topic`,
          name: '话题'
        },
        {
          route: `${prefix}notebook`,
          name: '专栏'
        }
      ]
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
