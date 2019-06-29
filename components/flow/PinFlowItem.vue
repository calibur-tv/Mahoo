<style lang="scss" module>
.pin-flow-item {
  &-pc {
    border-bottom: 1px solid #f0f2f7;
    padding-bottom: 20px;
    margin-bottom: 20px;

    .title {
      font-size: 18px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 1.6;
      color: #1a1a1a;
      margin-bottom: 10px;
    }

    .media {
      float: left;

      :global(.img) {
        border-radius: 4px;
        margin-right: 18px;
      }
    }

    .desc {
      overflow: hidden;
    }
  }
}
</style>

<template>
  <li>
    <nuxt-link
      :to="$alias.pin(secretLink || item.slug)"
      :class="$style['pin-flow-item-h5']"
      class="only-h5"
    >
      {{ item.title.text }}
    </nuxt-link>
    <div :class="$style['pin-flow-item-pc']" class="only-pc">
      <h2 :class="$style.title">
        <nuxt-link
          target="_blank"
          :to="$alias.pin(secretLink || item.slug)"
          class="fade-link"
          v-text="item.title.text"
        />
      </h2>
      <div :class="$style.content" class="clearfix">
        <div v-if="item.media" :class="$style.media">
          <nuxt-link
            target="_blank"
            :to="$alias.pin(secretLink || item.slug)"
          >
            <v-img :src="item.media.data.url" width="190" height="105" />
          </nuxt-link>
        </div>
        <div :class="$style.desc">
          {{ item.intro }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'PinFlowItem',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    showUser: {
      type: Boolean,
      default: true
    },
    showArea: {
      type: Boolean,
      default: true
    },
    secretLink: {
      type: String,
      default: ''
    }
  },
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
