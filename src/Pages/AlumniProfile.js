import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import '../CSS/AlumniProfile.css';
// import '../CSS/LoginPage.css';
import ImageAvatar from '../Assets/Img/avatar.jpg';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function AlumniProfile() {
  const location = useLocation();
  const { email } = location.state || {};

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // const [liked, setLiked] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        alert('Please log in to access your profile.');
        window.location.href ='/login'; 
    }
}, []);


  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:5002/signup/users/${email}`)
        .then((response) => {
          console.log("Fetched profile data:", response.data);
          setProfile(response.data);
          setFormData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, [email]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>
    No profile data available.
    </div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data being sent:", formData);

    axios
      .put(`http://localhost:5002/signup/users/${email}`, formData)
      .then((response) => {
        setProfile(formData); 
        setIsModalOpen(false); 
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail'); // Optional: Clear email or other user data
    alert('You have been logged out.');
  
    // Redirect to the login page
    window.location.href = '/login';
  };
  

  return (
    <div>
      <Header />
      
      <section className="profile-container">
        <h3 className="h3"> Profile Status </h3>
        <section className="first-container">
          <section className="img-container">
            <img src={ImageAvatar} alt={profile.name} />
          </section>
          <section className="information">
  <h1>{`${profile.firstName.toUpperCase()} ${profile.lastName.toUpperCase()}`}</h1>
  <p>
    <span>Company:</span> <strong>{(profile.companyName || "Not specified").toUpperCase()}</strong>
  </p>
  <p>
    <span>Job Title:</span> <strong>{(profile.currJob || "Not specified").toUpperCase()}</strong>
  </p>
  <p>
    <span>Skills:</span> <strong>{(profile.skills || "Not specified").toUpperCase()}</strong>
  </p>
  <p>
    <span>Location:</span> <strong>{(profile.address || "Not specified").toUpperCase()}</strong>
  </p>
  <p>
    <span>Experience:</span> <strong>{profile.years || 0} YEARS</strong>
  </p>
  <p>
    <span>Mentorship Availability:</span> <strong>{(profile.availability || "Not specified").toUpperCase()}</strong>
  </p>
  <section>
    <h3>Education Details</h3>
    <p>
      <span>Pass-out Year:</span> <strong>{(profile.passYear || "Not specified")}</strong>
    </p>
    <p>
      <span>From -</span> <strong>ETERNAL UNIVERSITY</strong>
    </p>
    <p>
      <span>College -</span> <strong>{(profile.collegeName || "Not specified").toUpperCase()}</strong>
    </p>
    <p>
      <span>Department -</span> <strong>{(profile.programme || "Not specified").toUpperCase()}</strong>
    </p>
  </section>
</section>

        </section>
        <section className="section-intro">
          <h1>A Brief Introduction</h1>
          <section className="brief">
          <p>{profile.summary || "No summary available"}</p>
          </section>
        </section>
        
        <section className="edit-notifications-section">
        <button className="edit-profile-button" onClick={openModal}>Edit Profile</button>
        <button className="notifications-button" onClick={handleLogout} >Log Out</button>
        </section>

      </section>
      {isModalOpen && (
        <div id='OpenModal' className="modal">
          <div className="modal-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className='edit-form'>

            <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName || ''}
                onChange={handleChange}
              />
            </div>
          </div>
            <div className="form-row">
            <div className="form-group">
            <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <label>Job Title</label>
              <input
                type="text"
                name="currJob"
                value={formData.currJob || ''}
                onChange={handleChange}
              />
            </div>
          </div>
            <div className="form-row">
            <div className="form-group">
            <label>Skills</label>
              <input
                type="text"
                name="skills"
                value={formData.skills || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <label>Location</label>
              <input
                type="text"
                name="address"
                value={formData.address || ''}
                onChange={handleChange}
              />
            </div>
          </div>
            <div className="form-row">
            <div className="form-group">
            <label>Experience</label>
              <input
                type="number"
                name="years"
                value={formData.years || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <label>Availability</label>
              <input
                type="text"
                name="availability"
                value={formData.availability || ''}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <h3>Education Details</h3> */}
            <div className="form-row">
            <div className="form-group">
            <label>Pass-out Year</label>
              <input
                type="text"
                name="passYear"
                value={formData.passYear || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
            <label>College Name</label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName || ""}
                onChange={handleChange}
              />
            </div>
          </div>

            <div className="form-row">
            <div className="form-group">
            <label>Department</label>
              <input
                type="text"
                name="programme"
                value={formData.programme || ""}
                onChange={handleChange}
              />
            </div>
          </div>
            <div className="form-row1">
            <div className="form-group1">
            <label>Summary or Brief Introduction</label>
              <textarea name="summary" rows="4" value={formData.summary || ''} onChange={handleChange} />
              <br></br>
            </div>
          </div>
          <div className='form-row'>
          <button type="submit" className='save-btn'>Save</button>
          <button type="button" className='cancel-btn' onClick={closeModal}>Cancel</button>
          </div>

            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default AlumniProfile;
