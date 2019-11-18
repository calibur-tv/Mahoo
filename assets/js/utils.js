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
  return `${Date.now()}-${Math.random()
    .toString(36)
    .substring(3, 6)}`
}

export const adjustDate = time => {
  if (/^\d+$/.test(time) && time.toString().length === 10) {
    return new Date(time * 1000)
  }
  let result = new Date(time)
  if (result.toString() === 'Invalid Date') {
    result = new Date(time.replace(/-/g, '/'))
  }
  return result
}

export const shortenNumber = num => {
  return num > 1000 ? `${Math.floor((num / 1000) * 10) / 10}k` : num
}

export const timeAgo = time => {
  const date = adjustDate(time)
  const delta = Date.now() - date.getTime()
  const format = [date.getFullYear(), `0${date.getMonth() + 1}`.substr(-2), `0${date.getDate()}`.substr(-2), `0${date.getHours()}`.substr(-2), `0${date.getMinutes()}`.substr(-2)]
  if (delta > 365 * 86400000 || delta <= 0) {
    return `${format[0]}-${format[1]}-${format[2]}`
  }
  const today = new Date().setHours(0, 0, 0, 0)
  if (today < date) {
    return `今天${format[3]}:${format[4]}`
  }
  if (today - 86400000 < date) {
    return `昨天${format[3]}:${format[4]}`
  }
  if (today - 172800000 < date) {
    return `前天${format[3]}:${format[4]}`
  }
  return `${format[1]}-${format[2]} ${format[3]}:${format[4]}`
}

export const checkInView = (dom, preload = 1) => {
  if (!dom) {
    return false
  }
  const rect = dom.getBoundingClientRect()
  return rect.top < window.innerHeight + preload && rect.bottom + preload > 0 && rect.left < window.innerWidth + preload && rect.right + preload > 0
}

export const on = (function() {
  if (typeof window === 'undefined') {
    return
  }
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
  return function(element, event, handler) {
    if (element && event && handler) {
      element.attachEvent('on' + event, handler)
    }
  }
})()

export const off = (function() {
  if (typeof window === 'undefined') {
    return
  }
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  }
  return function(element, event, handler) {
    if (element && event) {
      element.detachEvent('on' + event, handler)
    }
  }
})()
