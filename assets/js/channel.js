export default {
  data() {
    return {
      handler: {},
      events: {}
    }
  },
  methods: {
    socketConnect() {
      this.$connect()
    },
    socketDisconnect() {
      this.$disconnect()
    },
    send(data) {
      this.$socket && this.$socket.sendObj(data)
    },
    $when(eventName, callback) {
      if (this.events[eventName]) {
        callback(this.events[eventName])
      } else if (this.handler[eventName]) {
        this.handler[eventName].push(callback)
      } else {
        this.handler[eventName] = [callback]
      }
    },
    $fire(eventName, value = undefined) {
      if (this.events[eventName]) {
        return
      }
      this.events[eventName] = value
      if (this.handler[eventName]) {
        this.handler[eventName].forEach(callback => callback(value))
      }
    }
  }
}
