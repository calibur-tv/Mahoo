import './index.scss'

export default class Baidu {
  constructor({ data }) {
    this.data = data
  }

  static get toolbox() {
    return {
      title: '百度云',
      icon: '<svg width="20px" height="16px" viewBox="0 0 256 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">\n' +
        '  <g>\n' +
        '    <path d="M170.2517,56.8186 L192.5047,34.5656 L193.9877,25.1956 C153.4367,-11.6774 88.9757,-7.4964 52.4207,33.9196 C42.2667,45.4226 34.7337,59.7636 30.7167,74.5726 L38.6867,73.4496 L83.1917,66.1106 L86.6277,62.5966 C106.4247,40.8546 139.8977,37.9296 162.7557,56.4286 L170.2517,56.8186 Z"></path>\n' +
        '    <path d="M224.2048,73.9182 C219.0898,55.0822 208.5888,38.1492 193.9878,25.1962 L162.7558,56.4282 C175.9438,67.2042 183.4568,83.4382 183.1348,100.4652 L183.1348,106.0092 C198.4858,106.0092 210.9318,118.4542 210.9318,133.8052 C210.9318,149.1572 198.4858,161.2902 183.1348,161.2902 L127.4638,161.2902 L121.9978,167.2242 L121.9978,200.5642 L127.4638,205.7952 L183.1348,205.7952 C223.0648,206.1062 255.6868,174.3012 255.9978,134.3712 C256.1858,110.1682 244.2528,87.4782 224.2048,73.9182"></path>\n' +
        '    <path d="M71.8704,205.7957 L127.4634,205.7957 L127.4634,161.2897 L71.8704,161.2897 C67.9094,161.2887 64.0734,160.4377 60.4714,158.7917 L52.5844,161.2117 L30.1754,183.4647 L28.2234,191.0387 C40.7904,200.5277 56.1234,205.8637 71.8704,205.7957"></path>\n' +
        '    <path d="M71.8704,61.4255 C31.9394,61.6635 -0.2366,94.2275 0.0014,134.1575 C0.1344,156.4555 10.5484,177.4455 28.2234,191.0385 L60.4714,158.7915 C46.4804,152.4705 40.2634,136.0055 46.5844,122.0155 C52.9044,108.0255 69.3704,101.8085 83.3594,108.1285 C89.5244,110.9135 94.4614,115.8515 97.2464,122.0155 L129.4944,89.7685 C115.7734,71.8315 94.4534,61.3445 71.8704,61.4255"></path>\n' +
        '  </g>\n' +
        '</svg>'
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

    const radioName = `${Math.random().toString(36).substring(3, 6)}`
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

    return !(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(savedData.url) ||
      !/^[\w|\W]{4,6}$/.test(savedData.password))
  }
}
