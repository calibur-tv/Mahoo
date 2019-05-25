export const getCaptcha = ctx => ctx.$axios.$get(
  `v1/image/captcha?t=${Date.now()}-${Math.random()
    .toString(36)
    .substring(3, 6)}`
)

export const getUpToken = ctx => ctx.$axios.$get('v1/image/uptoken')
