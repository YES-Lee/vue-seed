import { getToken } from '../lib/utils'

export function beforeEach (to, from, next) {
  if (to.matched.some(r => r.meta.requiredAuth)) {
    // 检查有没有token
    const token = getToken()
    if (!token) {
      next({ name: 'Login' })
      return
    }
  }
  next()
}
