import Vue from 'vue'
import Cookies from 'js-cookie'
import Captcha from 'geetest-captcha'
import { getCaptcha } from '~/api/imageApi'
import Toast from '~/assets/js/toast'
import channel from '~/assets/js/channel'

const isMobile = window.screen.width <= 768 || /^\/app/.test(window.location.pathname)

export default ({ $axios }) => {
  Vue.use({
    install(Vue) {
      Vue.prototype.$cookie = Cookies

      Vue.prototype.$channel = new Vue(channel)

      Vue.prototype.$toast = new Toast(isMobile)

      Vue.prototype.$captcha = new Captcha(() => getCaptcha({ $axios }))
    }
  })
}
