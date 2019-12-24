<style lang="scss">
#bangumi-trial {
  padding: 15px;

  .trial-item {
    border-bottom: 1px solid $color-gray-line;

    .question {
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 10px;
    }

    .answers {
      list-style-type: upper-alpha;
      margin-left: 1.3em;
      margin-bottom: 10px;

      .is-selected {
        background-color: $color-main;
      }
    }

    .controls {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div id="bangumi-trial">
    <FlowLoader ref="loader" func="getBangumiQuestionTrials" type="page" :query="query">
      <div slot-scope="{ flow, extra }">
        <div v-for="item in flow" :key="item.id" class="trial-item">
          <p class="question" v-html="item.title" />
          <ol class="answers">
            <li v-for="(val, key) in item.answers" :key="key" :class="{ 'is-selected': checkIsSelected(extra, key, item.id) }">
              <span v-html="val" />
            </li>
          </ol>
          <div class="controls">
            <div>
              <span>用户：</span>
              <span v-text="item.user.nickname" />
            </div>
            <div>
              <button @click="handleDelete(item.id)">拒绝</button>
              <button @click="handlePass(item.id)">通过</button>
            </div>
          </div>
        </div>
      </div>
      <template slot="error" slot-scope="{ error }">
        {{ error.message }}
      </template>
    </FlowLoader>
  </div>
</template>

<script>
export default {
  name: 'BangumiTrial',
  layout: 'app',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    query() {
      const query = this.$route.query

      return {
        ...query,
        $axios: this.$axios,
        status: 0
      }
    }
  },
  methods: {
    handleDelete(id) {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.loading) {
            return
          }
          this.loading = true
          this.$axios
            .$post('v1/join/delete', { id })
            .then(() => {
              this.$toast.success('删除成功')
              this.$refs.loader.delete(id)
            })
            .catch(err => {
              this.$toast.error(err.message)
            })
            .finally(() => {
              this.loading = false
            })
        })
        .catch(() => {})
    },
    handlePass(id) {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/recommend', { id })
        .then(() => {
          this.$toast.success('入库成功')
          this.$refs.loader.delete(id)
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    checkIsSelected(extra, key, id) {
      const answers = extra.answers || {}
      let result = false
      Object.keys(answers).forEach(ansId => {
        if (ansId.toString() === id.toString() && !result) {
          result = answers[ansId] === key
        }
      })
      return result
    }
  },
  head: {
    title: '审核题目'
  }
}
</script>
