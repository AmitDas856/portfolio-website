import React from 'react';
import { FaLightbulb, FaComments, FaUsers } from 'react-icons/fa';

const AdditionalSkills = () => {
  return (
    <section id="additional-skills" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6 dark:bg-pink-900 dark:text-pink-300">
          <FaLightbulb className="mr-2" />
          Additional Skills
        </div>
        <h2 className="text-3xl font-bold mb-8">Soft Skills & Strengths</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
              <FaLightbulb className="mr-2" />
              Analytical Thinking
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Ability to analyze complex problems and devise effective solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
              <FaComments className="mr-2" />
              Communication
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Skilled in conveying ideas clearly and collaborating with teams effectively.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
              <FaUsers className="mr-2" />
              Team Collaboration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Experience working in diverse teams to achieve project goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
