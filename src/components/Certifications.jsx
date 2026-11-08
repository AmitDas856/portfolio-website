import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Information Systems Auditing',
      issuer: 'Coursera',
      year: '2024',
      link: '#',
    },
    {
      title: 'Data Science & ML Internship',
      issuer: 'YBI Foundation',
      year: '2024',
      link: '#',
    },
    {
      title: 'Accenture Developer Job Simulation',
      issuer: 'Forage',
      year: '2023',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 dark:bg-purple-900 dark:text-purple-300">
          <FaCertificate className="mr-2" />
          Certifications
        </div>
        <h2 className="text-3xl font-bold mb-10">My Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {certifications.map(({ title, issuer, year, link }, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-1 text-purple-600 dark:text-purple-400">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Issued by <span className="font-medium">{issuer}</span> — {year}
              </p>
              {link !== '#' && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
