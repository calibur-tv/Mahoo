<style lang="scss">
#page-index {
}
</style>

<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="openAlertModal">
      主要按钮
    </el-button>
    <el-button type="success" @click="openConfirmModal">
      成功按钮
    </el-button>
    <el-button type="info" @click="openPromptModal">
      信息按钮
    </el-button>
    <el-button type="warning" @click="showMessage">
      警告按钮
    </el-button>
    <el-button type="danger" @click="throwError">
      危险按钮
    </el-button>
  </div>
</template>

<script>
export default {
  layout: 'trend',
  data() {
    return {
      pageInfo: '123'
    }
  },
  methods: {
    openAlertModal() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$toast.success(`action: ${action}`)
        }
      })
    },
    openConfirmModal() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$toast.success('删除成功!')
        })
        .catch(() => {
          this.$toast.error('已取消删除')
        })
    },
    openPromptModal() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      })
        .then(({ value }) => {
          this.$toast.success('你的邮箱是: ' + value)
        })
        .catch(() => {
          this.$toast.error('取消输入')
        })
    },
    showMessage() {
      this.$toast.success('hello world')
    },
    throwError() {
      throw new Error('2333')
    }
  }
}
</script>
