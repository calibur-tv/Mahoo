export default class Copyright {
  /**
   * [constructor 初始化 Copyright ]
   *
   * @param {number} minLength    [ 全局的黏贴触发 rewrite 的最小长度 ]
   * @param {string} shareLink    [ 全局的默认链接 ]
   *
   * @return {null}
   */
  constructor({ minLength, shareLink } = {}) {
    this.config = {
      org: 'calibur',
      appendStr: '文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。',
      minLength: minLength || 140,
      shareLink: shareLink || window.location.href.split('?')[0]
    }
    this.prefix = {
      org: '来源',
      link: '链接',
      author: '作者'
    }
  }

  /**
   * [bind Copyright 的对外调用 API，用于监听指定 DOM 的文本复制事件 ]
   *
   * @param {Object} ele              [ 要绑定事件的 DOM 对象 ]
   * @param {number} minLength        [ 局部的黏贴触发 rewrite 的最小长度，可复写全局 minLength ]
   * @param {string} authorNickname   [ 作者的昵称 ]
   * @param {string} shareLink        [ 文章的链接 ]
   * @param {string} appendStr        [ 要附加的文本，可复写全局 text ]
   *
   * @return {null}
   */
  bind(ele, { minLength, authorNickname, shareLink, appendStr } = {}) {
    ele.addEventListener('copy', evt => {
      const lengthLimit = minLength || this.config.minLength
      const location = shareLink || this.config.shareLink
      const str = appendStr || this.config.appendStr

      const range = window.getSelection().getRangeAt(0)
      const htmlParser = this.getHTMLParser('')
      if (htmlParser) {
        htmlParser.appendChild(range.cloneContents())
      }

      const outputText = range.toString().trim()
      const outputHtml = htmlParser ? htmlParser.innerHTML : this.getRangeHtml(range)
      const div = document.createElement('div')
      div.innerHTML = outputHtml

      if (outputText.length >= lengthLimit) {
        const formatHTML = this.getCopyHtml(outputHtml, location, authorNickname, str)
        const formatText = this.getCopyText(outputText, location, authorNickname, str)

        if (typeof evt.clipboardData === 'undefined') {
          this.hack(formatHTML, range) // IE
        }

        try {
          evt.clipboardData.setData('text/plain', formatText)
          evt.clipboardData.setData('text/html', formatHTML)
          evt.preventDefault()
        } catch (e) {
          this.hack(formatHTML, range) // Edge
        }
      }
    })
  }

  /**
   * [abort 阻止 copy 事件]
   * @param ele
   */
  abort(ele) {
    ele.addEventListener('copy', evt => {
      evt.stopPropagation()
      evt.preventDefault()
      evt.cancelBubble = false
      return false
    })
  }

  /**
   * [hack 当 clipboardData 事件无法正常工作时，使用 hack 方法添加 copyright，缺点是用户在按下 [ctrl + c] 之后会丢失光标]
   *
   * 增加range参数以修复光标丢失的问题
   *
   * @param text
   * @param range
   *
   * @return {null}
   */
  hack(text, range) {
    const dom = document.createElement('div')
    dom.innerHTML = text
    dom.style.position = 'fixed'
    dom.style.left = '-9999px'
    document.body.appendChild(dom)
    window.getSelection().selectAllChildren(dom)
    setTimeout(() => {
      try {
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      } catch (e) {}
      document.body.removeChild(dom)
    }, 0)
  }

  /**
   * [getCopyHtml 格式化要放进黏贴板的 HTML ]
   *
   * @param html
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {string}
   */
  getCopyHtml(html, shareLink, nickname, appendStr) {
    const o = this.getExtraCopyright(shareLink, nickname, appendStr).join('<br>')
    // 用div包裹保证原有样式
    return `<div><div>${html}</div>${o}</div>`
  }

  /**
   * [getCopyHtml 格式化要放进黏贴板的 Text ]
   *
   * @param text
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {*}
   */
  getCopyText(text, shareLink, nickname, appendStr) {
    const o = this.getExtraCopyright(shareLink, nickname, appendStr).join('\n')
    return text + o
  }

  /**
   * [getExtraCopyright 获取待拼接的字符串数组]
   *
   * @param shareLink
   * @param nickname
   * @param appendStr
   * @returns {*}
   */
  getExtraCopyright(shareLink, nickname, appendStr) {
    if (nickname) {
      return ['', '', `${this.prefix.author}：${nickname}`, `${this.prefix.link}：${shareLink}`, `${this.prefix.org}：${this.config.org}`, appendStr]
    }
    return ['', '', `${this.prefix.link}：${shareLink}`, `${this.prefix.org}：${this.config.org}`, appendStr]
  }

  /**
   * [getRangeHtml 获取 copy 的文本的 HTML 格式，因为 window.getSelection().toString() 的 Bug，导致复制到笔记本中的 \n 失效]
   *
   * @param text
   * @returns {string}
   */
  getRangeHtml(text) {
    const div = document.createElement('div')
    div.appendChild(text.cloneContents())
    return div.outerHTML
  }

  getHTMLParser(e) {
    try {
      return new window.DOMParser().parseFromString(e, 'text/html').body
    } catch (n) {
      const t = document.implementation.createHTMLDocument('')
      return t.body.innerHTML = e, t.body // eslint-disable-line
    }
  }
}
