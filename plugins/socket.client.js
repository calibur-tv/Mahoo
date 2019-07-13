import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import parseToken from '~/assets/js/parseToken'

export default ({ store }) => {
  Vue.use(VueNativeSock, `${process.env.SOCKET_HOST}?token=${parseToken()}`, {
    connectManually: true,
    reconnection: false,
    reconnectionAttempts: 12,
    reconnectionDelay: 5000,
    store,
    format: 'json'
  })
}
