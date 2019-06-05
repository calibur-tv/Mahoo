import { Message } from 'element-ui'
import { Toast, Indicator } from 'mint-ui'

const showTime = 1500
const timeout = (duration = showTime) =>
  new Promise(resolve => {
    setTimeout(resolve, duration)
  })

export default class {
  constructor(isMobile) {
    this.isMobile = isMobile
  }

  error(tip) {
    this.stop()
    let text = ''
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip
      time = showTime
    }
    if (this.isMobile) {
      Toast({
        duration: time,
        message: text || '操作失败',
        iconClass: 'iconfont icon-cuowuhttp'
      })
    } else {
      Message.error(text)
    }
    return timeout(time)
  }

  success(tip) {
    this.stop()
    let text = '操作成功'
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip
      time = showTime
    }
    if (this.isMobile) {
      Toast({
        duration: time,
        message: text,
        iconClass: 'iconfont icon-caozuochenggong'
      })
    } else {
      Message.success(text)
    }
    return timeout(time)
  }

  info(tip) {
    this.stop()
    let text = '操作成功'
    let time
    if (typeof tip === 'object') {
      text = tip.tip
      time = tip.time || showTime
    } else {
      text = tip
      time = showTime
    }
    if (this.isMobile) {
      Toast({
        duration: time,
        message: text
      })
    } else {
      Message.info(text)
    }
    return timeout(time)
  }

  loading(tip) {
    this.stop()
    let message = ''
    let time
    if (typeof tip === 'object') {
      message = tip.tip
      time = tip.time
    } else {
      message = tip
    }
    Indicator.open({
      text: message || '加载中…',
      spinnerType: 'triple-bounce'
    })
    if (time) {
      return timeout(time).then(() => this.stop())
    }
  }

  stop() {
    Indicator.close()
  }
}
