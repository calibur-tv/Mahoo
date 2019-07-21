import './index.scss'

export default class Vote {
  constructor({ data, api }) {
    this.data = data
    this.api = api
    this.i = 0
  }

  static get toolbox() {
    return {
      title: '投票',
      icon: '<svg width="16px" height="16px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
        '    <g>\n' +
        '        <path d="M41.4155893,104.612406 L4.34624771,94.6931616 C13.1781391,61.9709983 34.6149911,34.0810288 63.963975,17.12876 L83.1377724,50.312212 C62.5992931,62.1854523 47.5983285,81.7087666 41.4155893,104.612406 Z M104.765816,41.3644398 L94.7954412,4.29509827 C105.588572,1.42972965 116.709637,-0.014117987 127.876633,6.268195e-05 L127.876633,38.3477624 C120.074942,38.3489813 112.306418,39.3630143 104.765816,41.3644398 Z M151.243101,41.3644398 L161.162345,4.34622839 C193.864446,13.158612 221.749859,34.5551981 238.726747,63.8616954 L205.492165,83.0354928 C193.620691,62.5270309 174.118979,47.5469224 151.243101,41.3644398 Z M6.98577306e-05,127.825483 L38.3477817,127.825483 C38.3379176,135.627892 39.3521378,143.39785 41.3644592,150.936301 L4.29511759,160.855545 C1.4289919,150.079973 -0.0149068619,138.975704 6.98577306e-05,127.825483 Z M17.1287793,191.738141 L50.5167518,172.564344 C54.4399333,179.319101 59.2173462,185.540049 64.7309269,191.07345 L37.5808298,218.172417 C29.6359374,210.294072 22.7598244,201.406696 17.1287793,191.738141 Z M63.963975,238.522207 L83.1377724,205.338755 C96.7208334,213.190976 112.136121,217.318181 127.825503,217.303205 L127.825503,255.650857 C105.400386,255.672229 83.3684176,249.762934 63.963975,238.522207 Z M205.441035,172.666604 L238.624487,191.891532 C221.625506,221.189321 193.721285,242.567851 161.008955,251.355869 L151.08971,214.286527 C173.99481,208.14046 193.535532,193.17701 205.441035,172.666604 Z M251.458148,162.184928 L214.593327,152.061163 C218.680428,136.855633 218.680428,120.840539 214.593327,105.635009 L251.764929,95.7157641 C257.513853,117.513081 257.408029,140.441606 251.458148,162.184928 Z" fill-rule="nonzero"></path>\n' +
        '    </g>\n' +
        '</svg>'
    }
  }

  render() {
    const votes = document.querySelectorAll('.vote-wrap')
    if (votes.length > 0) {
      this.api.notifier.show({
        message: '一篇文章只能包含一个投票',
        style: 'error'
      })
      return
    }
    const wrapper = document.createElement('div')
    wrapper.classList.add('vote-wrap')

    const tips = document.createElement('p')
    tips.textContent = '投票（文章发表后无法再修改）'

    const list = document.createElement('ul')
    const append = document.createElement('button')
    append.classList.add('vote-append', 'el-icon-plus')

    const createItem = text => {
      const wrap = document.createElement('li')
      const label = document.createElement('span')
      label.textContent = `${++this.i}. `
      const input = document.createElement('input')
      input.type = 'text'
      input.placeholder = '请输入选项（20字以内）'
      if (text) {
        input.value = (typeof text === 'string' ? text : text.text) || ''
      }
      input.maxLength = 20
      input.classList.add('vote-answer')
      wrap.classList.add('vote-wrap-item')
      wrap.appendChild(label)
      wrap.appendChild(input)
      if (this.i > 2) {
        const close = document.createElement('button')
        close.classList.add('el-icon-circle-close')
        close.addEventListener('click', () => {
          list.removeChild(wrap)
          this.i--
          if (this.i < 100) {
            append.style.display = 'block'
          }
          const maxCounter = wrapper.querySelector('.vote-wrap-select-count')
          if (maxCounter) {
            maxCounter.max = this.i
            if (maxCounter.value - this.i > 0) {
              maxCounter.value = this.i
            }
          }
        })
        wrap.appendChild(close)
      }
      list.appendChild(wrap)
      input.focus()
    }

    append.addEventListener('click', () => {
      createItem()
      if (this.i >= 100) {
        append.style.display = 'none'
      }
      const maxCounter = wrapper.querySelector('.vote-wrap-select-count')
      if (maxCounter) {
        maxCounter.max = this.i
      }
    })

    const createFooter = () => {
      const footer = document.createElement('footer')
      const countLabel = document.createElement('span')
      countLabel.textContent = '可选个数'
      const countInput = document.createElement('input')
      countInput.type = 'number'
      countInput.classList.add('vote-wrap-select-count')
      countInput.min = 1
      if (this.data && this.data.max_select) {
        countInput.value = this.data.max_select
      } else {
        countInput.value = 1
      }
      countInput.max = this.i

      footer.appendChild(countLabel)
      footer.appendChild(countInput)

      const expireLabel = document.createElement('span')
      expireLabel.textContent = '截止时间（可选）'
      const expireInput = document.createElement('input')
      expireInput.type = 'date'
      expireInput.min = new Date(Date.now() + 86400000).toISOString().split('T')[0]
      expireInput.classList.add('vote-expire-input')
      if (this.data && this.data.expired_at) {
        expireInput.value = new Date(this.data.expired_at * 1000).toISOString().split('T')[0]
      }

      footer.appendChild(expireLabel)
      footer.appendChild(expireInput)

      wrapper.appendChild(footer)
    }

    wrapper.appendChild(tips)
    wrapper.appendChild(list)
    wrapper.appendChild(append)

    if (this.data && this.data.items) {
      this.data.items.forEach(createItem)
    } else {
      createItem()
      createItem()
    }

    createFooter()

    return wrapper
  }

  save(blockContent) {
    const answerInput = blockContent.querySelectorAll('.vote-answer')
    const answers = [];
    [].forEach.call(answerInput, function(item) {
      answers.push(item.value)
    })
    const expireInput = blockContent.querySelector('.vote-expire-input')
    return {
      items: answers.map(_ => _.trim()).filter(_ => _),
      right_ids: [],
      max_select: +blockContent.querySelector('.vote-wrap-select-count').value,
      expired_at: (expireInput && expireInput.value) ? parseInt(new Date(expireInput.value).getTime() / 1000) : 0
    }
  }

  validate(savedData) {
    return savedData.items.length > 1
  }
}
