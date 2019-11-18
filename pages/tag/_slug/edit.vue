<style lang="scss">
#tag-edit {
  margin-top: 20px;

  .v-switcher {
    &-header {
      margin-left: -10px;

      &-item {
        cursor: pointer;
        padding: 0 10px;
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
  <div id="tag-edit">
    <ElRow v-if="tag">
      <ElCol :span="12" :offset="6">
        <VSwitcher :headers="headers" :swipe="true" :anchor-padding="10">
          <template slot="0">
            <EditTagInfoForm :tag="tag" />
          </template>
          <template slot="1">
            <EditTagRuleForm :tag="tag" />
          </template>
        </VSwitcher>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { showTag } from '~/api/tagApi'
import mustSign from '~/mixins/mustSign'
import EditTagInfoForm from '~/components/form/EditTagInfoForm'
import EditTagRuleForm from '~/components/form/EditTagRuleForm'

export default {
  name: 'TagEdit',
  layout: 'web',
  components: {
    EditTagInfoForm,
    EditTagRuleForm
  },
  mixins: [mustSign],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  asyncData({ app, error, params }) {
    return showTag(app, params)
      .then(tag => {
        tag.alias = tag.alias.split(',')
        return { tag }
      })
      .catch(error)
  },
  data() {
    return {
      tag: null
    }
  },
  computed: {
    headers() {
      if (!this.tag) {
        return []
      }
      const result = ['基本信息']
      const area = process.env.TAGS
      if (!~[area.bangumi, area.game, area.topic].indexOf(this.tag.slug) && this.tag.parent_slug !== area.notebook) {
        result.push('加入规则')
      }
      return result
    }
  }
}
</script>
