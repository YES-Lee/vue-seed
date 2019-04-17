import { getToken, getUserInfo, setUserInfo, setToken } from '../lib/utils'

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
    }
  },
  actions: {}
}
