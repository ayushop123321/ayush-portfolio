import Contact from "@/components/Contact";
import { Metadata } from "next";
import { FaCheck } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | Ayush Sonkar",
  description: "Get in touch with Ayush Sonkar for your web development, discord bot, or minecraft plugin projects",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to questions you may have about my services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">General Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2">What are your working hours?</h4>
                  <p className="text-gray-400">
                    I typically work Monday to Friday, 9 AM to 6 PM (IST). However, I'm flexible and can accommodate different time zones for meetings and communication.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">How long does it take to complete a project?</h4>
                  <p className="text-gray-400">
                    Project timelines vary based on complexity. A simple website might take 1-2 weeks, while a complex web application or Discord bot could take 4-8 weeks. I'll provide a specific timeframe after understanding your requirements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Do you offer maintenance and support?</h4>
                  <p className="text-gray-400">
                    Yes, I offer maintenance packages for websites and applications. For Discord bots and Minecraft plugins, I typically include a support period with the initial delivery and can arrange extended support as needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Can I request modifications after project completion?</h4>
                  <p className="text-gray-400">
                    Absolutely! Minor revisions are usually included in the project scope. For larger changes or feature additions, we can discuss a fair rate for the additional work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Service-Specific Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-2">What's included in the website development package?</h4>
                  <p className="text-gray-400">
                    My website packages typically include design, development, mobile responsiveness, basic SEO setup, and contact form functionality. Additional features like e-commerce, user authentication, or custom APIs are available at different price points.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Can my Discord bot handle high-traffic servers?</h4>
                  <p className="text-gray-400">
                    Yes, I design Discord bots with scalability in mind. They can handle servers with tens of thousands of members and high message volumes through efficient code and proper optimization.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Do Minecraft plugins work on different server versions?</h4>
                  <p className="text-gray-400">
                    I can develop plugins compatible with specific Minecraft versions or design them to work across multiple versions. This will be discussed during the requirements phase to ensure compatibility with your server setup.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-400">
                    I accept payments via PayPal, bank transfer, and other major payment methods. For larger projects, I typically request a 50% deposit upfront with the remainder due upon completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Me Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Work With Me?</h2>
            <p className="section-subtitle mx-auto">
              What sets my services apart from others.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expertise Across Domains</h3>
              <p className="text-gray-400">
                With skills in web development, Discord bots, and Minecraft plugins, I offer comprehensive solutions that can integrate seamlessly across platforms.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client-Centric Approach</h3>
              <p className="text-gray-400">
                I prioritize clear communication, prompt responses, and a collaborative process that keeps you informed and involved throughout the project.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality and Reliability</h3>
              <p className="text-gray-400">
                Each project receives my full attention to detail, clean code practices, and thorough testing to ensure a polished, reliable final product.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center text-green-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Affordable Pricing</h3>
              <p className="text-gray-400">
                Competitive rates with flexible packages designed to accommodate different budget levels without compromising on quality.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-600/20 rounded-xl flex items-center justify-center text-yellow-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Timely Delivery</h3>
              <p className="text-gray-400">
                I respect deadlines and keep projects on schedule, providing regular updates and transparent timelines throughout the development process.
              </p>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center text-red-400 text-2xl mb-6">
                <FaCheck />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
              <p className="text-gray-400">
                The relationship doesn't end at project delivery. I provide support, maintenance, and assistance to ensure long-term success for your project.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Ready to discuss your project? Let's create something amazing together!
            </p>
            <a 
              href="#contact" 
              className="py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 inline-block"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 