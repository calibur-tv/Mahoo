<style lang="scss">
#tag-show {
  .left-aside {
    @include pc() {
      margin-right: 10px;
      margin-top: 20px;
      margin-left: -10px;

      .join-card {
        margin: 0 5px 20px 10px;
      }
    }
  }

  .right-aside {
    @include pc() {
      margin-top: 20px;
      margin-left: 20px;
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
  <div id="tag-show">
    <ElRow class="container">
      <ElCol :xs="24" :span="5">
        <div class="left-aside">
          <JoinCard :tag="tag" />
          <Affix :top="70">
            <TagHotList :slug="slug" :children="children" />
          </Affix>
        </div>
      </ElCol>
      <ElCol :xs="24" :span="14" class="main-wrap">
        <PinFlowList :slug="slug" />
      </ElCol>
      <ElCol class="only-pc" :xs="24" :span="5">
        <div class="right-aside">
          <TagControlPanel :is-master="is_master" :slug="slug" :parent-slug="tag.parent_slug" />
        </div>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { showTag, tagChildren } from '~/api/tagApi'
import Affix from '~/components/common/Affix'
import PinFlowList from '~/components/flow/PinFlowList'
import JoinCard from '~/components/tag/JoinCard'
import TagHotList from '~/components/tag/HotList'
import TagControlPanel from '~/components/tag/ControlPanel'

export default {
  name: 'TagShow',
  layout: 'web',
  components: {
    Affix,
    JoinCard,
    PinFlowList,
    TagHotList,
    TagControlPanel
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  asyncData({ app, error, params }) {
    const { slug } = params
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
      tag: null,
      children: [],
      is_master: false
    }
  },
  beforeMount() {
    this.patchTag()
  },
  methods: {
    patchTag() {
      this.$axios
        .$get('v1/tag/patch', {
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
          this.is_master = data.is_master
        })
        .catch(() => {})
    }
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
  }
}
</script>
