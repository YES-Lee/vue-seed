export function setToken (token) {
  window.localStorage.setItem('token', token)
}

export function getToken () {
  return window.localStorage.getItem('token')
}

export function setUserInfo (userInfo) {
  if (typeof userInfo !== 'string') {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  } else {
    window.localStorage.setItem('userInfo', userInfo)
  }
}

export function getUserInfo () {
  return JSON.parse(window.localStorage.getItem('userInfo'))
}
