import httpClient from '../lib/http'

export async function login ({ username, password }) {
  try {
    const result = await httpClient.post('/user/login', { username, password })
    return result.data
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}

export async function register ({ username, password }) {
  try {
    const result = await httpClient.post('/user/register', { username, password })
    return result.data
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}
