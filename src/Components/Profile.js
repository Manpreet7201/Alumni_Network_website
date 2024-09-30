import React from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/AlumniConnect.css';
import ImageAvatar from '../Assets/Img/avatar.jpg';


function Profile() {
  const location = useLocation();

  const { profile } = location.state || {}; 

  // Check if profile data is available
  if (!profile) {
    return <div>No profile data available.</div>; 
  }

  return (
    <section id='SeeProfile' className='Profile-container'>
    <h3>Clicked Profile Status</h3>

    <section className='first-container'>
    <section>
    {/* <img src={profile.profile_image_url} alt={profile.name} /> */}
    <img src={ImageAvatar} alt={profile.name} />
    </section>
    <div>Line</div>
    <section>Information
      <h1>{profile.name}'s Profile</h1>
      <p>Company: {profile.company}</p>
      <p>Job Title: {profile.job_title}</p>
      <p>Skills: {profile.skills.join(', ')}</p>
      <p>Location: {profile.location}</p>
      <p> Experience: {profile.experience_years}</p>
      <p> Mentorship Availability: {profile.mentorship_availability}</p>
      <section>
        <h3>Education Detaisl</h3>
        <p>{profile.education.start_year} - {profile.education.end_year}</p>
        <p>From {profile.education.university}</p>
        <p>Collage -  {profile.education.college}</p>
        <p>Department -  {profile.education.degree}</p>
      </section>
    </section>
    </section>

    <section>
      <h1>A Brief Introduction</h1>
      <p>{profile.introduction}</p>
    </section>
      
    </section>
  );
}

export default Profile;
