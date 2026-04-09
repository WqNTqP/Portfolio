import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For static deployment, we'll use formspree or similar
    // This is a placeholder - actual submission would need backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
        <p className={`text-center mb-12 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Feel free to reach out for opportunities or just to say hello!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:charles.kim.emping@gmail.com"
                className="flex items-start hover:text-blue-600 transition"
              >
                <span className="text-2xl mr-4">✉️</span>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>charles.kim.emping@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+639098294986"
                className="flex items-start hover:text-blue-600 transition"
              >
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Phone</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+63 909 829 4986</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kim-charles-emping-149138402/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-blue-600 transition"
              >
                <span className="text-2xl mr-4">💼</span>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>LinkedIn</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>kim-charles-emping</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/WqNTqP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-blue-600 transition"
              >
                <span className="text-2xl mr-4">🐙</span>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>GitHub</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>WqNTqP</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Location</h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Davao City, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Send Me a Message</h3>
            {submitted ? (
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">Your message has been received. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
