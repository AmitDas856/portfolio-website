import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Amit Das
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl drop-shadow-md">
        Motivated Computer Science Student — Blockchain | Machine Learning | Software Development
      </p>

      <a
        href="/AmitDas_Resume.pdf"  // Replace with your actual resume path
        download
        className="inline-flex items-center bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
