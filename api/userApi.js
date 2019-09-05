export const getRecommendedUsers = ctx => ctx.$axios.$get('user/recommended')

export const getLoginUser = ctx => ctx.$axios.$post('v1/door/get_user_info')

export const settingProfile = (ctx, params) => ctx.$axios.$post('v1/user/update_info', params)

export const settingImage = (ctx, { type, url }) => ctx.$axios.$post('user/setting/image', { type, url })

export const getUserInfo = (ctx, { slug }) => ctx.$axios.$get(`v1/user/show`, { params: { slug } })

export const bindPhone = (ctx, { slug, phone, password, authCode }) =>
  ctx.$axios.$post('v1/door/bind_phone', {
    slug,
    phone,
    password,
    authCode
  })

export const getMailboxTotal = (ctx, { slug }) =>
  ctx.$axios.$get('v1/message/total', {
    params: { slug },
    progress: false
  })

export const sendMessage = (ctx, { phone_number, type, geetest }) =>
  ctx.$axios.$post('v1/door/message', {
    phone_number,
    type,
    geetest
  })

export const register = (ctx, { access, secret, authCode, inviteCode }) =>
  ctx.$axios.$post('v1/door/register', {
    access,
    secret,
    authCode,
    inviteCode
  })

export const login = (ctx, { access, secret, remember, geetest }) =>
  ctx.$axios.$post('v1/door/login', {
    access,
    secret,
    remember,
    geetest
  })

export const logout = ctx => ctx.$axios.$post('v1/door/logout')

export const feedback = (ctx, { type, desc, ua }) => ctx.$axios.$post('user/feedback', { type, desc, ua })

export const daySignAction = ctx => ctx.$axios.$post('user/daySign')

export const getUserCard = (ctx, { id }) =>
  ctx.$axios.$get('user/card', {
    params: { id }
  })

export const getUserBadgeDetail = (ctx, { user_id, badge_id }) =>
  ctx.$axios.$get('user/badge/item', {
    params: {
      user_id,
      badge_id
    }
  })

export const report = (ctx, { id, type, model, message }) =>
  ctx.$axios.$post('report/send', {
    id,
    type,
    model,
    message
  })

export const resetPassword = (ctx, { method, access, authCode, secret }) =>
  ctx.$axios.$post('v1/door/reset_password', {
    method,
    access,
    authCode,
    secret
  })

export const readAllMessage = ctx => ctx.$axios.$post('user/notification/clear')

export const readMessage = (ctx, { id }) => ctx.$axios.$post('user/notification/read', { id })

export const readNotice = (ctx, { id }) => ctx.$axios.$post('user/notice/mark', { id })

export const getNotifications = (ctx, { minId }) =>
  ctx.$axios.$get('user/notification/list', {
    params: { minId }
  })

export const getNotificationCount = ctx => ctx.$axios.$get('user/notification/count')

export const getSystemNotice = ctx => ctx.$axios.$get('user/notice/list')
