import { motion } from "framer-motion";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c8tofh5', 'template_avtp1zj', form.current, {
        publicKey: 'B1nIyQNJNo9i3PeSb',
      })
      .then(
        () => {
          alert('✅ Your message has been sent successfully!');
          window.location.reload();
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className=" min-h-screen py-20 px-4">
      <section className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/10">
        <h2 className="mb-8 text-4xl font-bold text-center text-green-700">Contact Us</h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-300 mb-10 text-lg"
        >
          Have a question, feedback, or just want to say hi? Fill out the form below and we’ll get back to you.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-200">Your Email</label>
            <input
              type="email"
              name="from_name"
              id="from_name"
              placeholder="name@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="to_name" className="block mb-2 text-sm font-medium text-gray-200">Your Name</label>
            <input
              type="text"
              name="to_name"
              id="to_name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message here..."
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 transition-colors duration-200 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            🚀 Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
};

export default ContactUs;
