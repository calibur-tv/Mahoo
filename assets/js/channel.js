export default {
  methods: {
    socketConnect() {
      this.$connect()
      this.$socket.onmessage = this._handleMessage
      window.send = this.send.bind(this)
    },
    socketDisconnect() {
      delete this.$options.sockets.onmessage
      this.$disconnect()
    },
    _handleMessage({ data }) {
      console.log(data)
    },
    send(data) {
      this.$socket.sendObj(data)
    }
  }
}
