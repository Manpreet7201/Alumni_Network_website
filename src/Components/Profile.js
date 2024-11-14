import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../CSS/AlumniConnect.css';
import ImageAvatar from '../Assets/Img/avatar.jpg';
import Footer from './Footer';
import Header from './Header';
// import Search from './Search'


function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  const { profile } = location.state || {}; 

  const [liked , setLiked] = useState(false);
  
  const handleHeartClick = ()=> {
    setLiked(!liked)
  };



  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  // Check if profile data is available
  if (!profile) {
    return <div>No profile data available.</div>; 
  }

  return (
    <div>
    <Header/>
    {/* <Search /> */}
    <section className='bback' onClick={() => navigate('/alumni-connect')} >
        &lt; - Back
      </section>
    <section id='SeeProfile' className='profile-container'>
    <h3 className='h3'>Clicked Profile Status</h3>

    <section className='first-container'>
    <section className='img-container'>
    {/* <img src={profile.profile_image_url} alt={profile.name} /> */}
    <img src={ImageAvatar} alt={profile.name} />
    </section>
    <div className='lne'></div>
      <section className='information'>
      <h1>{profile.name}'s Profile</h1>
      <p> <span>Company:</span> {profile.company}</p>
      <p> <span>Job Title:</span> {profile.job_title}</p>
      <p> <span>Skills:</span> {profile.skills.join(', ')}</p>
      <p> <span>Location:</span> {profile.location}</p>
      <p> <span>Experience:</span> {profile.experience_years} years</p>
      <p> <span>Mentorship Availability:</span> {profile.mentorship_availability}</p>
        <section>
        <h3>Education Details</h3>
        <p>{profile.education.years_attended.start_year} - {profile.education.years_attended.end_year}</p>
        <p> <span>From -</span> {profile.education.university}</p>
        <p> <span>Collage -</span> {profile.education.college}</p>
        <p><span>Department -</span> {profile.education.degree}</p>
        </section>
      </section>
    </section>
    <section className='section-intro'>
    <h1>A Brief Introduction</h1>
    <section className='brief'>
      <p>{profile.introduction}</p>
    </section>
    </section>
    <section className='intro-footer'>
        <div className="connect-section">
          <button onClick={openModal} className="connect-button">Connect</button>
        </div>
        {/* <div className="give-heart">
            Give a heart
            <i className="fa fa-heart" aria-hidden="true"></i>
        </div> */}
        <div 
        className="give-heart" 
        onClick={handleHeartClick}
        role="button" 
        tabIndex={0}>
        {liked ? 'You liked this!' : 'Give a heart'}
        <i className={`fa fa-heart ${liked ? 'liked' : ''}`} aria-hidden="true"></i>
       </div>
    </section>

    
    {isModalOpen && (

        <div className="modal">
          <div className="coct-methods-container">
            <button className="close-button" onClick={closeModal}>×</button>
            <h3 className="h3connect">Unlock Opportunities: Reach Out to Our Alumni Network</h3>
            <form className="connect-form">
              <div className='connt-div'>
                <label>Connect via email id - </label>
                <input type="text" value={profile.email} readOnly />
              </div>
              <div className='connt-div'>
                <label>Connect via contact no.</label>
                <input type="text" value={profile.contact_no} readOnly />
              </div>
              <div className='connt-div'>
                <label>Connect via LinkedIn - </label>
                <input type="text" value={profile.linkedin_profile} readOnly />
              </div>
            </form>
          </div>
        </div>

      )}


    </section>
    <Footer/>
    </div>
  );
}

export default Profile;
