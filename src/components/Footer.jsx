import React from 'react';
import logo from "../assets/Logo.png";
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-zinc-950 text-neutral-200 pt-12 pb-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">

          {/* Brand & Contact Info */}
          <div className="flex-1">
            <div className="flex items-center mb-4 space-x-3">
              <img src={logo} className="h-10" alt="ManthraX Logo" />
              <span className="text-2xl font-bold tracking-wide text-green-400">Ishara Dissanayaka</span>
            </div>
            <p className="text-sm"><span className="font-semibold">Phone:</span> +94 784416209</p>
            <p className="text-sm">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:ishara2244tharidu@gmail.com" className="hover:text-green-400">
                ishara2244tharidu@gmail.com
              </a>
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/IsharaDissnayaka" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ishara2000" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
              <li><a href="#document" className="hover:text-green-400 transition">Documents</a></li>
              <li><a href="#milestones" className="hover:text-green-400 transition">Milestones</a></li>
              <li><a href="#domain" className="hover:text-green-400 transition">Domain</a></li>
              <li><a href="#team" className="hover:text-green-400 transition">Team</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services Summary */}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-4 text-white">What I Do</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Research</li>
              <li>Web Development</li>
              <li>Machine Learning</li>
              <li>Cloud</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-zinc-700" />

        <div className="text-center text-sm text-gray-500">
          © 2025 <a href="https://www.linkedin.com/in/ishara2000/" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400">IsharaTharindu™</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
