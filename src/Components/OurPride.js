import React, { useState, useEffect, useCallback } from 'react';

import image1 from '../Assets/Img/pexels-pavel-danilyuk-7944035.jpg';  
import image2 from '../Assets/Img/pexels-uraw-17615709.jpg';
import image3 from '../Assets/Img/pexels-pavel-danilyuk-7943996.jpg';
import image4 from '../Assets/Img/pexels-pavel-danilyuk-7944037.jpg';
import image5 from '../Assets/Img/pexels-pavel-danilyuk-7944122.jpg';
import image6 from '../Assets/Img/pexels-pavel-danilyuk-7944035.jpg';

import '../CSS/OurPride.css'; 

function OurPride() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, details: 'Name 1, Graduation year 1, Current Profession - ML Engineer' },
    { src: image2, details: 'Name 2, Graduation year 2, Current Profession - Junior Software Developer' },
    { src: image3, details: 'Name 3, Graduation year 3, Current Profession - ML Engineer' },
    { src: image4, details: 'Name 4, Graduation year 4, Current Profession - Junior Software Developer' },
    { src: image5, details: 'Name 5, Graduation year 5, Current Profession - ML Engineer' },
    { src: image6, details: 'Name 6, Graduation year 6, Current Profession - Junior Software Developer' },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


useEffect(() => {
  const interval = setInterval(() => {
    handleNext();
  }, 3000); 


  return () => clearInterval(interval);
}, [handleNext]); 

  return (
    <div className='PrideSection'>
      <div>
        <h1>Our Prides</h1>
      </div>
      <div className='pride-section'>
        <button onClick={handlePrev} className='slider-btn prev-btn'>&lt;</button>
        <div className='image-container'>
          <img src={images[currentIndex].src} alt={`Alumni ${currentIndex + 1}`} className='my-image' />
          <div className='image-details'>
            <p>{images[currentIndex].details}</p>
          </div>
        </div>
        <button onClick={handleNext} className='slider-btn next-btn'>&gt;</button>
      </div>
    </div>
  );
}

export default OurPride;

