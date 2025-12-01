import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Sending simulation (replace with your logic)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "yassinenachat4@gmail.com",
      link: "mailto:yassinenachat4@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+212 653 321215",
      link: "tel:+212653321215"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Rabat, Morocco",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      details: "Yassine Nachate",
      link: "https://www.linkedin.com/in/yassine-nachate-357201229"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      details: "yassinenachate",
      link: "https://github.com/yassinenachate"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have an idea, a project, or just want to talk? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Let’s Stay Connected
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I’m always open to new opportunities and collaborations.
                Whether it’s a freelance project, a full-time position,
                or simply a discussion about web technologies — feel free to contact me.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Networks */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Social Networks
              </h4>
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {social.title}
                    </h4>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {social.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Availability
              </h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white resize-none"
                  placeholder="Describe your project or request..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="mr-2" size={20} />
                  Message sent successfully! I will get back to you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <AlertCircle className="mr-2" size={20} />
                  Error sending message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
