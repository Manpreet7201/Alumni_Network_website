import React, { useState } from 'react';
import '../CSS/Slider.css'; 

import image1 from '../Assets/Img/pexels-pavel-danilyuk-7944035.jpg';  
import image2 from '../Assets/Img/pexels-uraw-17615709.jpg';
import image3 from '../Assets/Img/pexels-pavel-danilyuk-7943996.jpg';
import image4 from '../Assets/Img/pexels-pavel-danilyuk-7944037.jpg';
import image5 from '../Assets/Img/pexels-pavel-danilyuk-7944122.jpg';

const My_slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);
// currentIndex = 0 and setCurrentIndex is an function that will handle updates
// it will used to chnage the state of currentIndex. Whenever we call setCurrentIndex(newValue), 
//the state will be updated with newValue, and the component will re-render to reflect this change.

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // return ( 
  //   <div className="Container">
  //     {/* <div className="decorative-dots">
  //       <span className="decor-dot1"></span>
  //       <span className="decor-dot2"></span>
  //       <span className="decor-dot3"></span>
  //     </div> */}
  //     <h2>Alumni - Leading the Way!</h2>
  //     <div className='my_button'>
  //       <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  //         Explore Alumni 
  //       </a>
  //   </div>
  //     <div className="Slider">
  //       <div className="Content_box">
  //         <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="Slider_image" />
  //       </div>

  //       <div className="Slider_controls">
  //         <button onClick={handlePrev} className="prev_btn">Previous</button>
  //         <button onClick={handleNext} className="next_btn">Next</button>
  //       </div>

  //       <div className="dots">
  //         {images.map((_, index) => (
  //           <span 
  //           key={index} 
  //           className={`dot ${currentIndex === index ? 'active' : ''}`}
  //           onClick={() => handleDotClick(index)}
  //           ></span>
  //           ))}
  //       </div>
  //     </div>
  //   {/* <div className='my_button'>
  //       <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  //         Explore Alumni 
  //       </a>
  //   </div> */}
  //   </div>
  // );
  return (
    <div className="Container">
      <div className="Header">
        <h2>Alumni - Leading the Way!</h2>
        <div className="my_button">
          <a href="/alumni-connect" rel="noopener noreferrer">
            Explore Alumni
          </a>
        </div>
      </div>
  
      <div className="Slider">
        <div className="Content_box">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="Slider_image" />
        </div>
  
        <div className="Slider_controls">
          <button onClick={handlePrev} className="prev_btn">Previous</button>
          <button onClick={handleNext} className="next_btn">Next</button>
        </div>
  
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default My_slider;
