<style lang="scss">
#relation-bangumi {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>

<template>
  <div v-if="bangumi" id="relation-bangumi">
    <p>
      <span>作为父节点：</span>
      <ElSwitch v-model="bangumi.is_parent" @change="handleParentChange" />
    </p>
    <p>
      <span>设置父节点：</span>
      <ElInput v-model="bangumi.parent_slug" />
      <button @click="handleSetParent">确认</button>
    </p>
  </div>
</template>

<script>
import { Switch } from 'element-ui'

export default {
  name: 'EditBangumi',
  layout: 'app',
  components: {
    ElSwitch: Switch
  },
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
      bangumi: null
    }
  },
  methods: {
    handleParentChange(result) {
      this.$axios.$post('v1/bangumi/update/set_parent', {
        bangumi_slug: this.bangumi.slug,
        result
      })
    },
    handleSetParent() {
      this.$axios
        .$post('v1/bangumi/update/set_parent', {
          child_slug: this.bangumi.slug,
          parent_slug: this.bangumi.parent_slug
        })
        .then(() => {
          this.$toast.info('设置成功')
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    }
  },
  head: {
    title: '番剧关系'
  }
}
</script>
