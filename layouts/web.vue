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
import socketMixin from '~/mixins/socket'

export default {
  name: 'WebLayout',
  components: {
    VHeader,
    SignDialog
  },
  mixins: [useSignMixin, socketMixin]
}
</script>
