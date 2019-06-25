<template>
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
