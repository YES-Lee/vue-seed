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

export async function getConsumeInfo () {
  try {
    const result = await httpClient.get('/user/getConsumeInfo')
    let totalMoney = 0
    result.data.forEach(item => {
      totalMoney = totalMoney + item.amount
      item.amount = '¥' + (item.amount / 100)
      item.updateTime = new Date(item.updateTime).toLocaleString()
    })
    return {
      totalMoney,
      list: result.data
    }
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}
