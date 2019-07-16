<template>
  <button type="button" @click="actionCreate">
    <slot>
      <i class="el-icon-folder-add" />
      <span v-text="title" />
    </slot>
  </button>
</template>

<script>
import { createTag } from '~/api/tagApi'

export default {
  name: 'CreateTagBtn',
  props: {
    title: {
      type: String,
      default: '新建分区'
    },
    parent: {
      type: String,
      required: true
    }
  },
  methods: {
    actionCreate() {
      this.$prompt('请输入名称', this.title, {
        confirmButtonText: '提交',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const name = value.trim()
          if (name.length > 32) {
            return this.$toast.error('名字不能超过32个字')
          }
          createTag(this, {
            name,
            parent_slug: this.parent
          })
            .then(data => {
              this.$emit('create', data)
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    }
  }
}
</script>
