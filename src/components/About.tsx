'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaCodeBranch, FaServer, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-purple-500/20 p-3 bg-black/30 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30 z-10"></div>
              <div className="h-full w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <div className="text-white/70 text-9xl">AS</div>
              </div>
              
              {/* Experience overlay */}
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md p-5 rounded-xl border border-purple-500/20 z-20">
                <h3 className="text-white font-bold text-xl mb-1">Experience</h3>
                <p className="text-purple-400 font-medium">4+ Years</p>
              </div>
              
              {/* Projects completed overlay */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md p-5 rounded-xl border border-purple-500/20 z-20">
                <h3 className="text-white font-bold text-xl mb-1">Projects</h3>
                <p className="text-blue-400 font-medium">200+ Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Web Developer, Bot Developer, Minecraft Plugin Developer
            </h3>
            <h4 className="text-xl font-medium mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Creating Digital Solutions Since 2020
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a versatile developer with expertise in multiple domains. With a passion for coding and problem-solving, 
              I've helped numerous clients bring their ideas to life through high-quality web applications, Discord bots, 
              and Minecraft plugins.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My goal is to deliver solutions that not only meet but exceed client expectations. 
              I pride myself on clean code, attention to detail, and commitment to creating 
              smooth user experiences across all my projects.
            </p>

            {/* Services overview */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-purple-900/30 rounded-lg text-purple-400">
                  <FaCodeBranch size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Web Development</h4>
                  <p className="text-gray-400 text-sm">Responsive, modern websites</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400">
                  <FaServer size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Discord Bots</h4>
                  <p className="text-gray-400 text-sm">Custom functionality bots</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-green-900/30 rounded-lg text-green-400">
                  <FaCogs size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Minecraft Plugins</h4>
                  <p className="text-gray-400 text-sm">Custom game mechanics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-yellow-900/30 rounded-lg text-yellow-400">
                  <FaServer size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Web Hosting</h4>
                  <p className="text-gray-400 text-sm">Reliable hosting solutions</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                className="py-3 px-6 bg-transparent border border-purple-500/30 hover:border-purple-500 rounded-full text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 