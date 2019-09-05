<style lang="scss">
#tag-atfield {
  margin-top: 30px;
}
</style>

<template>
  <div id="tag-atfield">
    <ElRow>
      <ElCol :span="6" :xs="0">
        <br />
      </ElCol>
      <ElCol :span="12" :xs="24">
        <SubmitATFieldForm :slug="slug" />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'
import SubmitATFieldForm from '~/components/form/SubmitATFieldForm'

export default {
  name: 'TagATField',
  layout: 'web',
  components: {
    SubmitATFieldForm
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
