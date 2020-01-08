<style lang="scss">
#app-admin {
  a {
    display: block;
    width: 100%;
    padding: 10px 20px;

    &:not(:first-child) {
      border-top: 1px solid $color-gray-line;
    }
  }
}
</style>

<template>
  <div id="app-admin">
    <NLink to="/app/admin/trial">
      <i class="el-icon-edit" />
      <span>审核题目</span>
      <span v-if="trialInfo">（待审：{{ trialInfo.trial }}，库存：{{ trialInfo.pass }}）</span>
    </NLink>
    <NLink to="/app/admin/create-bangumi">
      <i class="el-icon-plus" />
      <span>创建分区</span>
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'AppAdmin',
  layout: 'app',
  components: {},
  props: {},
  data() {
    return {
      trialInfo: null
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getTrialInfo()
  },
  methods: {
    getTrialInfo() {
      this.$axios
        .$get('v1/bangumi/atfield')
        .then(data => {
          this.trialInfo = data
        })
        .catch()
    }
  },
  head: {
    title: '控制台'
  }
}
</script>
