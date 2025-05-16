'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com" },
    { icon: <FaInstagram className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <FaDiscord className="w-5 h-5" />, url: "https://discord.com" },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-purple-900/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" className="font-orbitron text-3xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Ayush<span className="text-white">.</span>dev
                </span>
              </Link>
              <p className="text-gray-400 mt-4 max-w-sm">
                Experienced developer with expertise in web development, Discord bots, and Minecraft plugins.
                Creating amazing digital experiences since 2020.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-110"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 mr-0 group-hover:w-3 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <p className="flex flex-col">
                  <span className="text-gray-300">Email:</span>
                  <a href="mailto:ayushsonkar1269@gmail.com" className="hover:text-white transition-colors duration-300">
                    ayushsonkar1269@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="flex flex-col">
                  <span className="text-gray-300">Discord:</span>
                  <span>spyddybhaiyt</span>
                </p>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-2 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 inline-block mt-2"
                >
                  Send Message
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500"
        >
          <p>© {currentYear} Ayush Sonkar. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Designed and Developed with ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 