import axios from 'axios'
import QQ from './qq'
import Wechat from './wechat'

export default url => {
  if (!/mqqbrowser|qq|micromessenger/.test((window.navigator.userAgent || '').toLowerCase())) {
    return
  }

  axios
    .get(`${process.env.API_URL_BROWSER}v1/door/oauth2/ticket`, {
      params: { url }
    })
    .then(resp => {
      const config = resp.data.data
      const qqProvider = new QQ(config)
      const wechatProvider = new Wechat(config)
      qqProvider.init()
      wechatProvider.init()
    })
    .catch(() => {})
}
