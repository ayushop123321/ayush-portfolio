'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 border-b border-purple-500/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-orbitron text-2xl md:text-3xl font-bold text-white"
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ayush<span className="text-white">.</span>dev
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Admin
            </Link>
          )}
          <Link
            href="/contact"
            className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transform fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-md z-50 transition-all duration-300 ease-in-out overflow-y-auto p-8`}
      >
        <nav className="flex flex-col space-y-6 mt-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/admin/dashboard"
              className="text-purple-400 hover:text-purple-300 transition-colors"
              onClick={toggleMenu}
            >
              Admin
            </Link>
          )}
          <Link
            href="/contact"
            className="py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:shadow-lg hover:shadow-purple-500/20 transition-all text-center"
            onClick={toggleMenu}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 