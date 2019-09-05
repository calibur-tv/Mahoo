<template>
  <div v-if="state" class="join-zone-wrap">
    <ElButton :loading="loading" type="primary" size="mini" round plain @click="handleClick">
      {{ state.is_marked ? '已加入' : '加入' }}
    </ElButton>
    &nbsp;
    <NLink :to="$alias.tag(slug, 'qa')">
      <ElButton type="success" size="mini" round plain>
        出题
      </ElButton>
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'JoinZoneBtn',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('tag', this.slug)
    }
  },
  methods: {
    handleClick() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.state.is_marked) {
        this.$toast.info('暂不支持退出')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/atfield/begin', {
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
          } else {
            this.getQuestions()
          }
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    getQuestions() {
      this.$router.push({
        path: this.$alias.tag(this.slug, 'atfield')
      })
    }
  }
}
</script>
