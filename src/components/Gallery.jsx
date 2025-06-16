import React, { useEffect, useState } from 'react';
import '../style/Gallery.css';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';

const images = [
  {
    src: img1,
    title: 'Silver Jubilee Innovation expo 2025',
    description:
      'This is a project that showcases the innovative solutions developed by our team during the Silver Jubilee Innovation Expo 2025.',
  },
  {
    src: img2,
    title: '',
   description: 'Mathra X is a research project enhancing autonomous vehicle safety through deep learning, ethical navigation, and real-time in-cabin monitoring.',
  },
   {
    
    src: img3,
    title: '',
    description: 'Mathra X focuses on real-time in-cabin security using deep learning, facial emotion recognition, voice anomaly detection, and object tracking to enhance safety in autonomous vehicles .'
  },

  {
    src: img4,
    title: '',
    description: 'The Career Guidance Unit (CGU) at SLIIT supports students in building their careers by offering training programs, career fairs, and industry connections to enhance employability and job readiness. ',
  },
  // Add more images as needed
];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1; // Show one image at a time for a slider effect

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-14 text-white">Creative Hub</h2>
      {visibleImages.map((image, index) => (
        <div key={index} className="gallery-dark-item">
          <img
            src={image.src}
            alt={image.title}
            className="gallery-dark-img"
          />
          <div className="gallery-dark-overlay">
            <h2 className="gallery-dark-title">{image.title}</h2>
            <p className="gallery-dark-desc">{image.description}</p>
          </div>
        </div>
      ))}
      <div className="gallery-dark-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dark-dot ${idx === startIndex ? 'active' : ''}`}
            onClick={() => setStartIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;