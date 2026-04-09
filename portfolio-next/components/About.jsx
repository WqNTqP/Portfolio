import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const sectionRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get to know the person behind the code and the journey that shaped my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-section">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className={`p-6 rounded-2xl shadow-soft ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-lg mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm <span className="font-semibold text-blue-600">Kim Charles A. Emping</span>, a dedicated and detail-oriented Bachelor of Science in Information Technology student at Holy Cross of Davao College.
                </p>
                <p className={`text-lg mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  With a strong passion for software development and database systems, I bring hands-on experience in building real-world solutions using modern technologies.
                </p>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Through my academic journey and practical experience, I've developed proficiency in modern web technologies and excel at solving complex problems through collaborative teamwork and innovative thinking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className={`bg-gradient-to-br p-4 rounded-xl text-center shadow-soft hover:shadow-md transition-shadow ${isDarkMode ? 'from-gray-700 to-gray-600' : 'from-green-50 to-green-100'}`}>
                <div className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>4+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Years Studying</div>
              </div>
              <div className={`bg-gradient-to-br p-4 rounded-xl text-center shadow-soft hover:shadow-md transition-shadow ${isDarkMode ? 'from-gray-700 to-gray-600' : 'from-blue-50 to-blue-100'}`}>
                <div className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>10+</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="fade-in-section">
            <div className={`bg-white p-8 rounded-2xl shadow-soft card-hover border border-gray-100 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Education</h3>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Bachelor of Science in Information Technology</h4>
                      <p className="text-blue-600 font-semibold">Holy Cross of Davao College</p>
                      <p className={`text-gray-600 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected Graduation: May 2024</p>
                      <p className={`text-gray-500 text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Specializing in web development, database management, and software engineering</p>
                    </div>
                  </div>
                  <div className="ml-2 mt-4 w-px h-8 bg-gradient-to-b from-blue-300 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-800">Senior High School - ABM</h4>
                      <p className="text-green-600 font-semibold">Trento National High School</p>
                      <p className="text-gray-600 text-sm">Accountancy, Business, and Management</p>
                      <p className="text-gray-500 text-sm mt-2">Foundation in business principles and analytical thinking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
