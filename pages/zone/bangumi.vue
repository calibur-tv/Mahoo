<style lang="scss">
#zone-bangumi {
  .left-aside {
    @include pc() {
      margin-right: 10px;
      margin-top: 20px;
      margin-left: -10px;
    }
  }

  .main-wrap {
    @include pc() {
      background-color: $color-gray-bg;
      padding: 20px;
      box-shadow: 0 3px 3px rgba(26, 26, 26, 0.1) inset;
      margin-top: -$page-header-hgt;
      padding-top: $page-header-hgt + 20;
      min-height: 100vh;
    }
  }
}
</style>

<template>
  <div id="zone-bangumi">
    <ElRow class="container">
      <ElCol :xs="24" :span="5">
        <Affix class="left-aside" :top="70">
          <TagHotList v-if="children" :slug="slug" title="热门动漫" :children="children" />
        </Affix>
      </ElCol>
      <ElCol :xs="24" :span="14" class="main-wrap">
        <PinFlowList :slug="slug" />
      </ElCol>
      <ElCol :xs="24" :span="5">
        <br />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import ZoneMixin from '~/mixins/zone'
import { showTag, tagChildren } from '~/api/tagApi'
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
  asyncData({ app, error }) {
    const slug = process.env.TAGS.bangumi
    return Promise.all([showTag(app, { slug }), tagChildren(app, { slug })])
      .then(data => {
        return {
          tag: data[0],
          children: data[1]
        }
      })
      .catch(error)
  },
  data() {
    return {
      slug: process.env.TAGS.bangumi
    }
  }
}
</script>
