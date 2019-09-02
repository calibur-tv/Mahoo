<template>
  <div id="layout-web">
    <VHeader />
    <nuxt />
    <SignDialog />
    <ElBacktop class="only-pc">
      <i class="el-icon-caret-top" />
    </ElBacktop>
  </div>
</template>

<script>
import VHeader from '~/components/common/Header'
import SignDialog from '~/components/SignDialog'
import useSignMixin from '~/mixins/useSign'
import socketMixin from '~/mixins/socket'
import { Backtop } from 'element-ui'

export default {
  name: 'WebLayout',
  components: {
    VHeader,
    ElBacktop: Backtop,
    SignDialog
  },
  mixins: [useSignMixin, socketMixin]
}
</script>
