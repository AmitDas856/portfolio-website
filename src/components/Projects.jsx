import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 dark:bg-indigo-900 dark:text-indigo-300">
          <FaProjectDiagram className="mr-2" />
          Projects
        </div>
        <h2 className="text-3xl font-bold mb-10">What I've Built</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-left hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">PPQC – Blockchain-Based Privacy-Preserving Quality Control</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A Python simulation of a mobile crowd-sensing network that uses encryption and a smart contract for quality control of reported data:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
              <li>Contributor anonymity</li>
              <li>Smart contract-based data validation</li>
              <li>Results recorded through a Solidity smart contract</li>
              <li>Enhanced trust and data quality</li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack: Blockchain, Solidity, Smart Contracts, Crowd Sensing</p>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-left hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">Multimodal Biometric Recognition Using Deep Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              A desktop authentication app that fuses several traits, with a reported accuracy above 95%:
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
              <li>Face</li>
              <li>Fingerprint</li>
              <li>Iris</li>
              <li>Ear and palm</li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400">Tech Stack: Python, Keras, OpenCV, CNN, Feature Fusion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
