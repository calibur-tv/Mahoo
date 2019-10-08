<style lang="scss">
#app-category {
  .title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 10px 0;
    background-color: #fff;
    color: $color-black;
    z-index: 11;
  }

  .title-shim {
    height: 50px;
  }

  .tag-list {
    -webkit-overflow-scrolling: touch;
    padding: 0 5px;

    li {
      display: block;
      width: 33.3%;
      padding: 5px;
      float: left;
      text-align: center;

      a {
        display: block;
        background-color: $color-gray-3;
        border-radius: 5px;
        padding: 15px 15px 10px;
        overflow: hidden;
      }

      figure {
        position: relative;
        display: block;
        width: 100%;
        height: 0;
        padding-top: 100%;
        margin-bottom: 5px;
      }

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 5%;
        object-fit: cover;
      }

      p {
        font-size: 12px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
        color: $color-text-2;
      }
    }
  }
}
</style>

<template>
  <div id="app-category">
    <p class="title">热门圈子</p>
    <div class="title-shim" />
    <VScroller :throttle="-1">
      <FlowLoader
        func="tagHottest"
        type="page"
        :query="{
          take: 12,
          $axios
        }"
      >
        <ul slot-scope="{ flow }" class="tag-list clearfix">
          <li v-for="item in flow" :key="item.slug">
            <NLink :to="`/app/zone?slug=${item.slug}`">
              <figure>
                <img :src="$resize(item.avatar, { width: 100 })" />
              </figure>
              <p class="oneline" v-html="item.name" />
              <span>{{ item.seen_user_count }} 关注</span>
            </NLink>
          </li>
        </ul>
      </FlowLoader>
    </VScroller>
  </div>
</template>

<script>
export default {
  name: 'AppCategory',
  layout: 'app',
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
