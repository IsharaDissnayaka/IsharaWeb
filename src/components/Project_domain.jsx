import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    label: 'LITERATURE SURVEY',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">LITERATURE SURVEY</h3>
       The development of autonomous vehicles (AVs) hinges on advancements in perception, decision-making, and safety systems. Deep learning has transformed perception, particularly through object detection models like YOLOv5, which offer high-speed and accurate identification of road elements. However, challenges remain in handling occlusions and dense environments. Transformer-based models such as DETR and TransVOD improve object detection by leveraging attention mechanisms, while integration with Graph Neural Networks (GNNs) enhances spatial understanding in complex scenarios. Motion prediction, traditionally driven by LSTM networks, now benefits from Transformer architectures and self-supervised learning frameworks like Recurrent Vision Transformers (RVTs). For navigation and collision avoidance, Deep Reinforcement Learning (DRL) models like DQN and PPO offer adaptive policy learning, outperforming traditional PID controllers in dynamic settings. Hybrid DRL-MPC approaches combine learning-based adaptability with control-theoretic reliability. Ethical decision-making in AVs is addressed through Reinforcement Learning frameworks that encode moral principles into reward structures. Additionally, driver monitoring systems using Eye Aspect Ratio (EAR), facial tracking, and haptic feedback ensure driver attentiveness. In-cabin security is fortified using Convolutional Neural Networks (CNNs) for object detection, voice analysis for aggression and anomaly detection, and edge computing for real-time response. The literature identifies the need for integrated solutions that unify perception, decision-making, and in-cabin monitoring.
    
      </>
    ),
  },
  {
    label: 'RESEARCH PROBLEM',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH PROBLEM</h3>
         
       
          Despite advancements in autonomous vehicle (AV) technologies, several critical issues hinder their safe and widespread deployment. Most existing AV systems focus on isolated functionalities—such as perception or navigation—failing to deliver an integrated solution that ensures ethical, secure, and intelligent operation across diverse driving environments. Current object detection systems, while powerful, struggle in occluded or dense urban settings. Similarly, motion prediction algorithms often lack the ability to model complex interactions among dynamic agents. Collision avoidance strategies, though improved with reinforcement learning, do not account for ethical dilemmas or long-term planning. Furthermore, in-cabin monitoring systems are often limited in scope, lacking the ability to detect potential threats such as weapons or aggressive behavior in real-time. These limitations make it difficult to build trust in AVs and reduce their potential to prevent accidents or respond intelligently in emergencies. The research problem addressed in this paper is the absence of a comprehensive, ethically aware, real-time intelligent AV system that integrates advanced perception, moral decision-making, and in-cabin monitoring under one framework. Addressing this problem is essential to ensure not only the physical safety of passengers and pedestrians but also to support ethical reasoning and intelligent threat detection in complex and unpredictable environments.
        
      </>
    ),
  },
  {
    label: 'RESEARCH GAP',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH GAP</h3>
         
        
          Existing autonomous vehicle (AV) research primarily focuses on individual components such as object detection, collision avoidance, or driver alertness. However, few systems attempt to unify these domains into a cohesive framework capable of intelligent, ethical, and secure decision-making in real-time. Deep learning models like YOLO have shown success in object detection, but they struggle with occlusion and contextual understanding. Transformer models have emerged to address this but remain computationally intensive and limited in spatial reasoning unless combined with Graph Neural Networks. Similarly, reinforcement learning models like PPO and DQN are efficient for navigation but rarely incorporate ethical considerations. Ethical decision-making in AVs remains largely conceptual, with few practical implementations that balance real-time control and moral reasoning. In-cabin security systems often rely on single-modal inputs, lacking the robustness provided by multimodal integration. Furthermore, traditional methods fail to integrate low-level control (e.g., steering, braking) with high-level cognitive tasks like threat detection or ethical maneuvering. This gap—the lack of a scalable, ethically-informed, multi-modal AI system capable of real-time AV perception, planning, and passenger monitoring—represents a critical barrier to real-world deployment. Manthra-X addresses this void by integrating perception, ethical AI, and in-cabin intelligence into a unified, simulation-validated autonomous framework.
        
      </>
    ),
  },
  {
    label: 'RESEARCH OBJECTIVE',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">RESEARCH OBJECTIVE</h3>
       
       
          The primary objective of this research is to develop Manthra-X, an integrated autonomous vehicle framework that addresses core limitations in perception, decision-making, collision avoidance, and in-cabin safety. The project is structured around the following goals:

 <br></br>1. Improve Object Detection and Perception Accuracy: Deploy hybrid models combining YOLOv5, Transformers, and Graph Neural Networks to accurately detect and track multiple dynamic objects in real-time under various traffic conditions.

<br></br>2.Enhance Ethical Decision-Making: Implement Reinforcement Learning-based ethical frameworks that allow AVs to make morally appropriate choices in complex, life-critical scenarios involving pedestrians, passengers, and other vehicles.

<br></br>3.Optimize Collision Avoidance Strategies: Use Deep Reinforcement Learning (DQN, PPO) in tandem with PID controllers to learn adaptive, safe navigation policies that reduce collision risks and improve route planning across highway and urban environments.

<br></br>4.Ensure In-Cabin Security and Awareness: Utilize multimodal sensor fusion to detect threats (weapons, aggressive voice tones, unauthorized access) and monitor driver alertness using facial tracking and eyeball movement.

<br></br>5.Validate Performance in Simulated Environments: Leverage the CARLA simulator to test and refine model performance under varying weather, traffic, and lighting conditions.

<br></br>Through these objectives, Manthra-X aims to create a comprehensive, ethical, and intelligent AV platform ready for real-world challenges.
        
      </>
    ),
  },
  {
    label: 'METHODOLOGY',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">METHODOLOGY</h3>
         
       
         The proposed methodology integrates multiple subsystems within Manthra-X using simulation-based development and validation. First, sensor data collection and preprocessing are performed using LIDAR, RADAR, and RGB cameras. These datasets are synchronized and cleaned to eliminate noise. The perception module uses YOLOv5 for object detection, identifying pedestrians, vehicles, and traffic signs. To improve scene understanding and motion prediction, a hybrid Transformer-GNN model is implemented, where Transformers model temporal dependencies and GNNs model spatial relationships. This module is trained and tested using the CARLA simulator, which replicates diverse real-world driving conditions. For collision avoidance, Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO) are used to learn safe driving policies from simulated interactions, while PID controllers are used for low-level controls to maintain stability. A hybrid control approach combines DQN for high-level decisions and PID for precision control. For ethical decision-making, reinforcement learning agents are trained with reward functions incorporating moral principles such as pedestrian safety and passenger preservation. In-cabin monitoring is handled by MediaPipe Face Mesh for eyeball tracking, and CNN and LSTM models for voice and object detection. Real-time threat detection is enabled through edge computing, allowing low-latency alerts. The entire system is validated on metrics such as accuracy, FPS, and ethical alignment in simulation.


       
      </>
    ),
  },
  {
    label: 'TECHNOLOGIES',
    content: (
      <>
        <h3 className="text-lg font-semibold mb-2">TECHNOLOGIES</h3>
        
          Manthra-X integrates a range of cutting-edge technologies to build a unified autonomous vehicle system. For object detection, the project utilizes YOLOv5, a state-of-the-art real-time detection algorithm trained on AV-specific datasets. It is optimized to recognize pedestrians, vehicles, and traffic signs accurately. To enhance scene understanding, Transformer-GNN hybrid models are employed—Transformers for modeling temporal dependencies and Graph Neural Networks (GNNs) for capturing spatial relationships between dynamic objects. These models offer enhanced accuracy in motion prediction and behavior classification. For navigation and collision avoidance, Deep Reinforcement Learning algorithms such as Deep Q-Networks (DQN) and Proximal Policy Optimization (PPO) are used, allowing adaptive policy learning. Traditional PID controllers are integrated for low-level vehicle control to ensure real-time responsiveness. CARLA Simulator is utilized for data generation, training, and performance evaluation under diverse traffic and weather conditions. For in-cabin security, Convolutional Neural Networks (CNNs) are used to detect objects like weapons, while LSTM and RNN-based NLP models handle voice recognition and anomaly detection. MediaPipe is used for driver alertness monitoring via eyeball tracking and facial analysis. Edge computing platforms ensure low-latency processing for real-time threat detection. This multi-tech stack empowers Manthra-X to deliver intelligent, ethical, and secure autonomous mobility.
       
      </>
    ),
  },
];

function Project_domain() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="container mx-auto py-8  ">
      <h2 className="text-3xl font-bold mb-6 text-white">Reserch Project ManthraX</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setSelected(idx)}
            className={`px-4 py-2 rounded transition-colors duration-200 font-semibold
              ${selected === idx
                ? 'bg-green-700 text-white'
                : 'bg-zinc-800 text-gray-200 hover:bg-green-900 hover:text-white'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 text-gray-100 rounded-lg shadow-lg p-6 min-h-[200px]"
        >
          {tabs[selected].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Project_domain;