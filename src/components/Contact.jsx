import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS or Formspree to send form data
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6 dark:bg-red-900 dark:text-red-300">
          <FaEnvelope className="mr-2" />
          Contact Me
        </div>
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
            />
          </label>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">
              Thanks for reaching out! I will get back to you soon.
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center space-x-8 text-red-600 dark:text-red-400">
          <a href="mailto:amitsmily6532@gmail.com" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
          <a href="tel:+917386193731" aria-label="Phone">
            <FaPhone size={28} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/amit123-lab" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
