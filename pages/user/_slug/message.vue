<style lang="scss">
#user-message {}
</style>

<template>
  <div id="user-message">
    <el-row :gutter="20">
      <el-col :span="6">
        &nbsp;
        <message-menu />
      </el-col>
      <el-col :span="18">
        <message-room
          v-if="mailto"
          :mailto="mailto"
        />
        <template v-else>
          ... chat
        </template>
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
  computed: {
    mailto() {
      return this.$route.query.mailto
    }
  },
  created() {},
  methods: {}
}
</script>
