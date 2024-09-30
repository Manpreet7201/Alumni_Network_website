import React from 'react'
import Image1 from '../Assets/Img/photo.png'
import '../CSS/TextImage.css'
function TextImage() {
  return (
    <div className='my_Container'>
<div className='Container_Image'>
       <div className='my_image'>
        <img src={Image1} alt='Computer works'></img>
       </div> 
       <div className='my_para'>
        <p>To all who have called <b>Eternal University</b> their home, our 
            journey continues beyond these walls. We are visionaries and 
            trailblazers, constantly seeking new horizons. We embrace 
            curiosity, foster innovation, and strive for excellence in 
            everything we do. Our strength lies in our community—where 
            every connection is a spark, and every conversation is a 
            catalyst for change. United by a common purpose, we are 
            committed to making a lasting impact on the world around us. 
            We are the eternal spirit of growth, learning, and leadership. 
            We are Eternal University alumni.</p>
       </div>
       
    </div>
    <div className='Myline'>
    </div>
    </div>  
  )
}

export default TextImage