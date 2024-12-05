import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    currJob: '',
    skills: '',
    address: '',
    years: 0,
    availability: '',
    passYear: '',
    collegeName: '',
    programme: '',
    summary: '',
    contactNumber: '',
    linkedin: '',
  });

  useEffect(() => {
    // Fetch current profile data
    axios.get('http://localhost:5002/signup/users/user-email@example.com')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5002/signup/users/user-email@example.com', profile)
      .then(response => {
        alert('Profile updated successfully!');
        window.location.href = '/alumni-profile'; // Redirect back to the profile page
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={profile.companyName}
            onChange={handleChange}
          />
        </label>
        {/* Add similar fields for all other editable fields */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
