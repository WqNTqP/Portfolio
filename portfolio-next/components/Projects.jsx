import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const projects = [
    {
      title: 'Online Internship Monitoring System',
      description: 'A comprehensive web-based system for managing and monitoring student internships. Features include student attendance tracking, host training establishment assignment, and coordinator dashboard for efficient internship data management.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'jQuery', 'HTML/CSS'],
      highlights: ['Time-in/Time-out Tracking', 'Student Record Management', 'HTE Assignment System', 'Dashboard Analytics'],
      icon: '📊',
      demoLink: 'https://internconnect-kjzb.onrender.com/',
      videoDemo: 'https://youtu.be/J9cEu6J61QA',
      gradient: 'bg-blue-500',
    },
    {
      title: 'Task Manager System',
      description: 'A modern task management application built with Django REST Framework. Users can create, update, and manage tasks efficiently with a clean and intuitive interface for improved productivity.',
      technologies: ['Python', 'Django REST Framework', 'JavaScript', 'HTML/CSS'],
      highlights: ['CRUD Operations', 'Task Prioritization', 'User Authentication', 'Responsive UI'],
      icon: '✓',
      gradient: 'bg-green-500',
    },
    {
      title: 'Stock Price Prediction System',
      description: 'A machine learning-based application using linear regression to predict stock prices. The system processes historical stock data and provides accurate predictions based on user-selected dates.',
      technologies: ['Python', 'ONNX', 'Google Colab', 'Pandas', 'scikit-learn'],
      highlights: ['ML Model Training', 'Data Analysis', 'Price Forecasting', 'CSV Data Processing'],
      icon: '📈',
      gradient: 'bg-purple-500',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Explore my recent work showcasing modern web development, database management, and machine learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card fade-in-section ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-soft card-hover overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Project header with gradient */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-5xl animate-pulse-gentle">{project.icon}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                    <div className="w-16 h-1 bg-white/70 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className={`mb-6 leading-relaxed text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className={`font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Key Highlights:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 group">
                        <span className={`text-blue-600 mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                        <span className={`${isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm hover:shadow-md hover:scale-105 transition-all duration-200 border ${isDarkMode ? 'from-blue-900 to-blue-800 text-blue-200 border-blue-700' : 'from-blue-100 to-blue-200 text-blue-800 border-blue-200'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.demoLink && (
                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hover inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-lg">🌐</span>
                      Live Web Demo
                    </a>
                    {project.videoDemo && (
                      <a
                        href={project.videoDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hover inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <span className="text-lg">🎥</span>
                        Video Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
