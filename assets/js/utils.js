import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

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

export const time = dayjs()
