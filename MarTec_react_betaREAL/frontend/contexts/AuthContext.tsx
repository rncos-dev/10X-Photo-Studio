'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { authApi } from '@/lib/api/auth';
import type { User, AuthState } from '@/lib/types';

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authApi.checkAuth();
        setAuthState({
          isAuthenticated: true,
          user: response.data,
        });
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          user: null,
        });
      }
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await authApi.login(username, password);
      setAuthState({
        isAuthenticated: true,
        user: response.data,
      });
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setAuthState({
        isAuthenticated: false,
        user: null,
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 