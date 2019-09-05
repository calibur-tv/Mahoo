<style lang="scss">
#user-social-layout {
  .tab-item {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
  }
}
</style>

<template>
  <div id="user-social-layout">
    <ElRow class="column-wrap">
      <ElCol :span="6">
        <VSwitcher :headers="headers" :routable="true" align="vertical">
          <NLink v-for="(item, index) in headers" :key="index" :slot="`tab-${index}`" :to="item.route" class="tab-item">
            <span v-text="item.name" />
            <span v-if="item.count" v-text="item.count" />
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
      const { user, slug } = this
      const TA = this.$utils.convertTA(user.sex, this.$store.getters.isMine(slug))
      return [
        {
          name: `${TA}的关注`,
          route: `/user/${slug}/social/following`,
          count: user.following_count
        },
        {
          name: `${TA}的粉丝`,
          route: `/user/${slug}/social/followers`,
          count: user.followers_count
        },
        {
          name: `${TA}的朋友`,
          route: `/user/${slug}/social/friends`,
          count: user.friends_count
        }
      ]
    }
  }
}
</script>
