
import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserType = 'student' | 'employer';

type User = {
  id: string;
  name: string;
  email: string;
  userType: UserType;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, userType: UserType) => Promise<void>;
  register: (userData: any, userType: UserType) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = async (email: string, password: string, userType: UserType) => {
    // Simulate API call
    // In a real app, you would make an API call to a backend service
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const mockUser = {
          id: '1',
          name: userType === 'student' ? 'Alex Johnson' : 'Tech Innovators Inc.',
          email,
          userType
        };
        setUser(mockUser);
        resolve();
      }, 1000);
    });
  };

  // Mock register function
  const register = async (userData: any, userType: UserType) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Registered new user:', { ...userData, userType });
        resolve();
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
