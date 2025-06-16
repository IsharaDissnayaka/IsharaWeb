import React from 'react';
import { motion } from 'framer-motion';


// Import images
import samadhirImg from '../assets/samadhir.jpg';
import lakminiImg from '../assets/lakminiabeywardhana.png';
import ameeshaImg from '../assets/Ameesha.jpg';
import nipunImg from '../assets/Nipun.jpg';
import dinithiImg from '../assets/Dinithi.jpg';
import isharaImg from '../assets/Ishara.png';

const supervisors = [
  {
    name: 'Mr. Samadhi Rathnayake',
    role: 'Supervisor',
    degree: 'Lecturer, Sri Lanka Institute of Information Technology',
    image: samadhirImg,
  },
  {
    name: 'Dr. Lakmini Abeywardhana',
    role: 'Co-Supervisor',
    degree: 'Senior Lecturer, Sri Lanka Institute of Information Technology',
    image: lakminiImg,
  },
];

const researchers = [
  {
    name: 'Ameesha Akalanka',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    image: ameeshaImg,
  },
  {
    name: 'Nipun Ganepola',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    image: nipunImg,
  },
  {
    name: 'Dinithi Thathsarani',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    image: dinithiImg,
  },
  {
    name: 'Ishara Tharindu',
    role: 'Researcher',
    degree: 'Bachelor of Science (Hons) in Information Technology Specializing in Data Science',
    image: isharaImg,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring' } },
  hover: { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' },
};

function Team() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-8 text-white">CHECK OUR TEAM</h2>
      {/* Supervisors Row */}
      <div className="flex justify-center gap-8 mb-8">
        {supervisors.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center border border-zinc-800 min-h-[380px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-70 h-80 object-cover rounded-lg mb-4 border-4 border-zinc-800"
            />
            <div className="text-lg font-semibold text-white">{member.name}</div>
            <div className="text-blue-400 text-sm mb-1">{member.role}</div>
            <div className="text-gray-400 text-xs">{member.degree}</div>
          </motion.div>
        ))}
      </div>
      {/* Researchers Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {researchers.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center border border-zinc-800 min-h-[380px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-70 h-80 object-cover rounded-lg mb-4 border-4 border-zinc-800"
            />
            <div className="text-lg font-semibold text-white">{member.name}</div>
            <div className="text-blue-400 text-sm mb-1">{member.role}</div>
            <div className="text-gray-400 text-xs">{member.degree}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;