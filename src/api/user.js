import httpClient from "../lib/http"

export async function login ({ account, password }) {
  try {
    const result = await httpClient.post('/user/login', { account, password })
    return result
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}
