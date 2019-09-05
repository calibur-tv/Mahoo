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
      提示：只展示已加入的分区（可选项）
    </p>
    <ElCascader
      v-if="myTagsFetched"
      v-model="selected"
      :placeholder="placeholder"
      :options="options"
      :props="{
        value: 'slug',
        label: 'name',
        emitPath: false
      }"
      filterable
    >
      <template slot-scope="{ node, data }">
        <template v-if="node.isLeaf">
          <span>{{ data.name }}</span>
        </template>
        <template v-else>
          <span>{{ data.name }}</span>
          <span> ({{ data.children.length }}) </span>
        </template>
      </template>
    </ElCascader>
  </div>
</template>

<script>
import { Cascader } from 'element-ui'

export default {
  name: 'AreaPicker',
  components: {
    ElCascader: Cascader
  },
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '选择作品分区，如约会大作战'
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  computed: {
    options() {
      return this.$store.state.global.myTags.filter(_ => !~['notebook', 'topic'].indexOf(_.slug))
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
    }
  },
  mounted() {
    if (this.$store.state.isAuth) {
      this.$store.dispatch('global/getMyTags')
    } else {
      this.$channel.$when('user-signed', () => {
        this.$store.dispatch('global/getMyTags')
      })
    }
  }
}
</script>
