
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type UserType = 'student' | 'employer';

type User = {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  image?: string;
  bio?: string;
  location?: string;
  phone?: string;
};

type ProfileUpdateData = {
  name: string;
  email: string;
  bio?: string;
  location?: string;
  phone?: string;
  image?: string | null;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, userType: UserType) => Promise<void>;
  register: (userData: any, userType: UserType) => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: ProfileUpdateData) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'skillstrapAuth';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user data from localStorage on initial mount
  useEffect(() => {
    const savedAuthData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedAuthData) {
      try {
        const parsedData = JSON.parse(savedAuthData);
        setUser(parsedData);
      } catch (error) {
        console.error('Error parsing auth data from localStorage:', error);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
  }, []);

  // Update localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [user]);

  // Modified login function
  const login = async (email: string, password: string, userType: UserType) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Check if we have existing user data in localStorage
        const savedAuthData = localStorage.getItem(LOCAL_STORAGE_KEY);
        let existingUser = null;
        
        if (savedAuthData) {
          try {
            existingUser = JSON.parse(savedAuthData);
            // Only use existing data if the email matches
            if (existingUser && existingUser.email !== email) {
              existingUser = null;
            }
          } catch (error) {
            console.error('Error parsing auth data from localStorage:', error);
          }
        }

        // Create or reuse user data
        const mockUser = existingUser || {
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

  // Update profile function - now persists data to localStorage
  const updateProfile = async (profileData: ProfileUpdateData) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (user) {
          const updatedUser = {
            ...user,
            ...profileData
          };
          setUser(updatedUser);
          console.log('Profile updated:', updatedUser);
        }
        resolve();
      }, 1000);
    });
  };

  // Logout function - now clears localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile
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
