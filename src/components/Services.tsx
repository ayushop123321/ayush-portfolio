'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaGamepad, FaMobile, FaDatabase } from 'react-icons/fa';
import Link from 'next/link';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
  features: string[];
  bgClass: string;
  iconClass: string;
}

const Services = () => {
  const [activeTab, setActiveTab] = useState<'webdev' | 'discord' | 'minecraft'>('webdev');

  const services: Record<string, Service[]> = {
    webdev: [
      {
        icon: <FaCode size={40} />,
        title: "Basic Website",
        description: "Perfect for personal portfolios and simple business websites",
        price: "Starts at ₹499",
        features: [
          "Responsive Design",
          "3-5 Pages",
          "Contact Form",
          "Free Hosting (Standard)",
          "SEO Basics",
          "3 Revisions"
        ],
        bgClass: "from-blue-600 to-cyan-500",
        iconClass: "bg-blue-600"
      },
      {
        icon: <FaServer size={40} />,
        title: "Advanced Website",
        description: "For businesses requiring more complex functionalities",
        price: "Custom Quote",
        features: [
          "10+ Pages",
          "Custom Features",
          "Admin Dashboard",
          "Payment Integration",
          "Premium Hosting Options",
          "Advanced SEO",
          "Unlimited Revisions"
        ],
        bgClass: "from-purple-600 to-blue-500",
        iconClass: "bg-purple-600"
      },
      {
        icon: <FaMobile size={40} />,
        title: "Web Application",
        description: "Full-featured web applications with complex functionality",
        price: "Custom Quote",
        features: [
          "User Authentication",
          "Database Integration",
          "Real-time Features",
          "API Development",
          "Custom Admin Panel",
          "Advanced Security",
          "Maintenance Support"
        ],
        bgClass: "from-pink-600 to-purple-500",
        iconClass: "bg-pink-600"
      }
    ],
    discord: [
      {
        icon: <FaRobot size={40} />,
        title: "Basic Discord Bot",
        description: "Simple commands and functionalities for your server",
        price: "Starts at ₹69",
        features: [
          "Basic Commands",
          "Welcome Messages",
          "Moderation Tools",
          "Role Management",
          "Custom Prefix",
          "24/7 Uptime",
        ],
        bgClass: "from-indigo-600 to-blue-500",
        iconClass: "bg-indigo-600"
      },
      {
        icon: <FaRobot size={40} />,
        title: "Advanced Discord Bot",
        description: "Feature-rich bot with custom integrations",
        price: "Custom Quote",
        features: [
          "Advanced Commands",
          "Custom Integrations",
          "Database Connection",
          "Auto-moderation",
          "Leveling System",
          "Music Features",
          "Custom Admin Controls"
        ],
        bgClass: "from-blue-600 to-indigo-500",
        iconClass: "bg-blue-600"
      },
      {
        icon: <FaDatabase size={40} />,
        title: "Complex Discord Bot",
        description: "Enterprise-level bot with unique features",
        price: "Custom Quote",
        features: [
          "API Integrations",
          "Game Stats Tracking",
          "Economy System",
          "Custom Games/Mini-games",
          "Server Analytics",
          "Web Dashboard",
          "Custom Features"
        ],
        bgClass: "from-purple-600 to-indigo-500",
        iconClass: "bg-purple-600"
      }
    ],
    minecraft: [
      {
        icon: <FaGamepad size={40} />,
        title: "Basic Minecraft Plugin",
        description: "Simple plugins to enhance gameplay",
        price: "Starts at ₹69",
        features: [
          "Basic Commands",
          "Simple Mechanics",
          "Configuration Options",
          "Permission System",
          "Documentation",
          "Installation Support"
        ],
        bgClass: "from-green-600 to-emerald-500",
        iconClass: "bg-green-600"
      },
      {
        icon: <FaGamepad size={40} />,
        title: "Advanced Minecraft Plugin",
        description: "Complex mechanics and gameplay enhancements",
        price: "Custom Quote",
        features: [
          "Custom GUI Menus",
          "Database Integration",
          "Advanced Mechanics",
          "Custom Events",
          "Economy Integration",
          "Multi-server Support",
          "Comprehensive Documentation"
        ],
        bgClass: "from-emerald-600 to-green-500",
        iconClass: "bg-emerald-600"
      },
      {
        icon: <FaGamepad size={40} />,
        title: "Custom Game Mode",
        description: "Complete custom game modes or server mechanics",
        price: "Custom Quote",
        features: [
          "Unique Gameplay",
          "Multiple Integrated Systems",
          "Custom Items & Blocks",
          "Advanced Player Progression",
          "Server-wide Game Mechanics",
          "Anti-cheat Integration",
          "Web Integration Options"
        ],
        bgClass: "from-teal-600 to-emerald-500",
        iconClass: "bg-teal-600"
      }
    ]
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Service Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-800/50 rounded-full">
            <button
              onClick={() => setActiveTab('webdev')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'webdev'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('discord')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'discord'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Discord Bots
            </button>
            <button
              onClick={() => setActiveTab('minecraft')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'minecraft'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Minecraft Plugins
            </button>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden bg-gray-900/70 backdrop-blur-md border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col"
            >
              <div className={`p-6 bg-gradient-to-r ${service.bgClass}`}>
                <div className={`w-16 h-16 ${service.iconClass} rounded-2xl flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
                <div className="mt-4 font-bold text-white text-xl">{service.price}</div>
              </div>
              <div className="p-6 flex-grow">
                <h4 className="text-white font-medium mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-800">
                <Link
                  href="/contact"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Request Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 