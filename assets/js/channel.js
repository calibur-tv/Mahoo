export default {
  methods: {
    socketConnect() {
      this.$connect()
    },
    socketDisconnect() {
      this.$disconnect()
    },
    send(data) {
      this.$socket.sendObj(data)
    }
  }
}
