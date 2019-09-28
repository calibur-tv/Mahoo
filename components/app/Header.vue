<style lang="scss">
.header {
  $header-height: 40px;

  &-shim {
    height: $header-height;
    width: 100%;
  }

  &-core {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: $header-height;
    background-color: #fff;
  }

  &-text {
    position: absolute;
    top: 0;
    left: 90px;
    right: 90px;
    height: $header-height;
    line-height: $header-height;
    color: $color-main;
    text-align: center;
    font-size: 15px;
  }

  &-left {
    float: left;
    width: 90px;
    height: $header-height;
    overflow: hidden;
    padding-left: 10px;
    color: $color-main;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    > * {
      line-height: $header-height;
      text-align: center;
      font-weight: 500 !important;
    }
  }

  &-back {
    height: $header-height;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="header">
    <div class="header-shim" />
    <div class="header-core">
      <div class="header-left">
        <div v-if="back" class="header-back" @click="goBack">
          <i class="el-icon-arrow-left" />
        </div>
        <slot name="left"></slot>
      </div>
      <p class="header-text oneline" v-text="title" />
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
