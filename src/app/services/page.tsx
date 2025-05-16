import Services from "@/components/Services";
import { Metadata } from "next";
import { FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Ayush Sonkar",
  description: "Explore the professional services offered by Ayush Sonkar - Web Development, Discord Bots and Minecraft Plugins",
};

export default function ServicesPage() {
  const comparisons = [
    {
      category: "Web Development",
      features: [
        { name: "Responsive Design", basic: true, advanced: true, custom: true },
        { name: "SEO Optimization", basic: true, advanced: true, custom: true },
        { name: "Contact Form", basic: true, advanced: true, custom: true },
        { name: "Custom Domain", basic: true, advanced: true, custom: true },
        { name: "CMS Integration", basic: false, advanced: true, custom: true },
        { name: "E-Commerce Functionality", basic: false, advanced: true, custom: true },
        { name: "User Authentication", basic: false, advanced: true, custom: true },
        { name: "Database Integration", basic: false, advanced: true, custom: true },
        { name: "API Integration", basic: false, advanced: true, custom: true },
        { name: "Custom Backend Logic", basic: false, advanced: true, custom: true },
        { name: "Payment Gateway", basic: false, advanced: true, custom: true },
        { name: "Admin Dashboard", basic: false, advanced: true, custom: true },
        { name: "Analytics Integration", basic: false, advanced: true, custom: true },
        { name: "Mobile App Version", basic: false, advanced: false, custom: true },
        { name: "Custom Features", basic: false, advanced: false, custom: true },
      ],
      plans: [
        { name: "Basic", price: "₹499", highlight: false },
        { name: "Advanced", price: "Custom", highlight: true },
        { name: "Enterprise", price: "Custom", highlight: false },
      ]
    }
  ];

  return (
    <div className="pt-24">
      <Services />
      
      {/* Service Comparison */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Service Comparison</h2>
            <p className="section-subtitle mx-auto">
              Compare different service tiers to find what best suits your needs.
            </p>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className="mb-20">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">{comparison.category}</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left text-white font-semibold border-b border-gray-800">Features</th>
                      {comparison.plans.map((plan, planIndex) => (
                        <th 
                          key={planIndex} 
                          className={`py-4 px-6 text-center border-b border-gray-800 ${
                            plan.highlight ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20' : ''
                          }`}
                        >
                          <div className="text-white font-semibold">{plan.name}</div>
                          <div className={`mt-1 ${plan.highlight ? 'text-purple-400 font-bold' : 'text-gray-400'}`}>{plan.price}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.features.map((feature, featureIndex) => (
                      <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-gray-800/30' : ''}>
                        <td className="py-3 px-6 text-gray-300 border-b border-gray-800">{feature.name}</td>
                        <td className="py-3 px-6 text-center border-b border-gray-800">
                          {feature.basic ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className={`py-3 px-6 text-center border-b border-gray-800 ${
                          comparison.plans[1].highlight ? 'bg-gradient-to-r from-purple-600/10 to-blue-600/10' : ''
                        }`}>
                          {feature.advanced ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center border-b border-gray-800">
                          {feature.custom ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="py-4 px-6 border-t border-gray-800"></td>
                      {comparison.plans.map((plan, planIndex) => (
                        <td 
                          key={planIndex} 
                          className={`py-4 px-6 text-center border-t border-gray-800 ${
                            plan.highlight ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20' : ''
                          }`}
                        >
                          <Link
                            href="/contact"
                            className={`py-2 px-4 rounded-full text-white text-sm font-medium transition-all duration-300 ${
                              plan.highlight 
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/20' 
                                : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                          >
                            Get Started
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}
          
          {/* Custom Services */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Need Something Specific?</h3>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
              Don't see exactly what you need? I offer fully customized solutions tailored to your specific requirements. 
              Let's discuss your project and create a custom package that perfectly fits your needs and budget.
            </p>
            <Link
              href="/contact"
              className="py-3 px-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 inline-block"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              From inquiry to delivery - a simple, transparent process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 text-center relative">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Initial Consultation</h3>
              <p className="text-gray-400">We discuss your requirements, goals, and budget to understand your project needs.</p>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 text-center relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Proposal & Agreement</h3>
              <p className="text-gray-400">I provide a detailed proposal with pricing, timeline, and deliverables for your approval.</p>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 text-center relative">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Development & Updates</h3>
              <p className="text-gray-400">I begin work on your project, providing regular updates and milestones for your feedback.</p>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-white mb-3">Delivery & Support</h3>
              <p className="text-gray-400">Final delivery of your project with documentation and post-launch support as needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 