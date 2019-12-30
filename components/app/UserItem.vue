<style lang="scss">
.user-item {
  font-size: 0;
  margin-left: 12px;
  padding: 9px 0;
  height: 58px;
  line-height: 40px;
  border-bottom: 1pt solid #e7e7e7;

  .avatar {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    float: left;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .content {
    overflow: hidden;
    height: 40px;

    .nickname {
      line-height: 20px;
      height: 20px;
      font-size: 14px;
      color: $color-main;
    }

    .intro {
      color: #999;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>

<template>
  <li class="user-item" @click="goUser">
    <div class="avatar">
      <img :src="$resize(user.avatar, { width: 80 })" />
    </div>
    <div class="content">
      <p class="nickname oneline" v-html="user.nickname" />
      <p class="intro oneline" v-text="score || user.signature" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true
    },
    score: {
      type: String,
      default: ''
    }
  },
  methods: {
    goUser() {
      const isQQ = /qq/.test(window.navigator.userAgent.toLowerCase())
      const self = isQQ ? window.qq : window.wx
      self.miniProgram.navigateTo({
        url: `/pages/user/show/index?slug=${this.user.slug}`
      })
    }
  }
}
</script>
