import React from 'react';
import { FaCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6 dark:bg-green-900 dark:text-green-300">
          <FaTools className="mr-2" />
          My Skills
        </div>
        <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center font-semibold text-lg mb-2">
              <FaCode className="mr-2 text-blue-500" />
              Programming Languages
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Python, Java, C, C++</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center font-semibold text-lg mb-2">
              <FaTools className="mr-2 text-purple-500" />
              Frameworks & Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Django, Git, GitHub, VS Code, SDLC, OOP</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center font-semibold text-lg mb-2">
              <FaBrain className="mr-2 text-pink-500" />
              ML & Data Science
            </h3>
            <p className="text-gray-700 dark:text-gray-300">NumPy, Pandas, Scikit-learn, TensorFlow</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center font-semibold text-lg mb-2">
              <FaDatabase className="mr-2 text-yellow-500" />
              Databases & BI Tools
            </h3>
            <p className="text-gray-700 dark:text-gray-300">SQL, DBMS, Power BI, Excel</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="flex items-center font-semibold text-lg mb-2">
              💡 Soft Skills
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Analytical Thinking, Communication, Problem Solving, Team Collaboration</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
