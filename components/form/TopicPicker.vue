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
      提示：只展示已关注的话题（必选项，填写后不可修改）
    </p>
    <ElSelect v-model="selected" filterable default-first-option placeholder="请选择">
      <ElOption
        v-for="item in options"
        :key="item.slug"
        :label="item.name"
        :value="item.slug"
      />
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
      return this.$store.state.global.myTags
        .filter(_ => _.slug === 'topic')[0].children
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.$channel.$when('user-signed', () => {
      this.$store.dispatch('global/getMyTags')
    })
  }
}
</script>
