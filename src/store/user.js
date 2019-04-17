import { getToken, getUserInfo, setUserInfo, setToken } from '../lib/utils'
import router from '../route'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: getUserInfo()
  },
  getters: {},
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      setUserInfo(userInfo)
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    logout (state) {
      state.token = ''
      state.userInfo = null
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
      router.push({ name: 'Login' })
    }
  },
  actions: {}
}
