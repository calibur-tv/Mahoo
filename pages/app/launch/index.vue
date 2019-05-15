<style lang="scss">
#launch-index {
  height: 100%;

  .v-switcher {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-header {
      &-item {
        padding: 0 5px;
      }
    }

    &-content {
      height: 100%;

      &-wrap {
        flex-grow: 1;
      }

      &-panel {
        height: 100%;
      }
    }
  }
}
</style>

<template>
  <div id="launch-index">
    <v-switcher
      :headers="headers"
      :swipe="true"
      align="center"
    >
      <template slot="0">
        动态
      </template>
      <template slot="1">
        最新
      </template>
    </v-switcher>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      headers: ['动态', '最新']
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
