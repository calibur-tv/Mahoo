<style lang="scss">
.pin-tool-dropdown {
  .trigger {
    i {
      transform: rotate(90deg);
    }
  }
}
</style>

<template>
  <div class="pin-tool-dropdown">
    <ElDropdown trigger="click">
      <button class="trigger">
        <i class="el-icon-more" />
      </button>
      <ElDropdownMenu slot="dropdown">
        <ElDropdownItem @click.native="openFeedback">
          投诉或建议
        </ElDropdownItem>
        <ElDropdownItem
          v-if="isMine || $hasRole('delete-pin')"
          divided
          @click.native="deletePin"
        >
          删除文章
        </ElDropdownItem>
        <ElDropdownItem v-if="$hasRole('move-pin')" @click.native="openFeedback">
          移动文章
        </ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

export default {
  name: 'PinToolDropdown',
  components: {
    ElDropdown: Dropdown,
    ElDropdownMenu: DropdownMenu,
    ElDropdownItem: DropdownItem
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    isMine: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      deleting: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openFeedback() {
      this.$toast.info('开发中')
    },
    deletePin() {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.deleting) {
            return
          }
          this.deleting = true
          this.$axios.$post('v1/pin/delete', {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('删除成功').then(() => {
                window.location = '/'
              })
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.deleting = false
            })
        })
        .catch(() => {})
    }
  }
}
</script>
