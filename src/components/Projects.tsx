'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'website' | 'discord' | 'minecraft' | 'all';
  technologies: string[];
  features: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'website' | 'discord' | 'minecraft'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully-featured e-commerce platform with product management, cart, and checkout functionality.",
      image: "/images/project-1.jpg",
      category: 'website',
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User Authentication", "Product Management", "Shopping Cart", "Payment Processing"],
      demoLink: "https://example.com",
      codeLink: "https://github.com"
    },
    {
      id: 2,
      title: "Educational Platform",
      description: "Online learning platform with course management, video lectures, and student progress tracking.",
      image: "/images/project-2.jpg",
      category: 'website',
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      features: ["Video Streaming", "Course Management", "Student Dashboard", "Analytics"],
      demoLink: "https://example.com",
      codeLink: "https://github.com"
    },
    {
      id: 3,
      title: "Moderation Bot",
      description: "Advanced Discord bot with moderation tools, auto-moderation, and server management features.",
      image: "/images/project-3.jpg",
      category: 'discord',
      technologies: ["Discord.js", "Node.js", "MongoDB"],
      features: ["User Moderation", "Auto-moderation", "Warning System", "Logging"],
      demoLink: "https://discord.com",
      codeLink: "https://github.com"
    },
    {
      id: 4,
      title: "Economy & Games Bot",
      description: "Discord bot with economy system, mini-games, and gambling features to keep server members engaged.",
      image: "/images/project-4.jpg",
      category: 'discord',
      technologies: ["Discord.js", "Node.js", "PostgreSQL"],
      features: ["Currency System", "Mini-games", "Leaderboards", "Daily Rewards"],
      demoLink: "https://discord.com",
      codeLink: "https://github.com"
    },
    {
      id: 5,
      title: "Survival Enhancement",
      description: "Minecraft plugin that enhances survival gameplay with custom items, mobs, and mechanics.",
      image: "/images/project-5.jpg",
      category: 'minecraft',
      technologies: ["Java", "Spigot API", "MySQL"],
      features: ["Custom Items", "Special Mobs", "Enhanced Gameplay", "Unique Mechanics"],
      demoLink: "https://minecraft.net",
      codeLink: "https://github.com"
    },
    {
      id: 6,
      title: "Mini-games Plugin",
      description: "Collection of mini-games for Minecraft servers including parkour, spleef, and more.",
      image: "/images/project-6.jpg",
      category: 'minecraft',
      technologies: ["Java", "Spigot API", "Redis"],
      features: ["Multiple Games", "Leaderboards", "Rewards System", "Party System"],
      demoLink: "https://minecraft.net",
      codeLink: "https://github.com"
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Showcasing some of my best work across different domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-800/50 rounded-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('website')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === 'website'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setFilter('discord')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === 'discord'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Discord Bots
            </button>
            <button
              onClick={() => setFilter('minecraft')}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                filter === 'minecraft'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Minecraft Plugins
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 hover:border-purple-500/30 rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="h-56 relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-blue-600/30 to-purple-600/30 group-hover:opacity-80 transition-all duration-300"></div>
                <div className="h-full w-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-white/90 text-5xl font-bold">{project.title.slice(0, 2)}</div>
                </div>
                
                {/* Links overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600/90 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/90 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                {/* Technologies used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            href="/projects"
            className="inline-block py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 