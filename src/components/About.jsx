import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 transition duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 dark:bg-blue-900 dark:text-blue-300">
          <FaUserGraduate className="mr-2" />
          About Me
        </div>
        <h2 className="text-3xl font-bold mb-4">Who is Amit Das?</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm a passionate Computer Science graduate from Malla Reddy College of Engineering, Hyderabad. I thrive on exploring and building with emerging technologies like 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Blockchain</span>, 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Machine Learning</span>, and 
          <span className="font-semibold text-blue-600 dark:text-blue-400"> Software Development</span>.
          <br /><br />
          I enjoy solving complex problems, building real-world applications, and continually enhancing my skills in full-stack development. My academic projects focus on secure, scalable solutions in privacy-preserving systems and biometric recognition using deep learning.
          <br /><br />
          I’m also an effective communicator and a collaborative team player, always eager to contribute meaningfully to innovative projects.
        </p>
      </div>
    </section>
  );
};

export default About;
