<style lang="scss">
.topic-picker {
  .tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <div class="topic-picker">
    <p class="tip">
      提示：只展示已关注的话题（必选项）
    </p>
    <ElSelect v-if="myTagsFetched" v-model="selected" filterable default-first-option placeholder="请选择">
      <ElOption v-for="item in options" :key="item.slug" :label="item.name" :value="item.slug" />
    </ElSelect>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'

export default {
  name: 'TopicPicker',
  components: {
    ElSelect: Select,
    ElOption: Option
  },
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '选择作品话题，如 cosplay'
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  computed: {
    options() {
      return this.$store.state.global.myTags.filter(_ => _.slug === 'topic')[0].children
    },
    myTagsFetched() {
      return this.$store.state.global.myTagsFetched
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    },
    options(newVal, oldVal) {
      if (newVal.length && !oldVal.length) {
        this.initDefault()
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      if (this.$store.state.isAuth) {
        this.$store.dispatch('global/getMyTags')
      } else {
        this.$channel.$when('user-signed', () => {
          this.$store.dispatch('global/getMyTags')
        })
      }
    },
    initDefault() {
      const slug = this.options.map(_ => _.slug)
      if (!this.selected) {
        if (slug.some(_ => _ === process.env.TAGS.newbie)) {
          this.selected = process.env.TAGS.newbie
        }
      }
      if (!this.selected) {
        this.selected = slug[0]
      }
    }
  }
}
</script>
