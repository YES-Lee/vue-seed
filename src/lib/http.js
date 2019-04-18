import Axios from 'axios'
import { getToken } from './utils'
import router from '../route'

const devUrl = 'http://localhost:7001/api/hr-promoter/v1'
const prodUrl = 'http://hr.laway.cn/api/hr-promoter/v1'

const httpClient = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? prodUrl : devUrl,
  timeout: 1000 * 30, // 请求30秒超时
  headers: {
    'Content-Type': 'application/json'
  }
})

const CancelToken = Axios.CancelToken
const source = CancelToken.source()

httpClient.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  config.cancelToken = source.token
  return config
}, err => {
  console.error(err)
})

httpClient.interceptors.response.use(({ data }) => {
  if (data.code === 0) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(new Error(data.msg))
  }
}, err => {
  if (err.response.status === 401) {
    // source.cancel()
    router.replace({ name: 'Login' })
    return Promise.reject(new Error('登录超时'))
  }
  console.error(err)
})

export default httpClient
