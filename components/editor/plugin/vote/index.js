import './index.scss'

export default class Baidu {
  constructor({ data }) {
    this.data = data
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
    const wrapper = document.createElement('div')
    wrapper.classList.add('vote-wrap')

    const urlInput = document.createElement('input')
    urlInput.classList.add('vote-url')
    urlInput.placeholder = '粘贴资源链接到这里（仅支持百度云盘：pan.baidu.com）'
    urlInput.type = 'text'
    urlInput.value = this.data && this.data.url ? this.data.url : ''
    wrapper.appendChild(urlInput)

    const pwdInput = document.createElement('input')
    pwdInput.classList.add('vote-password')
    pwdInput.placeholder = '填写资源的密码（4~6位）'
    pwdInput.type = 'text'
    pwdInput.value = this.data && this.data.password ? this.data.password : ''
    wrapper.appendChild(pwdInput)

    const roleContainer = document.createElement('div')
    roleContainer.classList.add('vote-role-wrap')

    const radioName = `${Math.random().toString(36).substring(3, 6)}`
    const roleValue = this.data && this.data.visit_type ? this.data.visit_type : 0
    const roleIntro = document.createElement('span')
    roleIntro.textContent = '是否需要投食才能看到密码：'
    roleContainer.appendChild(roleIntro)

    const publicRole = document.createElement('input')
    publicRole.classList.add('vote-role-public')
    publicRole.id = `vote-role-public-${radioName}`
    publicRole.name = radioName
    publicRole.type = 'radio'
    publicRole.value = 0
    publicRole.checked = roleValue === 0
    roleContainer.appendChild(publicRole)

    const publicLabel = document.createElement('label')
    publicLabel.setAttribute('for', `vote-role-public-${radioName}`)
    publicLabel.textContent = '否'
    publicLabel.classList.add('vote-label')
    roleContainer.appendChild(publicLabel)

    const privateRole = document.createElement('input')
    privateRole.classList.add('vote-role-private')
    privateRole.id = `vote-role-private-${radioName}`
    privateRole.type = 'radio'
    privateRole.name = radioName
    privateRole.value = 1
    privateRole.checked = roleValue === 1
    roleContainer.appendChild(privateRole)

    const privateLabel = document.createElement('label')
    privateLabel.setAttribute('for', `vote-role-private-${radioName}`)
    privateLabel.textContent = '是'
    privateLabel.classList.add('vote-label')
    roleContainer.appendChild(privateLabel)

    wrapper.appendChild(roleContainer)

    return wrapper
  }

  save(blockContent) {
    const urlInput = blockContent.querySelector('.vote-url')
    const pwdInput = blockContent.querySelector('.vote-password')
    const publicInput = blockContent.querySelector('.vote-role-public')

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

    return !(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(savedData.url) ||
      !/^[\w|\W]{4,6}$/.test(savedData.password))
  }
}
