export default {
  beforeMount() {
    this.$channel.$when('user-signed', () => {
      const HEART_BEAT_TTL = 1000
      const detectSocketIsConnected = () => Date.now() - this.$cache.get('socket-connect-heartbeat', 0) <= HEART_BEAT_TTL
      const connectSocketIfNotExist = () => {
        /**
         * 连接 websocket，则连接并轮训更新状态
         */
        const connected = () => {
          this.$channel.socketConnect()
          const timer = setInterval(() => {
            /**
             * 1. 当 socket 连接正常的时候，会持续维持状态
             * 2. 当 socket 服务不可用的时候，会 clear 状态维持
             * 3. 但无法重连 socket，因为会造成前端死循环，并无限的向后端发请求
             */
            if (this.$store.state.socket.isConnected) {
              this.$cache.set('socket-connect-heartbeat', Date.now())
            } else {
              clearInterval(timer)
            }
          }, HEART_BEAT_TTL)
          window.addEventListener('beforeunload', () => {
            this.$channel.socketDisconnect()
          })
        }
        /**
         * 1. 若心跳还在持续，就检测并从 localStorage 里同步最新的数据
         * 2. 若心跳检测发现连接已经断开，并且当前页面是受访问的页面，则在当前页面进行重连
         */
        const heartbeat = () => {
          const timer = setInterval(() => {
            if (detectSocketIsConnected()) {
              if (Date.now() - this.$cache.get('socket-on-message-time', 0) <= HEART_BEAT_TTL) {
                this.$store.commit('SOCKET_ONMESSAGE', this.$cache.get('socket-on-message-data'))
              }
            } else if (document.visibilityState === 'visible') {
              connected()
              clearInterval(timer)
            }
          }, HEART_BEAT_TTL * 2)
        }
        /**
         * 1. 检测 websocket 是否已经连接
         * 2. 如果已连接则修改 store 状态，并进行心跳检测，如果未连接则创建连接
         */
        if (detectSocketIsConnected() || document.visibilityState !== 'visible') {
          this.$store.commit('SOCKET_AUTO_CONNECT')
          heartbeat()
        } else {
          connected()
        }
      }
      // 用户登录后连接 websocket
      setTimeout(connectSocketIfNotExist, HEART_BEAT_TTL * 2)
    })
  },
  beforeDestroy() {
    if (this.$store.state.socket.isConnected) {
      this.$channel.socketDisconnect()
    }
  }
}
