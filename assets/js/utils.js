export default {
  convertTA(sex = -1, isMine = false) {
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
}
