<style lang="scss">
</style>

<template>
  <div class="tag-question-form">
    <FlowLoader
      func="getZoneQuestions"
      type="page"
      :query="{ $axios, slug }"
    >
      <ul slot-scope="{ flow }">
        {{ flow }}
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
export default {
  name: 'TagQuestionForm',
  components: {},
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
