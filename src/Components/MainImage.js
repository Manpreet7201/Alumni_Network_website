import React from 'react'
import '../CSS/Main_Image.css';
import UniversityImg from '../Assets/Img/Eternal-University.jpg';

function MainImage() {
  return (
  <div className="header">
    <img
   
    src={UniversityImg} 
    alt="Campus View"
    className="header-image"/>
    <div className="header-text">Connecting Paths, Creating Success</div>
    </div>
   );
  }

export default MainImage