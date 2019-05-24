import axios from 'axios'
import generateRequestError from '~/assets/js/generateRequestError'

export const getCaptcha = () => new Promise((resolve, reject) => {
  axios.get(
    `${process.env.API_URL_BROWSER}v1/image/captcha?t=${Date.now()}-${Math.random()
      .toString(36)
      .substring(3, 6)}`
  )
    .then(resp => resolve(resp.data.data))
    .catch(err => reject(generateRequestError(err)))
})

export const getUpToken = ctx => ctx.$axios.$get('v1/image/uptoken')
