import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('dzikwaUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // In a real app, you'd call your backend here.
    // For now, we'll use mock credentials.
    if (email === 'admin@dzikwa.org' && password === 'password123') {
      const userData = { email, name: 'Admin User' };
      localStorage.setItem('dzikwaUser', JSON.stringify(userData));
      setUser(userData);
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
      return true;
    }
    toast({
      variant: 'destructive',
      title: 'Login Failed',
      description: 'Invalid email or password.',
    });
    return false;
  };

  const signup = (name, email, password) => {
    // In a real app, you'd register the user with your backend.
    // For this prototype, we'll just log them in directly.
    const userData = { email, name };
    localStorage.setItem('dzikwaUser', JSON.stringify(userData));
    setUser(userData);
    toast({
      title: 'Signup Successful',
      description: `Welcome, ${name}!`,
    });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('dzikwaUser');
    setUser(null);
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};