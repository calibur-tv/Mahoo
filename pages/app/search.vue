<style lang="scss">
#app-search {
  height: 100vh;

  .search-box {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 9;

    &-cancel {
      font-size: 16px;
      float: right;
      line-height: 40px;
      color: $color-main;
      padding-right: 10px;
    }

    &-input {
      position: relative;
      overflow: hidden;
      height: 40px;
      padding: 5px 10px;

      .ic-search {
        position: absolute;
        left: 12px;
        top: 5px;
        width: 30px;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        text-align: center;
      }

      .el-icon-close {
        position: absolute;
        right: 21px;
        top: 13px;
        width: 14px;
        height: 14px;
        line-height: 14px;
        font-size: 11px;
        text-align: center;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      }

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        margin: 0;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        color: rgb(102, 102, 102);
        caret-color: $color-main;
        line-height: 16px;
        font-size: 14px;
        padding: 7px 30px;

        &::placeholder {
          color: rgb(102, 102, 102);
          line-height: 18px;
        }
      }
    }
  }

  .search-content {
    height: 100%;
    padding-top: 40px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

<template>
  <PageTransition>
    <div id="app-search">
      <div class="search-box">
        <div class="search-box-cancel" @click="back">
          取消
        </div>
        <div class="search-box-input">
          <i class="iconfont ic-search" />
          <input v-model="query" v-focus type="text" placeholder="搜索二次元的一切" />
          <i v-if="query" class="el-icon-close" @click="query = ''" />
        </div>
      </div>
      <div class="search-content">
        <p>start</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>搜索</p>
        <p>end</p>
      </div>
    </div>
  </PageTransition>
</template>

<script>
import PageTransition from '~/components/app/PageTransition'

export default {
  name: 'AppSearch',
  components: {
    PageTransition
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  data() {
    return {
      query: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
