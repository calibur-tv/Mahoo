<style lang="scss">
#homepage {
  margin-top: 30px;

  .only-pc.container {
    min-width: 980px;
  }

  .area-wrap {
    padding-bottom: 19px;

    .area-left {
      overflow: hidden;
    }

    .area-right {
      float: right;
      width: 260px;
      margin-left: 20px;
    }
  }

  .beian {
    margin-bottom: 20px;
    text-align: center;
    color: $color-text-2;
    font-size: 12px;
  }
}
</style>

<template>
  <div id="homepage">
    <div class="only-pc container">
      <component
        :is="`${item.type}-area`"
        v-for="item in category"
        :key="item.slug"
        :name="item.name"
        :slug="item.slug"
      />
      <p class="beian">
        互联网 ICP 备案：沪 ICP 备 17050785 号 - 1
      </p>
    </div>
    <div class="only-h5">
      calibur.tv
    </div>
  </div>
</template>

<script>
import GridArea from '~/components/area/GridArea'

export default {
  name: 'Homepage',
  layout: 'web',
  components: {
    GridArea
  },
  data() {
    return {
      tags: []
    }
  },
  computed: {
    category() {
      return this.tags.map(_ => {
        _.type = 'grid'
        return _
      })
    }
  },
  asyncData({ app, error }) {
    return app.$axios.$get('v1/tag/hottest')
      .then(tags => {
        return { tags }
      })
      .catch(error)
  }
}
</script>
