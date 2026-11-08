import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Education = () => {
  const items = [
    {
      degree: 'MSc Data Science and Artificial Intelligence',
      school: 'Sheffield Hallam University, Sheffield, UK',
      years: 'Jan 2026 - Jan 2027',
    },
    {
      degree: 'B.Tech Computer Science & Engineering (Data Science)',
      school: 'Malla Reddy College of Engineering, JNTU(H), Hyderabad, India',
      years: '2021 - 2025 · Grade A',
    },
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 dark:bg-blue-900 dark:text-blue-300">
          <FaUniversity className="mr-2" />
          Education
        </div>
        <h2 className="text-3xl font-bold mb-10">Where I Study</h2>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          {items.map(({ degree, school, years }) => (
            <div key={degree} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1">{degree}</h3>
              <p className="text-gray-700 dark:text-gray-300">{school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
