<style lang="scss">
.message-menu {
  .room-item {
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      float: left;
      margin-right: 5px;
    }

    .content {
      height: 40px;
      overflow: hidden;

      .read-badge {
        float: right;
        background-color: $color-red;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
      }
    }
  }
}
</style>

<template>
  <ul class="message-menu">
    <li
      v-for="item in menu"
      :key="item.channel"
    >
      <nuxt-link
        :to="$alias.user($route.params.slug, `message/?mailto=${item.user.slug}`)"
        class="room-item clearfix"
      >
        <img class="avatar" :src="$resize(item.user.avatar, { width: 40 })" :alt="item.user.nickname">
        <div class="content">
          <p class="oneline" v-text="item.user.nickname" />
          <div class="read-badge">
            {{ item.count > 99 ? '99+' : item.count }}
          </div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MessageMenu',
  props: {},
  data() {
    return {
      menu: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getMessageMenu()
  },
  methods: {
    getMessageMenu() {
      this.$axios.$get('v1/message/menu')
        .then(data => {
          this.menu = data
        })
    }
  }
}
</script>
