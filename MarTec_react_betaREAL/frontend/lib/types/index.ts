export interface User {
  id: number
  username: string
  email: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export interface Image {
  id: number
  url: string
  prompt: string
  createdAt: string
}