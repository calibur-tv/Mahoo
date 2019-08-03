import Vue from 'vue'
import { MessageBox } from 'element-ui'

const isMobile = window.screen.width <= 768

if (!isMobile) {
  Vue.use({
    install(Vue) {
      Vue.prototype.$alert = MessageBox.alert

      Vue.prototype.$confirm = MessageBox.confirm

      Vue.prototype.$prompt = MessageBox.prompt
    }
  })
}
