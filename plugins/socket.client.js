import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import parseToken from '~/assets/js/parseToken'

export default ({ store }) => {
  Vue.use(VueNativeSock, `${process.env.SOCKET_HOST}?token=${parseToken()}`, {
    connectManually: true,
    reconnection: true,
    store,
    format: 'json'
  })
}
