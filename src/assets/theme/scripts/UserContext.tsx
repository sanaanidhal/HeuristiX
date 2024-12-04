import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  profilepic?: string;
}

// Define the context type
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with a default value of `undefined`
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Provide the context
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize user state from localStorage
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Sync user state with localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Save user data
    } else {
      localStorage.removeItem('user'); // Clear user data on logout
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
