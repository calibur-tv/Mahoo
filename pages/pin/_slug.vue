<style lang="scss">
#pin-show {
  .content {
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div id="pin-show">
    <div class="content">
      <json-content v-if="show" :content="content" />
    </div>
  </div>
</template>

<script>
import JsonContent from '~/components/editor/JsonContent'

export default {
  name: 'PinShow',
  components: {
    JsonContent
  },
  props: {},
  data() {
    return {
      show: false,
      content: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initTest()
  },
  methods: {
    initTest() {
      this.content = this.$cache.get('editor_local_draft').blocks
      this.show = true
    }
  }
}
</script>
