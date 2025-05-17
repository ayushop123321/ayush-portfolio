'use client';

import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { FaTachometerAlt, FaComments, FaChartLine, FaSignOutAlt, FaUser, FaHome } from 'react-icons/fa';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, signOut, isAdmin } = useAuth();

  // Redirect to login page if not logged in or not admin
  if (!currentUser || !isAdmin) {
    // Only perform client-side redirects
    if (typeof window !== 'undefined') {
      router.push('/admin/login');
      return null;
    }
  }

  // Sidebar navigation items
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <FaTachometerAlt /> },
    { name: 'Messages', path: '/admin/messages', icon: <FaComments /> },
    { name: 'Analytics', path: '/admin/analytics', icon: <FaChartLine /> }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/admin/login');
    } catch (error) {
      console.error('Failed to sign out:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Admin Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-purple-500/20 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/admin/dashboard" className="font-orbitron text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {currentUser && (
              <div className="text-sm text-gray-400">
                <span>Logged in as </span>
                <span className="text-purple-400">{currentUser.email}</span>
              </div>
            )}
            
            <div className="flex gap-3">
              <Link 
                href="/"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Visit Site"
              >
                <FaHome />
              </Link>
              
              <button
                onClick={handleSignOut}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Sign Out"
              >
                <FaSignOutAlt />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-black/50 backdrop-blur-sm rounded-xl border border-purple-500/10 p-4 self-start">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.path
                      ? 'bg-purple-600/20 text-purple-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 bg-black/50 backdrop-blur-sm rounded-xl border border-purple-500/10 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 