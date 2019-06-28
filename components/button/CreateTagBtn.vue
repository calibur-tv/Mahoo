<template>
  <button type="button" @click="actionCreate">
    <i class="el-icon-folder-add" />
    <span>新建{{ text }}</span>
  </button>
</template>

<script>
import { createTag } from '~/api/tagApi'

export default {
  name: 'CreateTagBtn',
  props: {
    text: {
      type: String,
      default: '分区'
    },
    parent: {
      type: String,
      required: true
    }
  },
  methods: {
    actionCreate() {
      this.$prompt(`请输入${this.text}名`, `新建${this.text}`, {
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
