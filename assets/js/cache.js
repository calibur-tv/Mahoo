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

export const has = key => {
  try {
    const val = localStorage.getItem(key)
    return val !== null
  } catch (e) {
    return false
  }
}

export const expired = (key, timeout) => {
  try {
    const timeStr = localStorage.getItem(`${key}-created-at`)
    return !timeStr || Date.now() - timeStr > timeout * 1000
  } catch (e) {
    return true
  }
}

export const set = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val))
    localStorage.setItem(`${key}-created-at`, Date.now())
  } catch (e) {}
}

export const get = (key, def) => {
  try {
    const val = localStorage.getItem(key)
    if (val === null) {
      return def
    }
    return JSON.parse(val)
  } catch (e) {
    return def
  }
}

export const remove = key => {
  try {
    localStorage.removeItem(key)
  } catch (e) {}
}

export const clear = () => {
  try {
    localStorage.clear()
  } catch (e) {}
}
