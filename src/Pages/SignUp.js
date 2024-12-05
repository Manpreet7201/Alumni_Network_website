// import React from 'react'
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import  Footer from '../Components/Footer'
import '../CSS/LoginPage.css'
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '', 
    programme: '', 
    fatherName: '',
    dob: '',
    passYear: '',
    collegeName: '',
    email: '',
    regNumber: '',
    contactNumber: '',
    address: '',
    password:'',
    currJob: '',
    companyName: '',
    industry: '',
    linkedin: '',
    expLevel: '',
    years: '',
    skills: '',
    location: '',
    availability: '',
    achievements: '',
    summary: ''
  });

  const [errors, setErrors] = useState({});
  const [showPersonalForm , setShowPersonalForm] = useState(true);
  // const navigate = useNavigate();

  // Validate form data
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.firstName) {
      isValid = false;
      errors.firstName = 'First name is required';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'A valid email is required';
    }

    // if (isValid) {
    //   errorElement.classList.remove('active');
    // } else {
    //   errorElement.classList.add('active');
    //   errorElement.innerText = 'Error message here';
    // }

    // if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber)) {
    //   isValid = false;
    //   errors.contactNumber = "Enter a valid 10-digit contact number";
    // }

    // if (!formData.password || formData.password.length < 8) {
    //   isValid = false;
    //   errors.password = 'Password must be at least 8 characters long';
    // }
    
    

    setErrors(errors);
    return isValid;
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if(validateForm()){
      setShowPersonalForm(!showPersonalForm);
    }
  }

  const handlePreviousClick = (e) => {
    e.preventDefault();
    setShowPersonalForm(true);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(validateForm()){
  //     console.log('Form is valid:', formData);
  //     alert("Form is Submitted Successfully.");
  //     navigate('/');
  //   }
  //   else {
  //     alert("Please fill in all required fields correctly.");
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    try {
        const response = await axios.post('http://localhost:5002/signup/users', formData);
        alert(response.data.message); 
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/alumni-profile', { state: { email: formData.email } });
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form.');
    }
};



  return (
    <div>
      <Header />
      <div className="signUp-container">
        <h2 className='h2SignUp'> CREATE YOUR PROFILE HERE - </h2>
        <p>If you have already activated your alum account, please log in with your information. (Already have an account? <Link to="/login">Log in now !</Link>)</p>
        <p><strong>Important</strong> - Current Students do not need to create an account.</p>
        {showPersonalForm ? (
          <>
          <h4>Student’s Personal Details</h4>
        <form className="SignUp-form" onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" >First Name</label>
              <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange}/>
              {errors.firstName && <p className="error active">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange}/>
              {/* {errors.lastName && <p className="error">{errors.lastName}</p>} */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="programme">Name of the Programme</label>
              <select id="programme" name="programme" value={formData.programme} onChange={handleChange} required>
                <option value="">Choose Programme</option>
                <option value="btechcse">B.Tech CSE</option>
                <option value="btechcse-lateral">B.Tech. CSE Lateral/Migrated</option>
                <option value="bca">BCA</option>
                <option value="bsc">B.Sc. (Hons.) Agriculture</option>
                <option value="btech-food-technology">B.Tech. Food Technology</option>
                <option value="bsc-life-sciences">B.Sc. (Hons. with Research) Life Sciences</option>
                <option value="bsc-physical-sciences">B.Sc. (Hons. with Research) Physical Sciences</option>
                <option value="bsc-microbiology">B.Sc. (Hons. with Research) Microbiology</option>
                <option value="bed">B.Ed.</option>
                <option value="bsc-economies">B.Sc. (Hons. with Research) Economics</option>
                <option value="bcom">B.Com. (Hons. with Research)</option>
                <option value="bba">BBA (Hons. with Research)</option>
                <option value="ba-music">B.A. (Hons. with Research) Music</option>
                <option value="ba-liberal-arts">B.A. (Hons. with Research) Liberal Arts</option>
                <option value="bsc-psychology">B.Sc. (Hons. with Research) Psychology</option>
                <option value="blib">B.Lib.</option>
                <option value="bsc-nursing">B.Sc. Nursing</option>
                {/* <option value="">Certificate Course on Counseling (Mental Health & Substance Abuse)</option>
                <option value="btech">Certificate Course in Geriatric Care Assistant</option> */}
              </select>
              {/* {errors.programme && <p className="error">{errors.programme}</p>} */}

            </div>
            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input type="text" id="fatherName" name="fatherName" required value={formData.fatherName} onChange={handleChange} />
              {/* {errors.fatherName} */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" required name="dob" value={formData.dob} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="passYear">Pass out Year</label>
              <input type="number" id="passYear" required name="passYear" value={formData.passYear} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="collegeName">College Name</label>
              <select id="collegeName" name="collegeName" required value={formData.collegeName} onChange={handleChange}>
                <option value=""> Your College Name</option>
                <option value="acet">AKAL COLLEGE OF ENGINEERING & TECHNOLOGY</option>
                <option value="dks">DR. KHEM SINGH GILL AKAL COLLEGE OF AGRICULTURE</option>
                <option value="acbs">AKAL COLLEGE OF BASIC SCIENCES</option>
                <option value="ace">AKAL COLLEGE OF EDUCATION</option>
                <option value="acetcm">AKAL COLLEGE OF ECONOMICS, COMMERCE & MANAGEMENT</option>
                <option value="acass">AKAL COLLEGE OF ARTS & SOCIAL SCIENCES</option>
                <option value="achas">AKAL COLLEGE OF HEALTH & ALLIED SCIENCES</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="email" required  value={formData.email} onChange={handleChange}/>
              {errors.email && <p className="error active">{errors.email}</p>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="regNumber">Reg. Number</label>
              <input type="text" id="regNumber" name="regNumber" required value={formData.regNumber} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" id="contactNumber" name="contactNumber" required value={formData.contactNumber} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row1">
          <div className="form-group1">
            <label htmlFor="address">Permanent Address</label>
            <textarea id="address" name="address" required value={formData.address} onChange={handleChange}/>
          </div>
          <div>
          <button type="button" className="next-button" onClick={handleNextClick}>NEXT -</button>
          </div>
          </div> 
        </form>
          </>
        ): (
          <>
          <h4>Student’s Professional Details</h4>
        <form className="SignUp-form" onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currJob">Current Job Title</label>
              <input type="text" id="currJob" name="currJob" value={formData.currJob} required onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="companyname">Company Name</label>
              <input type="text" id="companyname" name="companyName" value={formData.companyName} required onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="industry">Industry Name</label>
              <select id="industry" name="industry" required value={formData.industry} onChange={handleChange}>
              <option value="">Select Your Industry</option>
              <option value="information-technology">Information Technology</option>
              <option value="software-development">Software Development</option>
              <option value="data-science">Data Science</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="human-resources">Human Resources</option>
              <option value="healthcare">Healthcare</option>
              <option value="engineering">Engineering</option>
              <option value="mechanical-engineering">Mechanical Engineering</option>
              <option value="civil-engineering">Civil Engineering</option>
              <option value="biotechnology">Biotechnology</option>
              <option value="education">Education</option>
              <option value="law">Law</option>
              <option value="business-management">Business Management</option>
              <option value="consulting">Consulting</option>
              <option value="government">Government</option>
              <option value="arts-entertainment">Arts and Entertainment</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="entrepreneurship">Entrepreneurship</option>

            </select>

            </div>
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile Link</label>
              <input type="text" id="linkedin" name="linkedin" required value={formData.linkedin} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" autoComplete="current-password"  required value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error active">{errors.password}</p>}
</div>

            <div className="form-group">
              <label htmlFor="years">Years of Experience</label>
              <input type="number" id="years" name="years" required value={formData.years} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="skills">Key Skills and Expertise</label>
              <input type='text' placeholder='write more than 3' id='skills' name='skills' required value={formData.skills} onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="loc">Location (City, State, Country)</label>
              <input type="text" id="loc" name="location" required value={formData.location} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="availability">Mentorship Availability</label>
              <input id="availability" name="availability" required value={formData.availability} placeholder='yes or no' onChange={handleChange}>
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="achievements">Any Achievements or certifications</label>
              <input type="text" id="achievements" name="achievements" required value={formData.achievements} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row1">
          <div className="form-group1">
            <label htmlFor="summary">A brief summary of experience</label>
            <textarea id="summary" name="summary" required value={formData.summary} onChange={handleChange}/>
          </div>
          <div className='buttons'>
          <button  className='previous-button' onClick={handlePreviousClick}> Previous </button>
          <button type="submit" className="next-button"> Submit </button>
          </div>
          </div> 
        </form>
          </>
        )}

      </div>
      <Footer />
    </div>
  )
}

export default SignUp