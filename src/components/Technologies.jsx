import React from 'react';
import { FaRobot, FaDatabase, FaCloud, FaCode, FaChartBar, FaGlobe, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'AI & Machine Learning',
    icon: <FaRobot className="text-5xl text-cyan-400" />,
    skills: ['Linear Algebra', 'Neural Networks', 'Deep Learning', 'NLP', 'Reinforcement Learning', 'TensorFlow'],
  },
  {
    title: 'Data Analysis & Cloud Computing',
    icon: <FaChartBar className="text-5xl text-yellow-400" />,
    skills: ['Microsoft Excel', 'Power BI','Microsoft Azure', 'AWS (Reading)'],
  },
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-5xl text-green-500" />,
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'Kotlin', 'Express', 'Spring Boot'],
  },
  {
    title: 'Web Development',
    icon: <FaGlobe className="text-5xl text-purple-500" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Streamlit', 'SEO'],
  },
  {
    title: 'Database Management',
    icon: <FaDatabase className="text-5xl text-orange-500" />,
    skills: ['MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'Software Development & Other Skills',
    icon: <FaUsers className="text-5xl text-pink-500" />,
    skills: ['Git', 'GitHub', 'Leadership', 'Communication', 'Creativity', 'Problem-solving', 'Critical Thinking'],
  },
];

const Technologies = () => {
  return (

    
    <div className="justify-items-center border-b border-neutral-800 pb-24 px-4">
       <h1 className="text-3xl font-bold mb-6 text-white">My Skills & Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className=" bg-neutral-900 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {category.icon}
              <h2 className="text-2xl font-semibold text-neutral-100">{category.title}</h2>
            </div>
            <ul className="list-disc list-inside text-neutral-400">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
