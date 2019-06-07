<style lang="scss">
#user-notice {}
</style>

<template>
  <div id="user-notice">
    通知
  </div>
</template>

<script>
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserNotice',
  components: {},
  mixins: [mustSign, mustSelf],
  props: {},
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
