'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaDiscord, FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix rain animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let cols = Math.floor(canvas.width / 20);
    let ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function drawMatrix() {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      
      const context = ctx;
      if (!context) return;
      
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, currentCanvas.width, currentCanvas.height);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';

      for (let i = 0; i < cols; i++) {
        const text = String.fromCharCode(Math.floor(Math.random() * 128));
        const x = i * 20;
        const y = ypos[i];
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          ypos[i] = 0;
        } else {
          ypos[i] = y + 20;
        }
      }
    }

    const interval = setInterval(drawMatrix, 50);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / 20);
      ypos = Array(cols).fill(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background canvas for matrix effect */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-900/20 to-black/90 z-10" />

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-purple-400 font-medium mb-2">Hi, I am</h4>
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-4">
                Ayush <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Sonkar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x">
                  Full-Stack Developer
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                With over 23+ coding skills and experience in developing 
                <span className="text-white font-medium"> 200+ websites</span>, 
                <span className="text-white font-medium"> Discord bots</span>, and 
                <span className="text-white font-medium"> Minecraft plugins</span>. 
                Delivering exceptional digital solutions that exceed client expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Hire Me 
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/projects"
                  className="py-3 px-8 bg-transparent border border-purple-500/30 hover:border-purple-500 rounded-full text-white font-medium transition-all duration-300 flex items-center justify-center"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  200+
                </h3>
                <p className="text-gray-400 text-sm mt-2">Websites Developed</p>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  30+
                </h3>
                <p className="text-gray-400 text-sm mt-2">Discord Bots</p>
              </div>
              <div className="text-center p-4 bg-gray-900/50 backdrop-blur-md rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  23+
                </h3>
                <p className="text-gray-400 text-sm mt-2">Coding Skills</p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
              {/* Placeholder for profile image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                {/* Replace with actual image */}
                <div className="text-white/70 text-8xl animate-float">
                  <FaLaptopCode />
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute top-0 left-10 bg-purple-900/80 p-4 rounded-xl backdrop-blur-md animate-float">
                <FaCode className="text-3xl text-white" />
              </div>
              <div className="absolute bottom-10 right-0 bg-blue-900/80 p-4 rounded-xl backdrop-blur-md animate-float" style={{ animationDelay: '2s' }}>
                <FaDiscord className="text-3xl text-white" />
              </div>
              <div className="absolute top-1/2 right-10 bg-cyan-900/80 p-4 rounded-xl backdrop-blur-md animate-float" style={{ animationDelay: '1s' }}>
                <FaLaptopCode className="text-3xl text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-purple-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 