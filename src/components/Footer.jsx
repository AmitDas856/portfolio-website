import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Amit Das. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Designed & built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
