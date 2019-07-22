<style lang="scss">
#tag-qa {
  margin-top: 30px;

  h1 {
    margin-left: 80px;
    margin-bottom: 30px;
  }

  .form-tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <div id="tag-qa">
    <ElRow>
      <ElCol :span="12" :offset="6">
        <h1>为《{{ tag.name }}》出题</h1>
        <ElForm
          ref="form"
          :disabled="submitting"
          label-position="right"
          label-width="80px"
        >
          <ElFormItem label="题目">
            <ElInput
              v-model="title"
              :rows="2"
              type="textarea"
              placeholder="请输入题目"
              resize="none"
              maxlength="50"
              show-word-limit
            />
          </ElFormItem>
          <ElFormItem>
            <p class="form-tip">
              提示：选项至少提供两个，至多四个
            </p>
          </ElFormItem>
          <ElFormItem
            v-for="(item, index) in answers"
            :key="item.key"
            :label="`选项${index + 1}`"
          >
            <ElInput
              v-model="item.value"
              placeholder="请输入答案（20字以内）"
              maxlength="20"
            />
          </ElFormItem>
          <ElFormItem>
            <p class="form-tip">
              提示：题目为单选题，正确选项不能为空
            </p>
          </ElFormItem>
          <ElFormItem label="答案">
            <ElRadioGroup v-model="rightOpt">
              <ElRadio
                v-for="(item, index) in answers"
                :key="item.key"
                :label="item.key"
              >
                答案{{ index + 1 }}
              </ElRadio>
            </ElRadioGroup>
          </ElFormItem>
          <ElFormItem>
            <ElButton
              :loading="submitting"
              type="success"
              round
              @click="submit"
            >
              提交
            </ElButton>
          </ElFormItem>
        </ElForm>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import { Radio, RadioGroup } from 'element-ui'
import { showTag } from '~/api/tagApi'
import { createQA } from '~/api/atfieldApi'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'TagQA',
  layout: 'web',
  components: {
    ElRadio: Radio,
    ElRadioGroup: RadioGroup
  },
  mixins: [mustSign],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tag: null,
      children: [],
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
      rightOpt: -1
    }
  },
  asyncData({ app, error, params }) {
    return showTag(app, params)
      .then(data => {
        return data
      })
      .catch(error)
  },
  methods: {
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
      createQA(this, {
        title: this.title,
        answers: this.answers.map(_ => _.value).filter(_ => _),
        right_index: this.rightOpt,
        tag_slug: this.slug
      })
        .then(() => {
          this.$toast.success('提交成功')
            .then(() => {
              window.location.reload()
            })
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.submitting = false
        })
    }
  }
}
</script>
