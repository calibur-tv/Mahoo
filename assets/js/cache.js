import { getUserInfo } from '~/api/userApi'

export const getUserFromSessionStore = (ctx, slug) => {
  const getUser = async () => {
    const user = await getUserInfo(ctx, { slug })
    user && setUserSessionStore(user)
    return user
  }
  try {
    const user = sessionStorage.getItem(`user-item-${slug}`)
    if (!user) {
      return getUser()
    }
    return JSON.parse(sessionStorage.getItem(`user-item-${slug}`))
  } catch (e) {
    return getUser()
  }
}

export const setUserSessionStore = user => {
  try {
    sessionStorage.setItem(`user-item-${user.slug}`, JSON.stringify(user))
  } catch (e) {}
}
