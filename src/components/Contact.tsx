'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaDiscord, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: 'web-development'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: 'web-development'
      });
    } catch (err) {
      setError((err as Error).message || 'There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ayushsonkar1269@gmail.com",
      link: "mailto:ayushsonkar1269@gmail.com"
    },
    {
      icon: <FaDiscord />,
      title: "Discord",
      value: "spyddybhaiyt",
      link: "https://discord.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 8076930099",
      link: "tel:+918076930099"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me through any of the following channels. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-5 bg-gray-800/50 backdrop-blur-md rounded-xl border border-purple-500/10 hover:border-purple-500/30 flex items-center gap-4 transition-all duration-300"
                >
                  <div className="text-purple-400 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-4">Service Pricing</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  <span className="text-white font-medium">Web Development:</span> Starting from ₹499
                </p>
                <p>
                  <span className="text-white font-medium">Discord Bots:</span> Starting from ₹69
                </p>
                <p>
                  <span className="text-white font-medium">Minecraft Plugins:</span> Starting from ₹69
                </p>
                <p className="text-sm mt-4">
                  * Prices vary based on project complexity and requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-md border border-purple-500/10 rounded-xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="discord-bot">Discord Bot</option>
                      <option value="minecraft-plugin">Minecraft Plugin</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 