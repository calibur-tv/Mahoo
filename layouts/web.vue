<template>
  <div id="layout-web">
    <VHeader />
    <nuxt />
    <SignDialog />
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
  mixins: [useSignMixin]
}
</script>
