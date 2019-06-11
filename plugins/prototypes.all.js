import Vue from 'vue'
import alias from '~/assets/js/alias'
import * as utils from '~/assets/js/utils'
import imageResize from '~/assets/js/imageResize'

Vue.use({
  install(Vue) {
    Vue.prototype.$alias = alias

    Vue.prototype.$utils = utils

    Vue.prototype.$resize = imageResize
  }
})
