import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const experiences = [
    {
      title: 'On-the-Job Training (OJT)',
      company: 'PhilHealth Region XI, Davao',
      period: 'Current',
      responsibilities: [
        'Provide comprehensive IT support across multiple departments',
        'Troubleshoot hardware, software, and network issues',
        'Manage servers including cable organization and network checks',
        'Ensure smooth operation of network systems and IT infrastructure',
        'Develop strong problem-solving and technical communication skills',
      ],
    },
    {
      title: 'Furniture Maker / Assistant',
      company: 'Emping Family Business',
      period: 'Ongoing',
      responsibilities: [
        'Craft and assemble furniture pieces according to specifications',
        'Manage materials and inventory',
        'Ensure quality control and attention to detail',
        'Develop transferable skills in teamwork and time management',
        'Coordinate with team members for efficient production',
      ],
    },
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-8 py-4"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{exp.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                </div>
                <span className={`px-4 py-2 rounded-full font-semibold mt-2 md:mt-0 ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-blue-600 mr-3 font-bold">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Certifications & Credentials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
              <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>SQL Certificate</h4>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Professional SQL proficiency certification</p>
              <a
                href="/Certificate of Completion - SQL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </div>
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
              <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Udemy Certificate 1</h4>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Professional development certification</p>
              <a
                href="/UC-490a02b0-adea-400a-b376-34249c1e4fab.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </div>
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
              <h4 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Udemy Certificate 2</h4>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Professional development certification</p>
              <a
                href="/UC-b223a9e4-73d9-4256-acb5-6880b621adde.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
