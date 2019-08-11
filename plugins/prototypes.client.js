import Vue from 'vue'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/toast'
import channel from '~/assets/js/channel'
import * as Cache from '~/assets/js/cache'

const isMobile = window.screen.width <= 768

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$toast = new Toast(isMobile)

    Vue.prototype.$cache = Cache
  }
})
