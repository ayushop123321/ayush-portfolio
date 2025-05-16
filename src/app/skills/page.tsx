import Skills from "@/components/Skills";
import { Metadata } from "next";
import { FaCode, FaDatabase, FaServer, FaCloud, FaTasks } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Skills | Ayush Sonkar",
  description: "Explore the 23+ technical skills and expertise of Ayush Sonkar - Web Developer, Discord Bot Developer and Minecraft Plugin Developer",
};

export default function SkillsPage() {
  const workProcess = [
    {
      icon: <FaCode className="text-purple-400" />,
      title: "Planning & Analysis",
      description: "I start by thoroughly understanding the requirements and goals of your project, analyzing the scope, and planning the optimal approach."
    },
    {
      icon: <FaDatabase className="text-blue-400" />,
      title: "Design & Architecture",
      description: "Next, I design the architecture and user interface, ensuring the solution will be both technically sound and user-friendly."
    },
    {
      icon: <FaServer className="text-green-400" />,
      title: "Development",
      description: "I implement the solution using the most appropriate technologies, following best practices and maintaining clean, efficient code."
    },
    {
      icon: <FaTasks className="text-yellow-400" />,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing is performed to ensure the solution works flawlessly across all intended platforms and use cases."
    },
    {
      icon: <FaCloud className="text-cyan-400" />,
      title: "Deployment & Support",
      description: "Finally, I deploy the solution and provide ongoing support and maintenance as needed to ensure long-term success."
    }
  ];

  return (
    <div className="pt-24">
      <Skills />
      
      {/* Work Process Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">My Work Process</h2>
            <p className="section-subtitle mx-auto">
              A systematic approach to turning your ideas into reality.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {workProcess.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-3xl relative">
                      {step.icon}
                      <div className="absolute -right-4 md:static w-8 h-8 bg-gray-900 rounded-full border-4 border-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 relative ${
                    index % 2 === 1 ? 'text-right' : 'text-left'
                  }`}>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Continuous Learning Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Continuous Learning</h2>
              <p className="text-gray-300 mb-4">
                The tech industry evolves rapidly, and staying ahead requires constant learning and adaptation. I am committed to continuously expanding my knowledge and skillset.
              </p>
              <p className="text-gray-300 mb-6">
                My approach to learning includes:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <h4 className="text-white font-medium">Daily Practice</h4>
                    <p className="text-gray-400">Consistently working on coding challenges and small projects to refine my skills</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <h4 className="text-white font-medium">Online Courses</h4>
                    <p className="text-gray-400">Regularly taking courses to learn new technologies and techniques</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <h4 className="text-white font-medium">Tech Community</h4>
                    <p className="text-gray-400">Active participation in tech forums and communities to exchange knowledge</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <h4 className="text-white font-medium">Project Experimentation</h4>
                    <p className="text-gray-400">Building experimental projects to test and implement new technologies</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Recently Learned Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">NextJS 14</h4>
                  <p className="text-gray-400 text-sm">App Router, Server Components, and Server Actions</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Typescript</h4>
                  <p className="text-gray-400 text-sm">Advanced types, generics, and type safety</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Framer Motion</h4>
                  <p className="text-gray-400 text-sm">Creating fluid animations and interactions</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Tailwind CSS</h4>
                  <p className="text-gray-400 text-sm">Utility-first CSS framework for rapid UI development</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Currently Learning</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">AI Integration</span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Web3 & Blockchain</span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">In Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Advanced WebGL</span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">Planned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 