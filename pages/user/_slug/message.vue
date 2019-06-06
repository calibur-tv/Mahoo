<style lang="scss">
#user-message {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px 20px;
}
</style>

<template>
  <div id="user-message" class="container">
    <el-row>
      <el-col :span="6">
        <message-menu />
      </el-col>
      <el-col :span="12">
        <message-room
          v-if="mailto"
          :mailto="mailto"
        />
        <template v-else>
          ... chat
        </template>
      </el-col>
      <el-col :span="6">
&nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MessageMenu from '~/components/chat/Menu'
import MessageRoom from '~/components/chat/Room'

export default {
  name: 'UserMessage',
  components: {
    MessageMenu,
    MessageRoom
  },
  computed: {
    mailto() {
      return this.$route.query.mailto
    }
  },
  created() {},
  methods: {}
}
</script>
