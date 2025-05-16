import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Ayush Sonkar",
  description: "Learn more about Ayush Sonkar - Experienced Web Developer, Discord Bot Developer and Minecraft Plugin Developer",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      
      {/* Additional About Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">My Journey</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-medium text-purple-400 mb-2">2020</h3>
                  <p className="text-gray-400">Started my journey as a web developer, creating simple websites and learning the fundamentals.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-purple-400 mb-2">2021</h3>
                  <p className="text-gray-400">Expanded my skills to include Discord bot development and started taking on client projects.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-purple-400 mb-2">2022</h3>
                  <p className="text-gray-400">Learned Minecraft plugin development and began creating custom solutions for servers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-purple-400 mb-2">2023 - Present</h3>
                  <p className="text-gray-400">Continuously expanding my skills and taking on more complex projects across all domains. Successfully completed over 200 websites and helped 30+ clients with Discord bots.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">My Approach</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I believe in creating digital solutions that are not just visually appealing but also functionally robust and user-friendly. My development process emphasizes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><span className="text-white">Understanding your needs</span> - Taking time to thoroughly understand your requirements and expectations</li>
                  <li><span className="text-white">Planning thoroughly</span> - Creating detailed plans and workflows before writing any code</li>
                  <li><span className="text-white">Iterative development</span> - Building in stages with regular feedback loops</li>
                  <li><span className="text-white">Quality assurance</span> - Rigorous testing to ensure everything works flawlessly</li>
                  <li><span className="text-white">Post-launch support</span> - Providing assistance and maintenance after delivery</li>
                </ul>
                <p className="mt-6">
                  This methodical approach ensures that the final product not only meets but exceeds your expectations, providing real value to your business or personal project.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Why Choose Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">200+</div>
                <p className="text-gray-300 font-medium">Websites Completed</p>
                <p className="text-gray-400 text-sm mt-2">Successfully delivered to satisfied clients</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">30+</div>
                <p className="text-gray-300 font-medium">Discord Bot Clients</p>
                <p className="text-gray-400 text-sm mt-2">Custom bots for various purposes</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">100%</div>
                <p className="text-gray-300 font-medium">Client Satisfaction</p>
                <p className="text-gray-400 text-sm mt-2">Committed to exceed expectations</p>
              </div>
            </div>
            <div className="mt-8 text-gray-300">
              <p>
                When you choose my services, you're not just getting a developer – you're getting a dedicated partner who's invested in your success. I take pride in delivering high-quality solutions that help my clients achieve their goals, whether it's a personal website, a business platform, a Discord community bot, or a Minecraft plugin.
              </p>
              <p className="mt-4">
                My diverse skill set across multiple domains allows me to tackle complex projects that require integration between different technologies, providing you with comprehensive solutions rather than piecemeal fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 