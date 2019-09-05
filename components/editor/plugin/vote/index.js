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
      icon:
        '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 300 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M109.5 62.4l-2.5 2.5v140.2l2.5 2.4c2.3 2.4 3 2.5 14.7 2.5 6.8 0 13.3-.3 14.6-.6 5.2-1.4 5.2-.8 5.2-75.1 0-66.3-.1-68.9-2-71.3-1.8-2.4-2.3-2.5-15.9-2.8-13.9-.3-14.1-.3-16.6 2.2zM50.2 100l-2.2 2.1v103.8l2.6 2c2.4 1.9 4 2.1 15 2.1 13.8 0 16.8-.9 18.4-5.3 1.4-4.2 1.4-97.3-.1-101.6-.6-1.7-1.9-3.6-2.9-4.1-1-.6-7.9-1-15.2-1-12.1 0-13.6.2-15.6 2zM230.4 109.4c-1.7.8-3.4 2.1-3.8 3.1-.3.9-.6 22.1-.6 47.1v45.5l2.5 2.4c2.3 2.4 3 2.5 14.9 2.5 14 0 17-.9 18.6-5.3 1.5-4.3 1.4-86.3-.1-90.7-.8-2.2-2.2-3.7-4.5-4.6-4.4-1.8-22.7-1.8-27 0zM170.3 158.2c-1.2.6-2.7 2.4-3.2 4.1-1.4 3.9-1.4 38.5-.1 42.4 1.6 4.4 4.6 5.3 18.6 5.3 11.9 0 12.6-.1 14.9-2.5 2.5-2.4 2.5-2.4 2.5-24s0-21.6-2.5-24c-2.3-2.4-2.9-2.5-15.2-2.4-7 0-13.8.5-15 1.1zM49.2 223.2c-1.9 1.9-1.5 6.6.7 7.8 1.3.7 36 1 105.3 1 84.4 0 103.8-.2 105.2-1.3 2.2-1.6 2.5-6.5.5-7.8-2.3-1.4-210.3-1.1-211.7.3z"/></g></svg>'
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
    const answers = []
    ;[].forEach.call(answerInput, function(item) {
      answers.push(item.value)
    })
    const expireInput = blockContent.querySelector('.vote-expire-input')
    return {
      items: answers.map(_ => _.trim()).filter(_ => _),
      right_ids: [],
      max_select: +blockContent.querySelector('.vote-wrap-select-count').value,
      expired_at: expireInput && expireInput.value ? parseInt(new Date(expireInput.value).getTime() / 1000) : 0
    }
  }

  validate(savedData) {
    return savedData.items.length > 1
  }
}
