<style lang="scss">
</style>

<template>
  <div id="create-layout">
    <el-row class="container">
      <el-col :span="4">
        <ul>
          <li>
            <nuxt-link to="/create/simple">
              帖子
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/create/cosplay">
              cosplay
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/create/atfield">
              A.T.Field
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="15">
        <nuxt-child />
      </el-col>
      <el-col :span="5">
        &nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CreateLayout',
  layout: 'web',
  components: {},
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
