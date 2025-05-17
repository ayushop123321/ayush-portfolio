'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Metadata } from 'next';
import { FaLock } from 'react-icons/fa';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900/70 backdrop-blur-sm p-10 rounded-xl border border-purple-500/20">
        <div>
          <div className="mx-auto h-16 w-16 rounded-full bg-purple-600/20 flex items-center justify-center">
            <FaLock className="h-8 w-8 text-purple-400" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Admin Login</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Sign in to access the admin dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500/20 border border-red-500 p-3 rounded-md">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}
          
          <div className="rounded-md -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-t-md relative block w-full px-4 py-3 border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-b-md relative block w-full px-4 py-3 border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading
                  ? 'bg-purple-700 opacity-70 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/20'
              } focus:outline-none transition duration-300`}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 