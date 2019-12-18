import axios from 'axios'
import QQ from './qq'
import Wechat from './wechat'

export default url => {
  if (!/mqqbrowser|qq|micromessenger/.test((window.navigator.userAgent || '').toLowerCase())) {
    return
  }

  const isQQ = /qq/.test((window.navigator.userAgent || '').toLowerCase())

  axios
    .get(`${process.env.API_URL_BROWSER}v1/door/oauth2/ticket`, {
      params: { url, isQQ }
    })
    .then(resp => {
      const config = resp.data.data
      if (isQQ) {
        const qqProvider = new QQ(config)
        qqProvider.init()
      } else {
        const wechatProvider = new Wechat(config)
        wechatProvider.init()
      }
    })
    .catch(() => {})
}
