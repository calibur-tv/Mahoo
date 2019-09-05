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
        <ElDropdownItem v-if="isMine || $hasRole('delete-pin')" divided @click.native="deletePin">
          删除文章
        </ElDropdownItem>
        <ElDropdownItem v-if="$hasRole('move_pin')" @click.native="showMoveDialog = true">
          移动文章
        </ElDropdownItem>
      </ElDropdownMenu>
    </ElDropdown>
    <VDialog v-model="showMoveDialog" title="修改文章的分区/话题" @submit="movePin">
      <ElForm label-position="top" label-width="80px">
        <ElFormItem label="选择分区">
          <AreaPicker v-model="newArea" />
        </ElFormItem>
        <ElFormItem label="选择话题">
          <TopicPicker v-model="newTopic" />
        </ElFormItem>
      </ElForm>
    </VDialog>
  </div>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import VDialog from '~/components/common/Dialog'
import AreaPicker from '~/components/form/AreaPicker'
import TopicPicker from '~/components/form/TopicPicker'

export default {
  name: 'PinToolDropdown',
  components: {
    VDialog,
    AreaPicker,
    TopicPicker,
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
    },
    topic: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      deleting: false,
      showMoveDialog: false,
      newTopic: this.topic,
      newArea: this.area
    }
  },
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
          this.$axios
            .$post('v1/pin/delete', {
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
    },
    movePin() {
      this.$axios
        .$post('v1/pin/move', {
          slug: this.slug,
          tags: [this.newTopic, this.newArea],
          topic: this.newTopic,
          area: this.newArea
        })
        .then(() => {
          this.$toast.success('移动成功').then(() => {
            window.location.reload()
          })
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    }
  }
}
</script>
