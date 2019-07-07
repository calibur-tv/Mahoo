import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export const convertTA = (sex = -1, isMine = false) => {
  if (isMine) {
    return '我'
  } else if (sex === 0) {
    return 'TA'
  } else if (sex === 1) {
    return '他'
  } else if (sex === 2) {
    return '她'
  }
  return 'TA'
}

export const randomStr = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(3, 6)}`
}

export const timeAgo = time => {
  let date = time
  if (/^\d+$/.test(time) && time.toString().length === 10) {
    date = time * 1000
  } else {
    date = new Date(time).getTime()
  }
  const delta = Date.now() - new Date(date).getTime()
  if (delta > 365 * 86400000) {
    return dayjs(date).format('YYYY-MM-DD')
  }
  const today = new Date().setHours(0, 0, 0, 0)
  if (today < date) {
    return `今天${dayjs(date).format('HH:mm')}`
  }
  if (today - 86400000 < date) {
    return `昨天${dayjs(date).format('HH:mm')}`
  }
  if (today - 172800000 < date) {
    return `前天${dayjs(date).format('HH:mm')}`
  }
  return dayjs(date).format('MM-DD HH:mm')
}

export const checkInView = (dom, preload = 1) => {
  if (!dom) {
    return false
  }
  const rect = dom.getBoundingClientRect()
  return (
    rect.top < window.innerHeight + preload &&
    rect.bottom + preload > 0 &&
    (rect.left < window.innerWidth + preload && rect.right + preload > 0)
  )
}

export const on = (function () {
  if (typeof window === 'undefined') {
    return
  }
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler)
    }
  }
})()

export const off = (function () {
  if (typeof window === 'undefined') {
    return
  }
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler)
    }
  }
})()
