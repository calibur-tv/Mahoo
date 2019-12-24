<style lang="scss">
#bangumi-rule {
  padding: 15px;

  .el-slider {
    margin-left: 10px;
    margin-right: 10px;
  }

  .form-tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <ElForm id="bangumi-rule" ref="form" label-position="top">
    <ElFormItem label="出题数">
      <p class="form-tip">
        如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数
      </p>
      <ElSlider v-model="rule.question_count" :min="5" :max="100" :format-tooltip="formatQuestionCount" />
    </ElFormItem>
    <ElFormItem label="正确率">
      <p class="form-tip">
        答题的正确率不低于该值才能通过
      </p>
      <ElSlider v-model="rule.right_rate" :min="50" :max="100" :format-tooltip="formatRightRate" />
    </ElFormItem>
    <!--
    <ElFormItem label="答题时长">
      <p class="form-tip">
        答题超过该时长之后就自动设为失败
      </p>
      <ElSlider
        v-model="rule.qa_minutes"
        :min="30"
        :max="120"
        :format-tooltip="formatQAMinutes"
      />
    </ElFormItem>
    <ElFormItem label="加入方式">
      <ElRadioGroup v-model="rule.rule_type">
        <ElRadio :label="0">
          需要答题或管理邀请
        </ElRadio>
        <ElRadio :label="1">
          只能管理邀请
        </ElRadio>
        <ElRadio :label="2">
          只能答题加入
        </ElRadio>
      </ElRadioGroup>
      <p class="form-tip">
        加入方式更改之后不会影响「正在答题」和「已经加入」的人
      </p>
    </ElFormItem>
    <ElFormItem label="考核方式">
      <ElRadioGroup v-model="rule.result_type">
        <ElRadio :label="0">
          答完所有题目之后只告知是否通过
        </ElRadio>
        <ElRadio :label="1">
          每答一道题就得知对错（该模式下正确率强制为100%）
        </ElRadio>
      </ElRadioGroup>
    </ElFormItem>
    -->
    <ElFormItem>
      <ElButton :loading="submitting" type="success" round @click="updateRule">
        保存更改
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import { Slider } from 'element-ui'

export default {
  name: 'EditTagRuleForm',
  layout: 'app',
  components: {
    ElSlider: Slider
  },
  data() {
    return {
      rule: {
        question_count: 30,
        right_rate: 80,
        qa_minutes: 30,
        rule_type: 0,
        result_type: 0
      },
      submitting: false
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    }
  },
  mounted() {
    this.getRule()
  },
  methods: {
    formatQuestionCount(val) {
      return `${val}个`
    },
    formatRightRate(val) {
      return `${val}%`
    },
    formatQAMinutes(val) {
      return `${val}分钟`
    },
    updateRule() {
      if (this.submitting) {
        return
      }
      this.submitting = true
      this.$axios
        .$post('v1/join/rule/update', this.rule)
        .then(() => {
          this.$toast.success('更新成功')
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.submitting = false
        })
    },
    getRule() {
      this.$axios
        .$get('v1/join/rule/show', {
          params: {
            slug: this.tag.slug
          }
        })
        .then(data => {
          this.$set(this, 'rule', data)
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    }
  },
  head: {
    title: '入圈规则'
  }
}
</script>
