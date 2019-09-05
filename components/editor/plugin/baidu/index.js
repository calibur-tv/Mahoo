import './index.scss'

export default class Baidu {
  constructor({ data }) {
    this.data = data
  }

  static get toolbox() {
    return {
      title: '百度云',
      icon:
        '<svg version="1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 298 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M135.2 75.6c-11 2.9-20.1 9.5-26.5 19.1-5.1 7.6-7.4 14.6-8.4 24.5-.6 7.4.2 6.7-9.8 8.4-15.2 2.6-30.5 16.1-35.6 31.2-1.8 5.4-2 8.1-1.7 17.5.4 10.6.6 11.6 4.2 18.6 6.5 12.8 17.1 20.9 31.9 24.8 12.1 3.1 26.8.2 37.9-7.5 2.4-1.6 12.2-11.9 21.8-22.8 32.9-37.3 35.7-39.7 46.5-39.7 12.9.1 21.4 8.4 24 23.6.3 2.2 1.1 4.9 1.6 6.1 2.3 5.1 11.4 7.3 16.4 4 12.6-8.3-.4-41.6-19.8-50.8-5.8-2.7-16.1-5.6-20.1-5.6-2.4 0-2.6-.3-2.6-4.4 0-21.7-15.1-41.8-35.4-47.2-6.5-1.7-17.6-1.7-24.4.2zm19.4 21.9c5.7 1.7 12.8 8 15.2 13.5 1.9 4.5 1.8 14.5-.2 19.1-3.7 8.7-12.1 13.9-22.4 13.9-6.2 0-7.5-.4-11.8-3.3-7.4-4.9-10.7-10.4-11.2-18.3-.6-8.7 1.5-14.1 7.8-19.7 7.3-6.6 13.4-8 22.6-5.2zm-44.7 54.4c5 2.6 10.7 9.1 12 13.8 4.6 16.4-5.9 31.5-21.8 31.5-13.6.1-24.1-10-24.1-23.2 0-9.3 5.7-18.6 13.5-22.1 5.5-2.5 15.4-2.5 20.4 0zM225 200.7c-3.9 2.7-4.9 4.5-5 9 0 3.3.6 5 2.9 7.5 2.6 2.9 3.5 3.3 8.1 3.3s5.5-.4 8.1-3.3c6.4-7.2 2.1-18.2-7.3-18.2-2.5 0-5.4.7-6.8 1.7z"/></g></svg>'
    }
  }

  render() {
    const outerWrap = document.createElement('div')
    outerWrap.classList.add('baidu-resource')

    const iconArea = document.createElement('i')
    iconArea.classList.add('iconfont', 'ic-baidu-cloud', 'baidu-resource-icon')
    outerWrap.appendChild(iconArea)

    const wrapper = document.createElement('div')
    wrapper.classList.add('baidu-resource-wrap')
    outerWrap.appendChild(wrapper)

    const urlInput = document.createElement('input')
    urlInput.classList.add('baidu-resource-url')
    urlInput.placeholder = '粘贴资源链接到这里（仅支持百度云盘：pan.baidu.com）'
    urlInput.type = 'text'
    urlInput.value = this.data && this.data.url ? this.data.url : ''
    wrapper.appendChild(urlInput)

    const pwdInput = document.createElement('input')
    pwdInput.classList.add('baidu-resource-password')
    pwdInput.placeholder = '填写资源的密码（4~6位）'
    pwdInput.type = 'text'
    pwdInput.value = this.data && this.data.password ? this.data.password : ''
    wrapper.appendChild(pwdInput)

    const roleContainer = document.createElement('div')
    roleContainer.classList.add('baidu-resource-role-wrap')

    const radioName = `${Math.random()
      .toString(36)
      .substring(3, 6)}`
    const roleValue = this.data && this.data.visit_type ? this.data.visit_type : 0
    const roleIntro = document.createElement('span')
    roleIntro.textContent = '是否需要投食才能看到密码：'
    roleContainer.appendChild(roleIntro)

    const publicRole = document.createElement('input')
    publicRole.classList.add('baidu-resource-role-public')
    publicRole.id = `baidu-resource-role-public-${radioName}`
    publicRole.name = radioName
    publicRole.type = 'radio'
    publicRole.value = 0
    publicRole.checked = roleValue === 0
    roleContainer.appendChild(publicRole)

    const publicLabel = document.createElement('label')
    publicLabel.setAttribute('for', `baidu-resource-role-public-${radioName}`)
    publicLabel.textContent = '否'
    publicLabel.classList.add('baidu-resource-label')
    roleContainer.appendChild(publicLabel)

    const privateRole = document.createElement('input')
    privateRole.classList.add('baidu-resource-role-private')
    privateRole.id = `baidu-resource-role-private-${radioName}`
    privateRole.type = 'radio'
    privateRole.name = radioName
    privateRole.value = 1
    privateRole.checked = roleValue === 1
    roleContainer.appendChild(privateRole)

    const privateLabel = document.createElement('label')
    privateLabel.setAttribute('for', `baidu-resource-role-private-${radioName}`)
    privateLabel.textContent = '是'
    privateLabel.classList.add('baidu-resource-label')
    roleContainer.appendChild(privateLabel)

    wrapper.appendChild(roleContainer)

    return outerWrap
  }

  save(blockContent) {
    const urlInput = blockContent.querySelector('.baidu-resource-url')
    const pwdInput = blockContent.querySelector('.baidu-resource-password')
    const publicInput = blockContent.querySelector('.baidu-resource-role-public')

    let url = urlInput.value.trim()
    if (!/^https?:\/\//.test(url)) {
      url = 'https://' + url
    }

    return {
      url,
      password: pwdInput.value.trim(),
      visit_type: publicInput.checked ? 0 : 1
    }
  }

  validate(savedData) {
    if (!savedData.url || !savedData.password) {
      return false
    }

    return !(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(savedData.url) || !/^[\w|\W]{4,6}$/.test(savedData.password))
  }
}
