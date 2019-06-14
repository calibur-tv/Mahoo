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

    Vue.directive('v-lazy', {
      bind(el, binding) {
        const src = el.getAttribute('src')
        // 用于图片懒加载
        if (!binding.value && src) {
          // src设置为空 先阻止浏览器发出请求
          el.setAttribute('src', '')

          addList({ type: 'img', el, src })
        }

        if (typeof binding.value === 'function') {
          addList({ type: 'fun', el, handler: binding.value })
        }
      },
      update(el, binding) {
        tProcess()
      },
      inserted() {
        tProcess()
      },
      unbind(el, binding) {
        removeList({ el })
      }
    })

    function addList(obj) {
      list.push(obj)
    }

    function removeList(obj) {
      for (let i = 0, len = list.length; i < len; i++) {
        if (list[i] && list[i].el === obj.el) {
          list.splice(i, 1)
        }
      }
    }

    // 集中处理
    function loadHandler(obj) {
      removeList(obj)

      switch (obj.type) {
        case 'img':
          obj.el.setAttribute('src', obj.src)
          break
        case 'fun':
          obj.handler()
          break
        default:break
      }

      tProcess()
    }

    // 运行并判断是否达到触发条件
    function running() {
      list.filter(_ => _ && checkInView(_.el, opt.preload)).map(loadHandler)
    }

    const tProcess = throttle(200, running);
    ['scroll', 'resize', 'load'].forEach(evt => {
      window.addEventListener(evt, () => {
        tProcess()
      })
    })
  }
}
