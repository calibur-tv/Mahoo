<style lang="scss">
#bangumi-join {
  .launch {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
      width: 75px;
      height: 75px;
      border-radius: 10%;
      margin-bottom: 15px;
    }
  }

  .question-list {
    padding: 15px;
    margin-left: 15px;
  }

  .question-item {
    border-bottom: 1px solid $color-gray-line;

    .question {
      font-weight: 500;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 10px;
    }

    .answers {
      list-style-type: upper-alpha;
      margin-left: 1.3em;
      margin-bottom: 10px;

      li {
        padding: 15px;
        list-style-type: upper-alpha;
        border-radius: 26px;
        border: 1px solid $color-gray-border;
        margin-bottom: 10px;

        &.is-selected {
          background-color: $color-main;
          border-color: $color-main;
        }
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

  .qa-footer {
    text-align: center;
  }
}
</style>

<template>
  <div id="bangumi-join">
    <div v-if="showLaunch" class="launch">
      <template v-if="bangumi">
        <img class="avatar" :src="$resize(bangumi.avatar, { width: 150 })" alt="" />
        <p>加入《{{ bangumi.name }}》</p>
      </template>
      <template v-if="rule">
        <ul>
          <li>该番剧出题：{{ rule.question_count }}道</li>
          <li>正确率需要：{{ rule.right_rate }}%</li>
        </ul>
      </template>
      <ElButton type="success" round @click="handleBegin">开始答题</ElButton>
      <NLink v-if="showCreate" :to="`/app/bangumi/test?slug=${slug}`">出题</NLink>
    </div>
    <template v-else>
      <ol class="question-list">
        <li v-for="item in questions" :key="item.id" class="question-item">
          <p class="question" v-html="item.title" />
          <ol class="answers">
            <li v-for="(val, key) in item.answers" :key="key" :class="{ 'is-selected': selected[item.id] && selected[item.id] === key }" @click="handleSelect(item.id, key)">
              <span v-html="val" />
            </li>
          </ol>
          <div class="controls">
            <div>
              <span>出题人：</span>
              <span v-text="item.user.nickname" />
            </div>
          </div>
        </li>
      </ol>
      <footer v-if="questions.length" slot="footer" class="qa-footer">
        <ElButton :loading="loading" class="submit-btn" type="success" round @click="submit">
          交卷
        </ElButton>
      </footer>
    </template>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'

export default {
  name: 'BangumiJoin',
  layout: 'app',
  mixins: [mustSign],
  data() {
    return {
      showLaunch: true,
      showCreate: false,
      rule: null,
      sheet: null,
      bangumi: null,
      questions: [],
      selected: {},
      loading: false
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.getBangumiInfo()
    this.getBangumiRule()
  },
  methods: {
    getBangumiRule() {
      this.$axios
        .$get('v1/join/rule/show', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.rule = data
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    getBangumiInfo() {
      this.$axios
        .$get('v1/bangumi/show', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.bangumi = data
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    handleBegin() {
      this.$axios
        .$post('v1/join/begin', {
          slug: this.slug
        })
        .then(result => {
          if (result === 'reject') {
            this.$toast.info('该分区还未开放')
          } else if (result === 'resolve') {
            this.$toast.info('你已加入该分区')
          } else if (result === 'no_rule') {
            this.$toast.info('还没有答题规则')
          } else if (result === 'no_question') {
            this.$toast.info('分区题目数量不足')
            this.showCreate = true
          } else if (result === 'pending') {
            this.getQuestions()
          }
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    getQuestions() {
      this.$axios
        .$get('v1/join/list', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.selected = data.extra.answers || {}
          this.questions = data.result
          this.showLaunch = false
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    handleSelect(questionId, answerId) {
      this.$axios
        .$post('v1/join/vote', {
          question_id: questionId,
          answer_id: answerId
        })
        .then(() => {
          this.selected[questionId] = answerId
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    restart() {
      this.$confirm('你会获取一套新的试题，确定要重做吗？')
        .then(() => {
          if (this.loading) {
            return
          }
          this.loading = true
          this.$axios
            .$post('v1/join/begin', {
              slug: this.slug,
              retry: true
            })
            .then(() => {
              this.getQuestions()
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
    submit() {
      if (Object.keys(this.selected).length < this.questions.length) {
        this.$toast.info('请先做完所有题目')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/submit', {
          slug: this.slug
        })
        .then(result => {
          this.$toast.info(result).then(() => {
            const isQQ = /qq/.test(window.navigator.userAgent.toLowerCase())
            const self = isQQ ? window.qq : window.wx
            self.miniProgram.redirectTo({
              url: `/pages/bangumi/show/index?slug=${this.slug}`
            })
          })
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  head: {
    title: '答题'
  }
}
</script>
