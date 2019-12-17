<style lang="scss">
#create-bangumi-question {
  padding: 15px;

  .form-tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <ElForm v-if="bangumi" id="create-bangumi-question" ref="form" :disabled="submitting" label-position="top">
    <ElFormItem>
      <h1>为《{{ bangumi.name }}》出题</h1>
      <br />
      <ElAlert description="题目提交完，需要审核通过之后才会入库" title="出题规则" type="success" />
    </ElFormItem>
    <ElFormItem label="题目">
      <ElInput v-model="title" :rows="2" type="textarea" placeholder="请输入题目" resize="none" maxlength="50" show-word-limit />
    </ElFormItem>
    <ElFormItem>
      <p class="form-tip">
        提示：选项至少提供两个，至多四个
      </p>
    </ElFormItem>
    <ElFormItem v-for="(item, index) in answers" :key="item.key" :label="`选项${index + 1}`">
      <ElInput v-model="item.value" placeholder="请输入答案（20字以内）" maxlength="20" />
    </ElFormItem>
    <ElFormItem>
      <p class="form-tip">
        提示：题目为单选题，正确选项不能为空
      </p>
    </ElFormItem>
    <ElFormItem label="答案">
      <ElRadioGroup v-model="rightOpt">
        <ElRadio v-for="(item, index) in answers" :key="item.key" :label="item.key"> 答案{{ index + 1 }} </ElRadio>
      </ElRadioGroup>
    </ElFormItem>
    <ElFormItem>
      <ElButton :loading="submitting" type="success" round @click="submit">
        提交
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import { Radio, RadioGroup, Alert } from 'element-ui'

export default {
  name: 'CreateBangumiQuestion',
  layout: 'app',
  components: {
    ElAlert: Alert,
    ElRadio: Radio,
    ElRadioGroup: RadioGroup
  },
  data() {
    return {
      bangumi: null,
      submitting: false,
      title: '',
      answers: [
        {
          value: '',
          key: 0
        },
        {
          value: '',
          key: 1
        },
        {
          value: '',
          key: 2
        },
        {
          value: '',
          key: 3
        }
      ],
      rightOpt: -1,
      rule: null
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    }
  },
  mounted() {
    this.getBangumi()
    this.getRule()
  },
  methods: {
    getBangumi() {
      this.$axios
        .$get('v1/bangumi/show', {
          params: {
            slug: this.slug
          }
        })
        .then(bangumi => {
          this.bangumi = bangumi
        })
        .catch(() => {})
    },
    getRule() {
      this.$axios
        .$get('v1/join/rule/show', {
          params: {
            slug: this.slug
          }
        })
        .then(data => {
          this.rule = data
        })
        .catch()
    },
    submit() {
      if (!this.title.trim()) {
        this.$toast.info('题目不能为空')
        return
      }
      if (this.answers.map(_ => _.value).filter(_ => _).length < 2) {
        this.$toast.info('至少要有2个选项')
        return
      }
      if (this.rightOpt === -1) {
        this.$toast.info('请选择正确选项')
        return
      }
      if (!this.answers.filter(_ => _.key === this.rightOpt)[0].value.trim()) {
        this.$toast.info('正确选项不能为空')
        return
      }
      this.submitting = true
      this.$axios
        .$post('v1/join/create', {
          title: this.title,
          answers: this.answers.map(_ => _.value).filter(_ => _),
          right_index: this.rightOpt,
          bangumi_slug: this.slug
        })
        .then(() => {
          this.$toast.success('提交成功').then(() => {
            window.location.reload()
          })
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.submitting = false
        })
    }
  },
  head: {
    title: '添加题目'
  }
}
</script>
