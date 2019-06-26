<template>
  <div id="layout-web">
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
