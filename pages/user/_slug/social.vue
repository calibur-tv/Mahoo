<style lang="scss">
#user-social-layout {}
</style>

<template>
  <div id="user-social-layout">
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
export default {
  name: 'UserSocialLayout',
  props: {
    user: {
      type: Object,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    headers() {
      const TA = this.$utils.convertTA(this.user.sex, this.$store.getters.isMine(this.slug))
      return [
        {
          name: `${TA}的关注`,
          route: `/user/${this.slug}/social/following`
        },
        {
          name: `${TA}的粉丝`,
          route: `/user/${this.slug}/social/followers`
        },
        {
          name: `${TA}的朋友`,
          route: `/user/${this.slug}/social/friends`
        }
      ]
    }
  }
}
</script>
