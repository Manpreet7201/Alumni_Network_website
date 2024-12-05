import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import '../CSS/AlumniProfile.css';
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
    <h3 className='h3'>{profile.firstName}'s Profile Status</h3>

    <section className='first-container'>
    <section className='img-container'>
    <img src={ImageAvatar} alt={profile.name} />
    </section>
      <section className='information'>
      <h1>{`${profile.firstName.toUpperCase()} ${profile.lastName.toUpperCase()}`} </h1>
      <p> <span>Company:</span> {profile.companyName}</p>
      <p> <span>Job Title:</span> {profile.currJob}</p>
      <p> <span>Skills:</span> {profile.skills}</p>
      <p> <span>Location:</span> {profile.location}</p>
      <p> <span>Experience:</span> {profile.years} years</p>
      <p> <span>Mentorship Availability:</span> {profile.availability}</p>
        <section>
        <h3>Education Details</h3>
        {/* <p>{profile.education.years_attended.start_year} - {profile.education.years_attended.end_year}</p> */}
        <p> <span>Pass Out Year:</span> {profile.passYear}</p>
        {/* <p> <span>From -</span> {profile.education.university}</p> */}
        <p> <span>Collage -</span> {profile.collegeName}</p>
        <p><span>Department -</span> {profile.programme}</p>
        </section>
      </section>
    </section>
    <section className='section-intro'>
    <h1>A Brief Introduction</h1>
    <section className='brief'>
      <p>{profile.summary}</p>
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
                <input type="text" value={profile.contactNumber} readOnly />
              </div>
              <div className='connt-div'>
                <label>Connect via LinkedIn - </label>
                <input type="text" value={profile.linkedin} readOnly />
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
