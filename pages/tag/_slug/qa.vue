<style lang="scss">
#tag-qa {
  margin-top: 30px;

  .el-alert {
    line-height: 1.5;
  }
}
</style>

<template>
  <div id="tag-qa">
    <ElRow>
      <ElCol :span="12" :offset="6">
        <CreateTagATFieldForm :slug="slug" />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'
import CreateTagATFieldForm from '~/components/form/CreateTagATFieldForm'

export default {
  name: 'TagQA',
  layout: 'web',
  components: {
    CreateTagATFieldForm
  },
  mixins: [mustSign],
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
