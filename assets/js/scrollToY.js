/**
 * [ scrollToY 指定的 DOM 过度滚动到指定的 Y 轴 ]
 * @param targetY
 * @param timer
 * @param dom
 * @param ease
 */
export default (targetY, timer, dom, ease) => {
  let currentTime = 0
  const element = dom || window
  const scrollY = dom ? dom.scrollTop : window.scrollY
  const scrollTargetY = targetY || 0
  const speed = timer || 2000
  const easing = ease || 'easeOutSine'
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))
  const easingEquations = {
    easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2))
    },
    easeInOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1)
    },
    easeInOutQuint(pos) {
      // eslint-disable-next-line
      if ((pos /= 0.5) < 1) {
        return 0.5 * pos ** 5
      }
      return 0.5 * ((pos - 2) ** 5 + 2)
    }
  }
  if (!element.requestAnimFrame) {
    element.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      )
    })().bind(window)
  }
  function tick() {
    currentTime += 1 / 60
    const p = currentTime / time
    const t = easingEquations[easing](p)
    if (p < 1) {
      element.requestAnimFrame(tick)
      element.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      element.scrollTo(0, scrollTargetY)
    }
  }
  tick()
}
