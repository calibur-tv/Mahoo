<style lang="scss">
.edit-tag-rule-form {
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
  <ElForm
    ref="form"
    label-position="top"
    class="edit-tag-rule-form"
  >
    <ElFormItem label="出题数">
      <p class="form-tip">
        如果题库数量不足，则有多少出多少，如果题库数量超过设定值，则随机出指定题目数
      </p>
      <ElSlider
        v-model="question_count"
        :min="30"
        :max="100"
        :disabled="rule_type !== 0"
        :format-tooltip="formatQuestionCount"
      />
    </ElFormItem>
    <ElFormItem label="正确率">
      <p class="form-tip">
        答题的正确率不低于该值才能通过
      </p>
      <ElSlider
        v-model="right_rate"
        :min="50"
        :max="100"
        :disabled="rule_type !== 0"
        :format-tooltip="formatRightRate"
      />
    </ElFormItem>
    <ElFormItem label="答题时长">
      <p class="form-tip">
        答题超过该时长之后就自动设为失败
      </p>
      <ElSlider
        v-model="qa_minutes"
        :min="30"
        :max="120"
        :disabled="rule_type !== 0"
        :format-tooltip="formatQAMinutes"
      />
    </ElFormItem>
    <ElFormItem label="加入方式">
      <ElRadioGroup v-model="rule_type">
        <ElRadio :label="0">
          需要答题或管理邀请
        </ElRadio>
        <ElRadio :label="1">
          只能管理邀请
        </ElRadio>
      </ElRadioGroup>
      <p class="form-tip">
        提交更改之后不会影响「正在答题」和「已经加入」的人
      </p>
    </ElFormItem>
    <ElFormItem>
      <ElButton
        :loading="submitting"
        type="success"
        round
        @click="submit"
      >
        保存更改
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import { Slider, Radio, RadioGroup } from 'element-ui'

export default {
  name: 'EditTagRuleForm',
  components: {
    ElSlider: Slider,
    ElRadio: Radio,
    ElRadioGroup: RadioGroup
  },
  props: {
    tag: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      question_count: 30,
      right_rate: 100,
      qa_minutes: 30,
      rule_type: 0,
      submitting: false
    }
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
    submit() {
      this.$toast.success('123')
    }
  }
}
</script>
