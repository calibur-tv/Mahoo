<style lang="scss">
#layout-trend {
  .main-view {
    margin-top: 30px;
  }
}
</style>

<template>
  <div id="layout-trend">
    <v-header />
    <!--
    <v-banner />
    -->
    <el-row class="container main-view" :gutter="15">
      <el-col :span="24" :lg="4">
        &nbsp;
      <!--
        <menubar />
        -->
      </el-col>
      <el-col :span="24" :lg="15">
        <nuxt />
      </el-col>
      <el-col :span="24" :lg="5">
        &nbsp;
      <!--
        <sidebar />
        -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VHeader from '~/components/common/Header'
import VBanner from '~/components/common/Banner'
import Menubar from '~/components/common/Menubar'
import Sidebar from '~/components/common/Sidebar'

export default {
  name: '',
  components: {
    VHeader,
    VBanner,
    Menubar,
    Sidebar
  },
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
