<style lang="scss">
#user-draft {
  li {
    border-top: 1px solid #f0f2f7;
    padding-top: 20px;
    margin-top: 20px;

    &:first-child {
      padding-top: 0;
      margin-top: 0;
      border-top-width: 0;
    }
  }
}
</style>

<template>
  <div id="user-draft">
    <ElAlert :title="timeout ? `该页面文章链接 ${timeout} 秒后过期，过期后请刷新页面` : '该页面已过期，请刷新页面获取新的链接'" :type="timeout ? 'success' : 'error'" effect="dark" />
    <br />
    <FlowLoader
      ref="loader"
      func="getUserDrafts"
      type="page"
      :query="{
        count: 10,
        $axios: $axios
      }"
      :callback="handleTimeout"
    >
      <ul slot-scope="{ flow, extra }">
        <PinArticle v-for="(item, index) in flow" :key="item.slug" :item="item" :show-user="false" :secret-link="extra[index]" />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'
import PinArticle from '~/components/flow/PinArticle'
import { Alert } from 'element-ui'

export default {
  name: 'UserDraft',
  components: {
    ElAlert: Alert,
    PinArticle
  },
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      timeout: 300,
      timer: 0
    }
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer)
  },
  mounted() {
    this.$refs.loader && this.$refs.loader.refresh()
  },
  methods: {
    handleTimeout() {
      this.timer && clearInterval(this.timer)
      this.timeout = 300
      this.timer = setInterval(() => {
        if (this.timeout) {
          this.timeout--
        }
      }, 1000)
    }
  }
}
</script>
