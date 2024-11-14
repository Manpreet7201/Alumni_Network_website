import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/AlumniProfile.css';
import ImageAvatar from '../Assets/Img/avatar.jpg';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function AlumniProfile() {
  const location = useLocation();
  // const navigate = useNavigate();
  const { profile } = location.state || {}; 

  const [formData, setFormData] = useState({
    name: profile.name || '',
    company: profile.company || '',
    job_title: profile.job_title || '',
    skills: profile.skills.join(', ') || '',
    location: profile.location || '',
    experience_years: profile.experience_years || '',
    mentorship_availability: profile.mentorship_availability || '',
    introduction: profile.introduction || '',
    email: profile.email || '',
    contact_no: profile.contact_no || '',
    linkedin_profile: profile.linkedin_profile || '',
    education: {
      years_attended: {
        start_year: profile.education.years_attended.start_year || '',
        end_year: profile.education.years_attended.end_year || '',
      },
      university: profile.education.university || '',
      college: profile.education.college || '',
      degree: profile.education.degree || '',
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('education.')) {
      const key = name.split('.')[1];
      setFormData((prevState) => ({
        ...prevState,
        education: {
          ...prevState.education,
          [key]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the updated profile data
    console.log('Updated Profile Data:', formData);
  };

  if (!profile) {
    return <div>No profile data available.</div>; 
  }

  return (
    <div>
      <Header />
      {/* <section className='back' onClick={() => navigate('/alumni-connect')} >
        &lt; - Back
      </section> */}
      <section id='SeeProfile' className='profile-container'>
        <h3 className='h3'>Edit Your Profile</h3>
        <section className='first-container'>
          <section className='img-container'>
            <img src={ImageAvatar} alt={formData.name} />
          </section>
          <div className='lne'></div>
          <section className='information'>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
              </label>
              <label>
                Job Title:
                <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} />
              </label>
              <label>
                Skills:
                <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
              </label>
              <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
              </label>
              <label>
                Experience (years):
                <input type="number" name="experience_years" value={formData.experience_years} onChange={handleChange} />
              </label>
              <label>
                Mentorship Availability:
                <input type="text" name="mentorship_availability" value={formData.mentorship_availability} onChange={handleChange} />
              </label>
              <h3>Education Details</h3>
              <label>
                From Year:
                <input type="text" name="education.years_attended.start_year" value={formData.education.years_attended.start_year} onChange={handleChange} />
              </label>
              <label>
                To Year:
                <input type="text" name="education.years_attended.end_year" value={formData.education.years_attended.end_year} onChange={handleChange} />
              </label>
              <label>
                University:
                <input type="text" name="education.university" value={formData.education.university} onChange={handleChange} />
              </label>
              <label>
                College:
                <input type="text" name="education.college" value={formData.education.college} onChange={handleChange} />
              </label>
              <label>
                Degree:
                <input type="text" name="education.degree" value={formData.education.degree} onChange={handleChange} />
              </label>
              <label>
                A Brief Introduction:
                <textarea name="introduction" value={formData.introduction} onChange={handleChange} />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>
              <label>
                Contact No.:
                <input type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} />
              </label>
              <label>
                LinkedIn Profile:
                <input type="text" name="linkedin_profile" value={formData.linkedin_profile} onChange={handleChange} />
              </label>
              <button type="submit">Save Changes</button>
            </form>
          </section>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default AlumniProfile;
