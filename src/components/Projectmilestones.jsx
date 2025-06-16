import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
 {
    title: "Enhancing Autonomous Vehicle Safety In-Cabin using Integrated Facial and Voice Recognition",
    date: "January 2024 - Present",

    tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLOv5", "Wav2Vec 2.0","Flask", "Machine Learning", "AI", "Real-Time Systems"],
    description: "This project aims to enhance the in-cabin safety of autonomous vehicles by integrating real-time facial and voice recognition systems. The system is designed to detect weapons, unauthorized items, aggressive tones, unauthorized commands, and unusual passenger behavior to provide timely alerts and adaptive responses. Advanced YOLOv5 and CNN-based models were used for object detection, while voice recognition modules based on Wav2Vec 2.0 and DeepSpeech provided speaker verification and tone analysis. The system integrates multiple sensory inputs including cameras, microphones, and environmental sensors to enable real-time decision-making. The CARLA simulator was used to create realistic autonomous vehicle environments for system validation. An Emotion AI model was developed to monitor passengers' stress levels and dynamically adjust cabin features like lighting, temperature, and audio. This system architecture covers ethical decision-making, in-cabin security, and comfort adaptation. Technologies used include Python, TensorFlow, PyTorch, OpenCV, Flask, YOLOv5, Wav2Vec 2.0, and CARLA Simulator. This multi-disciplinary project required significant collaboration across perception systems, AI, user comfort, and security domains, contributing a significant step forward in in-cabin safety innovations for autonomous vehicles."
  },
  {
    title: "Smart Energy Monitoring & Prediction System using ESP32, Firebase, and Machine Learning",
    date: "January 2025 - May 2025",

    tags: ["ESP32", "Firebase", "Node-RED", "Python", "TensorFlow",  "Machine Learning", "MQTT", "IoT", "Real-Time Systems"],
    description: "The Smart Energy Monitoring & Prediction System is an IoT-based project designed to provide real-time energy consumption tracking and future usage predictions. Utilizing the ESP32 microcontroller, the system captures voltage, current, and energy data via physical sensors and transmits the data to the Firebase Realtime Database through Wi-Fi. Node-RED was employed for visualizing real-time data streams and triggering event-based automations. Machine Learning models were integrated using Python and TensorFlow to predict future energy usage patterns and detect anomalies, enhancing energy efficiency and reducing waste. Regression algorithms were applied to historical consumption data, achieving over 90% prediction accuracy. The system was developed to support real-time sensor-to-cloud communication using MQTT protocols, ensuring minimal latency and robust performance. The project also emphasized data security, reliability, and expandability to accommodate additional smart home functionalities. Technologies involved include ESP32, Firebase, Python, Node-RED, TensorFlow, Scikit-Learn, MQTT, and Arduino IDE. This end-to-end solution demonstrates the seamless integration of IoT hardware, real-time cloud databases, and predictive analytics to deliver a smart and responsive energy management platform."
  },
  {
    title: "Jackaloops Solutions - Lanka QR Menus Web-Based Restaurant Management System",
    date: "July 2024 - Present",

    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Responsive Design", "Web Development", "Dashboard", "Security"],
    description: "As part of my internship at Jackaloops Solutions, I contributed to the development and maintenance of the Lanka QR Menus web-based restaurant management system. This platform supports complete menu and banner management with features for adding, updating, filtering, and deleting items in real-time. It offers robust dashboard functionalities tailored for both administrators and restaurant managers, including user management, order processing, promotional banner management, and liquor menu handling. I collaborated on both the front-end and back-end aspects using PHP, JavaScript, MySQL, HTML, and CSS, with a focus on responsive design and security best practices to ensure data integrity and system resilience. I actively participated in performance optimizations, cross-browser compatibility improvements, and the integration of user-friendly interfaces. The system is designed to enhance customer experience through quick QR-based menu access while providing backend teams with comprehensive tools to manage daily operations effectively. Security measures were implemented to prevent unauthorized access and to safeguard sensitive information. The project provided invaluable experience in developing scalable, secure, and high-performance web applications in a real-world setting."
  },

   {
    title: "Student Mental Health Prediction (MindMoodMeter)",
    date: "October 2024 - January 2025",

    tags: ["Python", "Streamlit", "Google Colab", "Supervised Learning", "Decision Tree", "Random Forest", "Data Visualization", "Front-End Development"],
    description: "The Student Mental Health Prediction system, MindMoodMeter, was developed to assess and predict students' stress levels based on behavioral and academic data using supervised learning techniques. The system applies decision tree and random forest classification algorithms to identify stress indicators and classify students into various mental health risk levels. The entire predictive model was developed and deployed using Google Colab and Python, ensuring rapid prototyping and collaborative development. The user interface was designed using Streamlit, enabling seamless interaction with the machine learning models and intuitive visualization of the predictions. The interface provides easy-to-navigate dashboards that allow students and counselors to input data and view mental health predictions in real-time. The system helps to proactively address mental health issues by identifying high-risk students early. Key technologies used include Python, Streamlit, Google Colab, decision tree algorithms, and random forest classifiers. The project emphasized both technical accuracy and user-friendly design, providing a valuable tool for mental health awareness and early intervention within educational institutions."
  },
  {
    title: "Chatbot for Online Customer Support in E-commerce",
    date: "September 2024 - December 2024",

    tags: ["NLP", "Python", "Flask", "TensorFlow", "Keras", "MySQL", "Tkinter", "NLTK", "Chatbot Development"],
    description: "This project focused on creating an AI-powered chatbot for online customer support in an e-commerce platform. The chatbot was developed using Natural Language Processing (NLP) techniques to effectively understand and respond to customer queries in a natural and context-aware manner. Python was used for backend development while the Flask framework enabled API-based chatbot integration. TensorFlow and Keras were employed to handle the machine learning models for intent recognition and response generation. NLTK (Natural Language Toolkit) was used for preprocessing and understanding complex customer inputs. The database component was managed using MySQL to store customer interactions and user profiles, ensuring personalized and continuous support. Tkinter was used to create a simple desktop interface for chatbot testing and demonstration. This chatbot provided 24/7 automated assistance, improving customer engagement and reducing response times. Key achievements included enabling the chatbot to interpret multi-turn conversations, handle ambiguous queries, and guide customers efficiently through the purchasing process. This project demonstrated strong capabilities in conversational AI, backend integration, and real-time customer support solutions."
  },
  {
    title: "Eye Care Management System",
    date: "August 2024 - November 2024",

    tags: ["React", "MongoDB", "Express", "Node.js", "Bootstrap", "HTML", "JavaScript", "Full-Stack Development"],
    description: "The Eye Care Management System was a full-stack web application developed to streamline blog management and patient engagement in an eye care clinic environment. The system allowed for creating, editing, updating, and deleting blog posts, providing both administrators and users with seamless content management capabilities. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the system also featured a responsive design powered by Bootstrap and was optimized for smooth user interactions. Visual Studio Code and IntelliJ IDEA were used as the primary development environments. The backend was structured to ensure data security and efficient CRUD operations, while the frontend was designed for an intuitive user experience. This project not only improved the clinic’s online presence but also served as a training ground in managing dynamic web content and integrating complex backend functionalities. The system can easily be extended to include appointment booking and patient record management, showcasing its flexibility and scalability."
  },
  {
    title: "Online Education Platform (MAD Project)",
    date: "July 2024 - October 2024",

    tags: ["Kotlin", "Firebase", "Android Studio", "Figma", "Mobile App Development", "Quizzes", "Education Technology"],
    description: "The Online Education Platform, developed as part of a Mobile Application Development (MAD) project, was designed to enhance interactive learning for students through quizzes and real-time assessments. The platform, built in Kotlin using Android Studio, provided an intuitive interface for adding, updating, and deleting quizzes, allowing educators to manage learning materials effectively. Firebase served as the backend database, enabling real-time updates, user authentication, and quiz data synchronization across devices. The design was carefully crafted in Figma to ensure a smooth and visually appealing user experience. The project significantly improved mobile learning engagement by providing immediate feedback on quiz performance, secure user sessions, and interactive quiz customization for teachers. This system showcased the ability to combine mobile development, cloud integration, and responsive design in a scalable educational solution."
  },
  {
    title: "Computer Part Store System",
    date: "May 2024 - July 2024",

    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PhpStorm", "XAMPP", "Web Development"],
    description: "The Computer Part Store System was a web-based platform developed to streamline the management of computer hardware sales, inventory tracking, and user feedback collection. The system was built using PHP for backend logic, MySQL for database management, and HTML, CSS, and JavaScript for frontend development. It allowed users to browse products, provide feedback, and enabled administrators to manage inventory, track orders, and update system details. Key contributions included designing the database schema, developing SQL scripts, and contributing to the overall system normalization and user management features. PhpStorm and XAMPP were used to develop and locally deploy the application. This project enhanced my skills in relational database design, front-end and back-end integration, and effective team collaboration in developing a complete web application."
  },
  {
    title: "Online Medical Portal (IWT Project – Group Leader)",
    date: "February 2024 - April 2024",

    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PhpStorm", "XAMPP", "Web Development", "User Management"],
    description: "The Online Medical Portal was developed as part of an Information and Web Technology (IWT) group project where I served as the group leader. This system provided comprehensive user management features, including patient appointment booking, doctor searching, profile management, and CRUD operations for appointments. Developed using PHP and MySQL, with frontend design in HTML, CSS, and JavaScript, the platform supported seamless user interaction and efficient database communication. PhpStorm and XAMPP were used for coding and testing the system in a local environment. The project aimed to simplify the process of scheduling medical consultations while providing administrators with control over doctor listings and appointment records. I led the team in system architecture, task allocation, and debugging while contributing significantly to the user management modules. This project honed my leadership, project coordination, and full-stack development skills in a real-world healthcare simulation."
  }

];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" },
  }),
};

