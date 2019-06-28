<style lang="scss">
.area-picker {
  .tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <div class="area-picker">
    <p class="tip">
      提示：只能选择你通过了考试的分区
    </p>
    <el-cascader
      v-model="selected"
      :placeholder="placeholder"
      :options="options"
      filterable
    >
      <template slot-scope="{ node, data }">
        <template v-if="node.isLeaf">
          <span>{{ data.label }}</span>
        </template>
        <template v-else>
          <span>{{ data.label }}</span>
          <span> ({{ data.children.length }}) </span>
        </template>
      </template>
    </el-cascader>
  </div>
</template>

<script>
import { Cascader } from 'element-ui'

export default {
  name: 'AreaPicker',
  components: {
    'el-cascader': Cascader
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: '添加作品分区，如约会大作战'
    },
    blocked: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  computed: {
    options() {
      let result = this.$store.state.global.myTags.filter(_ => _.value !== 'notebook')
      if (this.blocked) {
        result = result.filter(_ => _.value !== this.blocked)
      }
      return result
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
    this.$store.dispatch('global/getMyTags')
    this.$channel.$on('user-signed', () => {
      this.$store.dispatch('global/getMyTags')
    })
  }
}
</script>
