<style lang="scss">
#zone-bangumi {
  .left-aside {
    margin-right: 10px;
    margin-top: 20px;
  }

  .main-wrap {
    background-color: $color-gray-bg;
    padding: 20px;
    box-shadow: 0 3px 3px rgba(26,26,26,.1) inset;
    margin-top: -$page-header-hgt;
    padding-top: $page-header-hgt + 20;
    min-height: 100vh;
  }
}
</style>

<template>
  <div id="zone-bangumi">
    <ElRow class="container">
      <ElCol :span="5">
        <Affix class="left-aside" :top="50">
          <TagHotList :slug="slug" title="热门动漫" :list="children" />
        </Affix>
      </ElCol>
      <ElCol :span="14" class="main-wrap">
        <PinFlowList :slug="slug" />
      </ElCol>
      <ElCol :span="5">
        <!--
        <Affix :top="50">
          <div>
            当前标签活跃用户
          </div>
        </Affix>
        -->
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import ZoneMixin from '~/mixins/zone'
import { showTag } from '~/api/tagApi'
import Affix from '~/components/common/Affix'
import PinFlowList from '~/components/flow/PinFlowList'
import TagHotList from '~/components/tag/HotList'

export default {
  name: 'ZoneBangumi',
  components: {
    Affix,
    PinFlowList,
    TagHotList
  },
  mixins: [ZoneMixin],
  data() {
    return {
      slug: process.env.TAGS.bangumi
    }
  },
  asyncData({ app, error }) {
    return showTag(app, {
      slug: process.env.TAGS.bangumi
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
