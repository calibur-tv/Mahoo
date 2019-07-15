import Vue from 'vue'
import { MessageBox } from 'mint-ui'
import FastClick from 'fastclick'
import Share from '~/assets/js/share'

const isMobile = window.screen.width <= 768 || /^\/app/.test(window.location.pathname)

if (isMobile) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body)
    }, false)
  }

  Vue.use({
    install(Vue) {
      Vue.prototype.$alert = MessageBox.alert

      Vue.prototype.$confirm = MessageBox.confirm

      Vue.prototype.$prompt = MessageBox.prompt
    }
  })

  Share(window.location.href)
}
