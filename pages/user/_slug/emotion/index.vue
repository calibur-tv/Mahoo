<style lang="scss">
#user-emotion {
  .block {
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
      margin-bottom: 17px;
    }

    &-title {
      padding-bottom: 15px;

      .text {
        color: #000;
        font-size: 20px;
        font-weight: 400;
        line-height: 33px;
        transition: color .2s ease;

        &:hover {
          color: $color-main;
        }
      }
    }
  }
}
</style>

<template>
  <div id="user-emotion">
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="bangumi" append>
          看过的动漫
        </nuxt-link>
      </div>
    </div>
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="game" append>
          玩过的游戏
        </nuxt-link>
      </div>
    </div>
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="topic" append>
          关注的话题
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserEmotion',
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
