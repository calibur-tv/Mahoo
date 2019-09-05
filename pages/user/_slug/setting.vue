<style lang="scss">
#user-setting-layout {
}
</style>

<template>
  <div id="user-setting-layout">
    <ElRow class="column-wrap">
      <ElCol :span="6">
        <VSwitcher :headers="headers" :routable="true" align="vertical">
          <NLink v-for="(item, index) in headers" :key="index" :slot="`tab-${index}`" :to="item.route">
            <span v-text="item.name" />
          </NLink>
        </VSwitcher>
      </ElCol>
      <ElCol :span="18">
        <NuxtChild />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import mustSign from '~/mixins/mustSign'
import mustSelf from '~/mixins/mustSelf'

export default {
  name: 'UserSettingLayout',
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    headers() {
      return [
        {
          name: '基础设置',
          route: `/user/${this.slug}/setting/basic`
        },
        {
          name: '认证设置',
          route: `/user/${this.slug}/setting/oauth2`
        }
      ]
    }
  }
}
</script>
