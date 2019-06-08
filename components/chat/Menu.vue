<style lang="scss">
.message-menu {
  li {
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #f4f4f4;

      .close {
        left: 0;
      }
    }
  }

  .room-item {
    display: block;
    padding: 10px 10px 10px 24px;
    border-bottom: 1px solid #fff;

    &.nuxt-link-exact-active {
      background-color: #f4f4f4;
    }

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      float: left;
      margin-right: 8px;
    }

    .content {
      height: 40px;
      overflow: hidden;

      .nickname {
        color: #333;
        font-size: 14px;
        line-height: 1;
      }

      .footer {
        color: #999;
        padding: 8px 0;

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

  .close {
    position: absolute;
    left: -24px;
    top: 0;
    width: 24px;
    height: 100%;
    line-height: 62px;
    text-align: center;
    transition: left .3s;
    color: #999;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
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
        :to="$alias.user($route.params.slug, `message/?mailto=${item.from.slug}`)"
        class="room-item clearfix"
      >
        <img class="avatar" :src="$resize(item.from.avatar, { width: 42 })" :alt="item.from.nickname">
        <div class="content">
          <p class="nickname oneline" v-text="item.from.nickname" />
          <div class="footer">
            <div v-if="item.count" class="read-badge" v-text="item.count" />
          </div>
        </div>
      </nuxt-link>
      <div class="close">
        &times;
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MessageMenu',
  data() {
    return {
      watcher: null,
      menu: []
    }
  },
  mounted() {
    this.watcher = this.$watch('$store.state.mailbox.unread_message_total', (newVal, oldVal) => {
      if (newVal > oldVal) {
        this.getMessageMenu()
      }
    })
    this.getMessageMenu()
  },
  beforeDestroy() {
    this.watcher && this.watcher()
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
