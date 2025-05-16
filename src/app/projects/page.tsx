import Projects from "@/components/Projects";
import { Metadata } from "next";
import { FaStar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Ayush Sonkar",
  description: "Browse through the portfolio of projects by Ayush Sonkar - Web Development, Discord Bots and Minecraft Plugins",
};

export default function ProjectsPage() {
  const testimonials = [
    {
      client: "John Smith",
      company: "E-Commerce Inc.",
      content: "Ayush delivered an exceptional e-commerce website that exceeded our expectations. His attention to detail and commitment to quality are remarkable. Our sales have increased by 40% since the launch!",
      project: "Online Store",
      rating: 5
    },
    {
      client: "Sarah Johnson",
      company: "Learning Hub",
      content: "Working with Ayush was a pleasure from start to finish. He took the time to understand our educational platform needs and delivered a solution that our students love. Highly recommended!",
      project: "Educational Platform",
      rating: 5
    },
    {
      client: "Michael Brown",
      company: "Discord Community",
      content: "The custom Discord bot Ayush created for our community is impressive. It has significantly improved moderation efficiency and member engagement. He's responsive and professional.",
      project: "Moderation Bot",
      rating: 5
    },
    {
      client: "Emily Davis",
      company: "Minecraft Server Owner",
      content: "Ayush developed a custom plugin for our Minecraft server that perfectly matched our requirements. The quality of the code and his understanding of what we needed was outstanding.",
      project: "Custom Minecraft Plugin",
      rating: 5
    }
  ];
  
  return (
    <div className="pt-24">
      <Projects />
      
      {/* Project Stats */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Project Statistics</h2>
            <p className="section-subtitle mx-auto">
              A summary of my development journey and accomplishments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">200+</div>
              <p className="text-gray-300 font-medium">Websites Developed</p>
              <p className="text-gray-400 text-sm mt-2">From simple landing pages to complex web applications</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">30+</div>
              <p className="text-gray-300 font-medium">Discord Bots</p>
              <p className="text-gray-400 text-sm mt-2">Custom functionality for diverse server needs</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">25+</div>
              <p className="text-gray-300 font-medium">Minecraft Plugins</p>
              <p className="text-gray-400 text-sm mt-2">Enhancing gameplay and server management</p>
            </div>
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2">100%</div>
              <p className="text-gray-300 font-medium">Client Satisfaction</p>
              <p className="text-gray-400 text-sm mt-2">Committed to delivering exceptional results</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle mx-auto">
              What clients say about their experience working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-medium">{testimonial.client}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-right">
                    <span className="text-purple-400">Project:</span>
                    <p className="text-gray-300">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Featured Case Studies</h2>
            <p className="section-subtitle mx-auto">
              In-depth look at some of my most complex and impactful projects.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-white mb-4">E-Commerce Platform Redesign</h3>
                <p className="text-gray-300 mb-6">
                  A complete overhaul of an existing e-commerce platform that was facing performance issues and an outdated user interface. The client needed a modern, responsive design with improved functionality.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Challenges</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Migrating existing product data (10,000+ SKUs)</li>
                      <li>Implementing a new payment gateway</li>
                      <li>Improving site performance and load time</li>
                      <li>Enhancing mobile shopping experience</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Solutions</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Built a custom data migration tool</li>
                      <li>Implemented Stripe payment integration</li>
                      <li>Optimized images and implemented lazy loading</li>
                      <li>Created a responsive mobile-first design</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Results</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>40% increase in mobile conversions</li>
                      <li>65% faster page load time</li>
                      <li>30% reduction in cart abandonment</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">React.js</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">Node.js</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">Stripe API</span>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 h-[350px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                <div className="text-white/90 text-6xl">E-Commerce</div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2">
                <h3 className="text-2xl font-semibold text-white mb-4">Discord Community Management Bot</h3>
                <p className="text-gray-300 mb-6">
                  A gaming community with over 50,000 members needed a comprehensive Discord bot to automate moderation, manage roles, and enhance user engagement.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Challenges</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Handling high message volume and user interactions</li>
                      <li>Creating automated moderation features</li>
                      <li>Implementing a leveling system for engagement</li>
                      <li>Integration with external game APIs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Solutions</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>Built with Discord.js with optimized event handling</li>
                      <li>Implemented AI-based toxic message detection</li>
                      <li>Created a database-backed XP and leveling system</li>
                      <li>Integrated with multiple game APIs for stats</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Results</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                      <li>80% reduction in manual moderation time</li>
                      <li>50% increase in user engagement</li>
                      <li>25% growth in server membership</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">Discord.js</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">Node.js</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">RESTful APIs</span>
                </div>
              </div>
              
              <div className="order-1 h-[350px] bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                <div className="text-white/90 text-6xl">Discord Bot</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 