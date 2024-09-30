import React from 'react'
import '../CSS/Footer.css'
import { SlLocationPin } from "react-icons/sl";
// import Kalgidhar from '../Assets/Img/kalgidhar.jpg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <a href='https://eternaluniversity.edu.in/' target="_blank" rel="noopener noreferrer" className='.h1'>Eternal University</a>
                    <div className='Location'>
                    <SlLocationPin className='loc'/>
                    <p>Baru Sahib, Sirmour (HP),173101</p>
                    </div>
                    <p>Contact Us -</p>
                    <p>Toll free: 7833911763, 9816406060</p>
                    <p>(9AM to 8PM IST)</p>
                    <p>Email: contact@eternaluniversity.edu.in</p>
                </div>
                <div className="footer-logo">
                    <img src="https://iqwing.s3.ap-south-1.amazonaws.com/cms/results/2024-05/1715844167260.png" alt="Eternal University Logo"/>
                    {/* <div className='my_line'></div>
                    <img src={Kalgidhar} alt="Kalgidhar Trust"/> */}
                </div>
            </div>
            <div className="footer-socials">
                <a href="https://www.facebook.com/eternaluni/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/channel/UC1EGvUDVNjJbS_AGtMKVv1w/videos" target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-youtube"></i></a>
                <a href="https://x.com/Eternal_Univ" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/school/eternal-university-baru-sahib-sirmour" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href='https://www.instagram.com/eternaluniversityofficial/' target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
}

export default Footer