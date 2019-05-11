import Vue from 'vue'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/toast'
import { MessageBox } from 'element-ui'

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue()

    Vue.prototype.$toast = Toast

    Vue.prototype.$alert = MessageBox.alert

    Vue.prototype.$confirm = MessageBox.confirm

    Vue.prototype.$prompt = MessageBox.prompt
  }
})
