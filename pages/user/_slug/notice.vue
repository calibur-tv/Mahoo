<style lang="scss">
#user-notice-layout {}
</style>

<template>
  <div id="user-notice-layout">
    <el-row class="column-wrap">
      <el-col :span="6">
        <v-switcher
          :headers="headers"
          :routable="true"
          :item-height="44"
          align="vertical"
        >
          <nuxt-link
            v-for="(item, index) in headers"
            :key="index"
            :slot="`tab-${index}`"
            :to="item.route"
          >
            <span v-text="item.name" />
          </nuxt-link>
        </v-switcher>
      </el-col>
      <el-col :span="18">
        <nuxt-child />
      </el-col>
    </el-row>
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
          name: '社区消息',
          route: `/user/${this.slug}/notice/social`
        },
        {
          name: '系统通知',
          route: `/user/${this.slug}/notice/system`
        }
      ]
    }
  }
}
</script>
