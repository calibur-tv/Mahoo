<style lang="scss">
#edit-bangumi {
  padding: 15px;
}
</style>

<template>
  <div v-if="bangumi" id="edit-bangumi">
    <el-form ref="form" label-position="top" label-width="80px">
      <ElFormItem label="名称">
        <ElInput v-model="bangumi.name" />
      </ElFormItem>
      <ElFormItem label="别名">
        <ElSelect v-model="bangumi.alias" multiple filterable allow-create default-first-option placeholder="请输入番剧别名" popper-class="hidden-select-options" class="hidden-select-input" />
      </ElFormItem>
      <ElFormItem label="简介">
        <ElInput v-model="bangumi.intro" type="textarea" rows="4" resize="vertical" />
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="handleSubmit">提交</ElButton>
      </ElFormItem>
    </el-form>
  </div>
</template>

<script>
import useSignMixin from '~/mixins/useSign'
import mustSign from '~/mixins/mustSign'
import { Select } from 'element-ui'

export default {
  name: 'EditBangumi',
  components: {
    ElSelect: Select
  },
  mixins: [useSignMixin, mustSign],
  props: {},
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/bangumi/show', {
        params: { slug }
      })
      .then(bangumi => {
        return { bangumi }
      })
      .catch(error)
  },
  data() {
    return {
      bangumi: null,
      loading: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/bangumi/update/profile', this.bangumi)
        .then(() => {
          this.$toast.success('修改成功')
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
