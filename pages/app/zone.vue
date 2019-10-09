<style lang="scss">
#app-zone {
  .page-header {
    position: relative;
    padding: 0 15px 15px;
    overflow: hidden;

    .header-core {
      background-color: transparent;
    }

    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(30px);
      z-index: -1;
    }

    .intro {
      img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
      }
    }
  }
}
</style>

<template>
  <div id="app-zone">
    <div class="page-header">
      <Header />
      <div class="background" :style="{ backgroundImage: `url(${$resize(tag.avatar, { width: 100 })})` }" />
      <div class="intro">
        <img :src="$resize(tag.avatar, { width: 100 })" />
      </div>
    </div>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</template>

<script>
import Header from '~/components/app/Header'
import { showTag } from '~/api/tagApi'

export default {
  name: 'AppZone',
  components: {
    Header
  },
  props: {},
  data() {
    return {
      tag: null
    }
  },
  computed: {},
  watch: {},
  asyncData({ app, error, query }) {
    const { slug } = query
    return showTag(app, { slug })
      .then(tag => {
        return {
          tag
        }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
