export default {
  methods: {
    socketConnect() {
      this.$connect()
      window.send = this.send.bind(this)
    },
    socketDisconnect() {
      this.$disconnect()
    },
    send(data) {
      this.$socket.sendObj(data)
    }
  }
}
