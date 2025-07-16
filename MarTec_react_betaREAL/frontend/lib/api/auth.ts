import api from './index'

const getCsrfToken = async () => {
  const response = await api.get('/auth/csrf/')
  api.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken
}

export const authApi = {
  login: async (username: string, password: string) => {
    await getCsrfToken()
    return api.post('/auth/login/', { username, password })
  },
  logout: async () => {
    await getCsrfToken()
    return api.post('/auth/logout/')
  },
  checkAuth: async () => {
    return api.get('/auth/check/')
  }
}