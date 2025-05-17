'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  getIdToken
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        // Check if user has admin email - in a real app use Firebase Custom Claims
        const adminCheck = user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        setIsAdmin(adminCheck);
        
        if (adminCheck) {
          // Get and store the user's ID token in a cookie for server-side auth
          try {
            const token = await getIdToken(user);
            await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token }),
            });
          } catch (error) {
            console.error('Error setting authentication cookie:', error);
          }
        }
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Check if user is admin
        const isAdminUser = userCredential.user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
        setIsAdmin(isAdminUser);
        
        if (isAdminUser) {
          // Get and store the user's ID token in a cookie for server-side auth
          try {
            const token = await getIdToken(userCredential.user);
            await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token }),
            });
          } catch (error) {
            console.error('Error setting authentication cookie:', error);
          }
        }
      });
  }

  async function signOut() {
    try {
      // Clear the server-side cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Sign out from Firebase
      await firebaseSignOut(auth);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  const value = {
    currentUser,
    loading,
    signIn,
    signOut,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 