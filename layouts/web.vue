<style lang="scss">
#layout-web {
  overflow-x: hidden;

  #share-img {
    position: fixed;
    left: -200px;
    top: 0;
  }
}
</style>

<template>
  <div id="layout-web">
    <img id="share-img" src="https://m1.calibur.tv/default-poster-sharejpg200" alt="logo">
    <v-header />
    <nuxt />
    <sign-dialog />
  </div>
</template>

<script>
import VHeader from '~/components/common/Header'
import SignDialog from '~/components/SignDialog'
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'WebLayout',
  components: {
    VHeader,
    SignDialog
  },
  mixins: [useSignMixin],
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
