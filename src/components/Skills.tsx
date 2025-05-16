'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaHtml5, FaCss3, FaJs, FaServer, FaCloud, FaMobile, FaCode } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiUnity, SiCplusplus, SiPhp, SiMysql, SiFlutter } from 'react-icons/si';

const Skills = () => {
  useEffect(() => {
    // AOS library initialization could go here if needed
  }, []);

  // Skill categories with their respective skills
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
        { name: "CSS3", icon: <FaCss3 className="text-blue-500" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 90 },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 85 },
        { name: "Python", icon: <FaPython className="text-yellow-300" />, level: 80 },
        { name: "PHP", icon: <SiPhp className="text-purple-400" />, level: 75 },
        { name: "Java", icon: <FaJava className="text-red-400" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 85 },
        { name: "MySQL", icon: <SiMysql className="text-blue-300" />, level: 80 },
      ]
    },
    {
      title: "Game & App Development",
      skills: [
        { name: "Unity", icon: <SiUnity className="text-gray-300" />, level: 75 },
        { name: "C#", icon: <FaCode className="text-purple-500" />, level: 80 },
        { name: "C++", icon: <SiCplusplus className="text-blue-400" />, level: 70 },
        { name: "Flutter", icon: <SiFlutter className="text-cyan-400" />, level: 65 },
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 85 },
        { name: "Server Management", icon: <FaServer className="text-gray-400" />, level: 80 },
        { name: "Cloud Services", icon: <FaCloud className="text-blue-300" />, level: 75 },
        { name: "Database Design", icon: <FaDatabase className="text-orange-400" />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Proficient in 23+ programming languages and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-800 pb-3">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-xl">{skill.icon}</div>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-10">Additional Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Discord.js", icon: <FaCode /> },
              { name: "Minecraft Plugin Dev", icon: <FaCode /> },
              { name: "RESTful APIs", icon: <FaServer /> },
              { name: "GraphQL", icon: <FaDatabase /> },
              { name: "AWS", icon: <FaCloud /> },
              { name: "UI/UX Design", icon: <FaMobile /> },
              { name: "Responsive Design", icon: <FaHtml5 /> },
              { name: "Version Control", icon: <FaCode /> },
              { name: "Performance Optimization", icon: <FaJs /> },
              { name: "SEO", icon: <FaCode /> },
              { name: "Testing", icon: <FaCode /> },
              { name: "DevOps", icon: <FaServer /> },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-gray-800/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-2xl text-purple-400 mb-3 flex justify-center">
                  {skill.icon}
                </div>
                <div className="text-gray-300 text-sm">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 