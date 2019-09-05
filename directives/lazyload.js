import { throttle } from 'throttle-debounce'
import { checkInView } from '~/assets/js/utils'

export default {
  install(Vue, config) {
    if (Vue.prototype.$isServer) {
      return
    }
    const list = []
    const opt = config || {
      preload: 1
    }
    const isMobile = window.screen.width <= 768

    Vue.directive('lazyload', {
      bind(el, binding) {
        if (binding.arg && binding.arg === 'pc' && isMobile) {
          return
        }
        list.push({ el, handler: binding.value })
      },
      inserted() {
        tProcess()
      },
      update() {
        tProcess()
      },
      unbind(el) {
        removeList(el)
      }
    })

    const removeList = el => {
      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i] && list[i].el === el) {
          list.splice(i, 1)
          break
        }
      }
    }

    const loadHandler = obj => {
      removeList(obj)

      obj.handler()
    }

    const running = () => list.filter(_ => _ && checkInView(_.el, opt.preload)).map(loadHandler)

    const tProcess = throttle(200, running)

    ;['scroll', 'resize', 'load'].forEach(evt => {
      window.addEventListener(evt, () => {
        tProcess()
      })
    })
  }
}
