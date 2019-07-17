<style lang="scss">
#tag-show {
  .left-aside {
    margin-right: 10px;
    margin-top: 20px;

    .join-card {
      margin: 0 5px 20px 10px;
    }
  }

  .main-wrap {
    background-color: $color-gray-bg;
    padding: 20px;
    box-shadow: 0 3px 3px rgba(26,26,26,.1) inset;
    margin-top: -$page-header-hgt;
    padding-top: $page-header-hgt + 20;
    min-height: 100vh;
  }

  .right-aside {
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>

<template>
  <div id="tag-show">
    <ElRow class="container">
      <ElCol :span="5">
        <Affix class="left-aside" :top="50">
          <joinCard :tag="tag" />
          <TagHotList :slug="slug" :list="children" />
        </Affix>
      </ElCol>
      <ElCol :span="14" class="main-wrap">
        <PinFlowList :slug="slug" :show-area="false" />
      </ElCol>
      <ElCol :span="5">
        <div class="right-aside">
          <TagControlPanel :slug="slug" />
        </div>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { showTag } from '~/api/tagApi'
import Affix from '~/components/common/Affix'
import PinFlowList from '~/components/flow/PinFlowList'
import joinCard from '~/components/tag/JoinCard'
import TagHotList from '~/components/tag/HotList'
import TagControlPanel from '~/components/tag/ControlPanel'

export default {
  name: 'TagShow',
  layout: 'web',
  components: {
    Affix,
    joinCard,
    PinFlowList,
    TagHotList,
    TagControlPanel
  },
  head() {
    const { tag } = this
    return {
      title: tag.name,
      meta: [
        { hid: 'keywords', name: 'keywords', content: tag.alias },
        { hid: 'description', name: 'description', content: `${tag.name},${tag.intro}` }
      ]
    }
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tag: null,
      parent: null,
      children: []
    }
  },
  asyncData({ app, error, params }) {
    return showTag(app, params)
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  beforeMount() {
    this.patchTag()
  },
  methods: {
    patchTag() {
      this.$axios.$get('v1/tag/patch', {
        params: {
          slug: this.slug
        }
      })
        .then(data => {
          this.tag = this.$set(this, 'tag', Object.assign(this.tag, data))
        })
        .catch(() => {})
    }
  }
}
</script>
