<style lang="scss">
#user-layout {
  background-color: #f6f6f6;

  .container {
    background-color: #fff;
  }

  #user-panel {
    margin-bottom: 20px;

    .banner {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 200px;
    }
  }
}
</style>

<template>
  <div id="user-layout">
    <div id="user-panel" class="container">
      <div class="banner" :style="{ backgroundImage: `url(${$resize(this.banner, { width: 1140 })})`}" />
    </div>
    <div class="container">
      <v-switcher
        :headers="headers"
        :routable="true"
        align="start"
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
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '~/api/userApi'

export default {
  layout: 'web',
  components: {},
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    isMine() {
      if (!this.$store.state.isAuth) {
        return false
      }
      return this.self.slug === this.slug
    },
    self() {
      return this.$store.state.user
    },
    avatar() {
      return this.isMine ? this.self.avatar : this.user.avatar
    },
    banner() {
      return this.isMine ? this.self.banner : this.user.banner
    },
    headers() {
      const result = [
        {
          name: '动态',
          route: `/user/${this.slug}`
        }
      ]
      if (this.isMine) {
        result.push({
          name: '设置',
          route: `/user/${this.slug}/setting`
        })
      }
      return result
    }
  },
  watch: {},
  asyncData({ app, error, params }) {
    return getUserInfo(app, {
      slug: params.slug
    })
      .then(user => {
        return { user }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
