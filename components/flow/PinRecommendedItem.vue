<style lang="scss">
.pin-rec-item {
  padding: 0 10px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .user-avatar {
      margin-right: 5px;
    }
  }

  .content {
    .text {
      @include multi-line(20px, 3);
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

<template>
  <div class="pin-rec-item">
    <div class="header">
      <UserAvatar :user="item.author" :size="30" />
      <UserNickname :user="item.author" />
    </div>
    <div class="content">
      <div class="text" v-html="item.intro" />
    </div>
    <div class="footer">
      <div>
        <i class="iconfont ic-message_fill" />
        <span v-text="item.comment_count" />
      </div>
      <div>
        <i class="iconfont ic-good_fill" />
        <span v-text="item.like_count" />
      </div>
      <div>
        <i class="iconfont ic-mark_fill" />
        <span v-text="item.mark_count" />
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'PinRecommendedItem',
  components: {
    UserAvatar,
    UserNickname
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
