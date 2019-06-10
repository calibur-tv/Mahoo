<style lang="scss">
#user-message {
  .room-adjust {
    padding-left: 0;
    margin: -15px -20px;
    height: 684px;

    .need-pick {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 14px;
        margin-top: 10px;
        color: $color-text-normal;
      }
    }
  }
}
</style>

<template>
  <div id="user-message">
    <el-row class="column-wrap">
      <el-col :span="6">
        <message-menu :slug="slug" />
        &nbsp;
      </el-col>
      <el-col :span="18">
        <div class="room-adjust">
          <message-room
            v-if="mailto"
            :mailto="mailto"
            :slug="slug"
          />
          <div v-else class="need-pick">
            <img src="~assets/img/error/no-comment.png">
            <p>未选择聊天</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MessageMenu from '~/components/chat/Menu'
import MessageRoom from '~/components/chat/Room'
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserMessage',
  components: {
    MessageMenu,
    MessageRoom
  },
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    mailto() {
      return this.$route.query.mailto
    }
  }
}
</script>
