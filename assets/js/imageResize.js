export default (url, options = {}) => {
  if (!url) {
    return ''
  }

  if (/imageMogr2/.test(url)) {
    return url
  }

  const link = url.startsWith('http') ? url : `https://m1.calibur.tv/${url}`
  const canUseWebP = () => {
    if (typeof window === 'undefined') {
      return false
    }
    if (window.supportWebP !== undefined) {
      return window.supportWebP
    }

    const elem = document.createElement('canvas')

    if (elem.getContext && elem.getContext('2d')) {
      const support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
      window.supportWebP = support
      return support
    }

    return false
  }

  const format = options.webP === false ? '' : canUseWebP() ? '/format/webp' : ''
  const mode = options.mode === undefined ? 1 : options.mode

  if ((mode === 1 && !options.width) || (!options.width && !options.height)) {
    return `${link}?imageMogr2/auto-orient/strip${format}`
  }

  let width
  let height
  const getRadio = () => {
    if (typeof window === 'undefined') {
      return 2
    }
    if (window.computedRadio !== undefined) {
      return window.computedRadio
    }
    const result = window.devicePixelRatio
    window.computedRadio = result
    return result
  }
  const radio = getRadio()

  if (mode === 1) {
    width = `/w/${(options.width * radio) | 0}`
    height = options.height ? `/h/${(options.height * radio) | 0}` : `/h/${(options.width * radio) | 0}`
  } else {
    width = options.width ? `/w/${(options.width * radio) | 0}` : ''
    height = options.height ? `/h/${(options.height * radio) | 0}` : ''
  }

  return `${link}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
}
