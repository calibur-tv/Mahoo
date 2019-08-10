<style lang="scss">
.tag-control-panel {
  h3 {
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    margin: 5px 0 !important;
  }
}
</style>

<template>
  <div v-if="show || isAdmin" class="tag-control-panel">
    <h3>控制台</h3>
    <NLink :to="$alias.tag(slug, 'edit')">
      <ElButton icon="el-icon-edit" type="info" round>
        编辑分区
      </ElButton>
    </NLink>
    <ElButton icon="el-icon-delete" type="danger" round @click="deleteTag">
      删除分区
    </ElButton>
    <ElButton icon="el-icon-user" type="success" round @click="inviteUser">
      邀请用户
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
    },
    parentSlug: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    showQA() {
      return this.parentSlug !== process.env.TAGS.notebook
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    },
    state() {
      return this.$store.getters['social/get']('tag', this.slug)
    }
  },
  methods: {
    deleteTag() {
      this.$confirm('真的要这么做吗?', '删除分区')
        .then(() => {
          deleteTag(this, {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('删除成功')
                .then(() => {
                  window.location.reload()
                })
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
        })
        .catch(() => {})
    },
    inviteUser() {
      this.$prompt('请输入受邀者的cc号', '邀请用户', {
        confirmButtonText: '提交',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          const name = value.trim()
          if (name.length > 16 || name.length < 2 || !/^([a-z0-9]|_|-)+$/i.test(name)) {
            return this.$toast.error('错误的cc号')
          }
          this.$axios.$post('v1/atfield/invite', {
            user_slug: name,
            tag_slug: this.slug
          })
            .then(() => {
              this.$toast.success('邀请成功')
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
