<style lang="scss">
.tag-control-panel {
  h3 {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="tag-control-panel">
    <h3>控制台</h3>
    <NLink :to="$alias.tag(slug, 'edit')">
      <ElButton icon="el-icon-edit" size="mini" round>
        编辑
      </ElButton>
    </NLink>
    <NLink :to="$alias.tag(slug, 'qa')">
      <ElButton icon="el-icon-guide" size="mini" round>
        出题
      </ElButton>
    </NLink>
    <ElButton icon="el-icon-delete" size="mini" round @click="deleteTag">
      删除
    </ElButton>
  </div>
</template>

<script>
import { deleteTag } from '~/api/tagApi'

export default {
  name: 'TagControlPanel',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteTag() {
      this.$confirm('真的要这么做吗?', '删除标签')
        .then(() => {
          deleteTag(this, {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('标签删除成功')
                .then(() => {
                  window.location.reload()
                })
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
