import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS'],
      color: 'bg-blue-600',
    },
    {
      category: 'Web Technologies',
      skills: ['React', 'jQuery', 'AJAX', 'REST API', 'Bootstrap'],
      color: 'bg-green-600',
    },
    {
      category: 'Database & Tools',
      skills: ['MySQL', 'phpMyAdmin', 'XAMPP', 'Git', 'GitHub'],
      color: 'bg-purple-600',
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Django REST Framework', 'Express.js', 'Next.js'],
      color: 'bg-orange-600',
    },
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md hover:shadow-lg transition`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`${category.color} text-white px-4 py-2 rounded-full font-semibold text-sm hover:opacity-80 transition`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md`}>
          <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Other Competencies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Problem-solving & Debugging</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Team Collaboration</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>System Design & Architecture</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>IT Support & Troubleshooting</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Time Management</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Attention to Detail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
