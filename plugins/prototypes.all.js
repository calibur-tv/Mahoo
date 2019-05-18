import Vue from 'vue'
import alias from '~/assets/js/alias'
import imageResize from '~/assets/js/imageResize'

Vue.use({
  install(Vue) {
    Vue.prototype.$alias = alias

    Vue.prototype.$resize = imageResize
  }
})
