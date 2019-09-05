<style lang="scss">
.notebook-picker {
  .new-btn {
    float: right;
    margin-left: 15px;
  }

  .selection {
    overflow: hidden;
  }
}
</style>

<template>
  <div class="notebook-picker">
    <div class="new-btn">
      <CreateTagBtn title="新建专栏" parent="uh4f" @create="handleCreate" />
    </div>
    <div class="selection">
      <ElSelect v-if="myTagsFetched" v-model="selected" filterable default-first-option placeholder="请选择">
        <ElOption v-for="item in options" :key="item.slug" :label="item.name" :value="item.slug" />
      </ElSelect>
    </div>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
import CreateTagBtn from '~/components/button/CreateTagBtn'

export default {
  name: 'NotebookPicker',
  components: {
    ElSelect: Select,
    ElOption: Option,
    CreateTagBtn
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: this.value,
      newTags: []
    }
  },
  computed: {
    options() {
      return this.newTags.concat(this.$store.state.global.myTags.filter(_ => _.slug === 'notebook')[0].children)
    },
    myTagsFetched() {
      return this.$store.state.global.myTagsFetched
    }
  },
  watch: {
    selected(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.selected = val
    },
    'options.length'() {
      if (!this.selected) {
        this.selected = this.options[0].slug
      }
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
  },
  methods: {
    handleCreate(data) {
      this.newTags.unshift(data)
      this.selected = data.slug
    }
  }
}
</script>
