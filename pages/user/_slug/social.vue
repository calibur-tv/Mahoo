<style lang="scss">
#user-social-layout {}
</style>

<template>
  <div id="user-social-layout">
    <ElRow class="column-wrap">
      <ElCol :span="6">
        <VSwitcher
          :headers="headers"
          :routable="true"
          :header-height="44"
          align="vertical"
        >
          <NLink
            v-for="(item, index) in headers"
            :key="index"
            :slot="`tab-${index}`"
            :to="item.route"
          >
            <span v-text="item.name" />
          </NLink>
        </VSwitcher>
      </ElCol>
      <ElCol :span="18">
        <NuxtChild :slug="slug" />
      </ElCol>
    </ElRow>
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
