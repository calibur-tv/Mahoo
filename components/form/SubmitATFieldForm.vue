<style lang="scss">
.submit-atfield-form {
  .qa-header {
    h1 {
      text-align: center;
      margin-bottom: 10px;
    }
  }

  .questions {
    >li {
      padding: 20px 0;
      border-bottom: 1px solid $color-gray-line;
    }
  }

  .qa-footer {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;

    .submit-btn {
      width: 200px;
    }
  }
}
</style>

<template>
  <FlowLoader
    ref="loader"
    func="getZoneQuestions"
    type="page"
    :query="{ $axios, slug, changing: 'slug' }"
    :callback="handleCallback"
    class="submit-atfield-form"
  >
    <header slot="header" slot-scope="{ source }" class="qa-header">
      <h1><span v-if="tag">《{{ tag.name }}》</span><span>共{{ source.total }}道题</span></h1>
      <ElAlert
        title="题目都是单选，答完所有题之后只要满足「分区规则」即可加入分区"
        type="info"
        center
        show-icon
        :closable="false"
      />
    </header>
    <ul slot-scope="{ flow }" class="questions">
      <TagQuestion
        v-for="(item, index) in flow"
        :key="item.slug"
        :item="item"
        :number="index + 1"
        :show-area="false"
        @select="handleSelect"
      />
    </ul>
    <footer slot="footer" class="qa-footer">
      <ElButton :loading="loading" class="submit-btn" type="success" round @click="submit">
        交卷
      </ElButton>
    </footer>
  </FlowLoader>
</template>

<script>
import TagQuestion from '~/components/flow/TagQuestion'
import { Alert } from 'element-ui'

export default {
  name: 'SubmitATFieldForm',
  components: {
    TagQuestion,
    ElAlert: Alert
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tag: null,
      loading: false
    }
  },
  methods: {
    handleCallback({ data }) {
      this.tag = data.extra.tag
      this.$refs.loader.patch(data.extra.answers)
    },
    handleSelect({ id, result }) {
      this.$refs.loader.update({
        id,
        key: 'selected_id',
        value: result
      })
    },
    submit() {
      const result = this.$refs.loader.getResource('result')
      const total = this.$refs.loader.getResource('total')
      if (result.filter(_ => _.selected_id).length < total) {
        this.$toast.info('请先做完所有题目')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios.$post('v1/atfield/submit', {
        slug: this.slug
      })
        .then(result => {
          if (result === 'pass') {
            this.$toast.success('挑战成功！')
          } else {
            this.$toast.info('挑战失败！')
          }
          setTimeout(() => {
            window.location = this.$alias.tag(this.slug)
          }, 1000)
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