function ProjectMilestones() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <div className="py-10 px-2 md:px-10 min-h-screen ">
      <h2 className="text-3xl font-bold mb-8 text-white">
        <span className="border-green-400 pb-1">PROJECT MILESTONES</span>
      </h2>
      <div className="relative w-full flex flex-col items-center">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-300 z-0" style={{ transform: "translateX(-50%)" }} />
        <div className="w-full flex flex-col gap-16">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="relative w-full flex flex-col md:flex-row items-center"
              style={{ minHeight: "150px" }}
            >
              {idx % 2 === 0 ? (
                <>
                  <motion.div
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="w-full md:w-[45%] flex justify-end items-center z-20 cursor-pointer"
                    onClick={() => setSelectedMilestone(m)}
                  >
                    <div className="bg-gradient-to-r from-gray-800 to-green-800 rounded-xl shadow-lg p-6 text-white w-[400px] h-[220px] flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                       
                        <div className="text-xs mb-2">
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {m.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  <div className="hidden md:flex flex-col items-center absolute left-1/2 z-10" style={{ transform: "translateX(-50%)" }}>
                    <div className="w-4 h-4 rounded-full bg-green-800 border-4 border-white shadow-lg" />
                  </div>
                  <div className="hidden md:block w-1/2" />
                </>
              ) : (
                <>
                  <div className="hidden md:block w-1/2" />
                  <div className="hidden md:flex flex-col items-center w-0 z-10">
                    <div className="w-4 h-4 rounded-full bg-green-800 border-4 border-white shadow-lg" />
                  </div>
                  <motion.div
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="w-full md:w-[45%] flex justify-start items-center z-20 md:ml-12 cursor-pointer"
                    onClick={() => setSelectedMilestone(m)}
                  >
                    <div className="bg-gradient-to-r from-green-800 to-gray-800 rounded-xl shadow-lg p-6 text-white w-[400px] h-[220px] flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{m.title}</h3>                        
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {m.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              )}

              {/* Mobile version */}
              <div className="md:hidden flex flex-col items-center w-full mb-4">
                <div className="w-4 h-4 rounded-full bg-green-600 border-4 border-white shadow-lg mb-2" />
                <motion.div
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="w-full flex justify-center z-20 cursor-pointer"
                  onClick={() => setSelectedMilestone(m)}
                >
                  <div className="bg-gradient-to-r from-gray-800 to-green-800 rounded-xl shadow-lg p-6 text-white w-full h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {m.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-white/20 px-2 py-1 rounded text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
<AnimatePresence>
  {selectedMilestone && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50"
      onClick={() => setSelectedMilestone(null)}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-tr from-gray-800 via-green-800 to-green-600 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-green-700"
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide">{selectedMilestone.title}</h3>
        <div className="mb-3 text-white  font-semibold">Project Description: <span className="text-indigo-100">{selectedMilestone.mark}</span></div>
        <div className="mb-6 text-indigo-200 leading-relaxed">{selectedMilestone.description}</div>
        <div className="flex gap-3 flex-wrap mb-8">
          {selectedMilestone.tags.map((tag, i) => (
            <span key={i} className="bg-green-700 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setSelectedMilestone(null)}
          className="bg-green-700 hover:bg-green-900 active:bg-green-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors duration-300 ease-in-out"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}

export default ProjectMilestones;
