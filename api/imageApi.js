export const getCaptcha = ctx =>
  ctx.$axios.$get(
    `v1/image/captcha?t=${Date.now()}-${Math.random()
      .toString(36)
      .substring(3, 6)}`
  )

export const getUpToken = ctx => ctx.$axios.$get('v1/image/uptoken')

export const uploadToQiniu = (ctx, formData) =>
  ctx.$axios.$post('https://up.qbox.me', formData, {
    'Content-Type': 'multipart/form-data'
  })
