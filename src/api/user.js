import httpClient from '../lib/http'

export async function login ({ account, password }) {
  try {
    const result = await httpClient.post('/user/login', { account, password })
    return result.data
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}

export async function getMyInvited () {
  try {
    const result = await httpClient.get('/user/getMyInvited')
    result.data.forEach(item => {
      item.createTime = new Date(item.createTime).toLocaleString()
    })
    return result.data
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}
