import Vue from 'vue'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/toast'

const isMobile = window.screen.width <= 768 || /^\/app/.test(window.location.pathname)

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue()

    Vue.prototype.$toast = new Toast(isMobile)
  }
})
