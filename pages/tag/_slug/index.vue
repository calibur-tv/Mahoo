<style lang="scss">
#tag-show {
  .left-aside {
    @include pc() {
      margin-right: 10px;
      margin-top: 20px;

      .join-card {
        margin: 0 5px 20px 10px;
      }
    }
  }

  .main-wrap {
    @include pc() {
      background-color: $color-gray-bg;
      padding: 20px;
      box-shadow: 0 3px 3px rgba(26,26,26,.1) inset;
      margin-top: -$page-header-hgt;
      padding-top: $page-header-hgt + 20;
      min-height: 100vh;
    }
  }

  .right-aside {
    @include pc() {
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}
</style>

<template>
  <div id="tag-show">
    <ElRow class="container">
      <ElCol :xs="24" :span="5">
        <joinCard :tag="tag" />
        <Affix class="left-aside" :top="70">
          <TagHotList :slug="slug" title="热门游戏" :list="children" />
        </Affix>
      </ElCol>
      <ElCol :xs="24" :span="14" class="main-wrap">
        <PinFlowList :slug="slug" />
      </ElCol>
      <ElCol :xs="24" :span="5">
        <TagControlPanel :slug="slug" :parent-slug="tag.parent_slug" />
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
        { hid: 'description', name: 'description', content: `${tag.name},${tag.intro}` },
        { hid: 'share-image', name: 'share-image', content: tag.avatar }
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
          this.$store.commit('social/set', {
            type: 'tag',
            slug: this.slug,
            data: {
              is_marked: data.is_marked
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
