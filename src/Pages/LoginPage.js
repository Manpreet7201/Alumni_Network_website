import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Header from '../Components/Header';
import  Footer from '../Components/Footer';
import '../CSS/LoginPage.css';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showReset, setShowReset] = useState(false);

  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');

  const navigate = useNavigate();

  const toggleResetForm = () => {
    setShowReset(!showReset)
  }

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   if(username === 'admin' && password === 'password123') {
  //     alert('Login Successfully!');
  //     navigate('/');
  //   }else{
  //     alert('Invalid username or password.')
  //   }
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post('http://localhost:5002/signup/login', {
        email: email, // Match the backend "email" field
        password: password,
      });

       // Store login state
    // localStorage.setItem('isLoggedIn', 'true');
    // localStorage.setItem('userEmail', email); // Optional for later use
    // alert('Login successful!');

      // If login is successful
      alert('Login successful!');
      console.log('Token:', response.data.token); // You can store this token in localStorage or context for future requests
      localStorage.setItem('isLoggedIn', 'true');
      // localStorage.setItem('useEmail', email);
      navigate('/alumni-profile', { state: { email: email } });
    } catch (error) {
      // Handle login failure
      if (error.response) {
        alert(error.response.data.message || 'Invalid username or password.');
      } else {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
      }
    }
  };


  const handleResetSubmit = async (event) => {
    event.preventDefault();
    setResetMessage('');
    setResetError('');
    try {
      await axios.post('http://localhost:5002/reset-password', {
        email: resetEmail,
      });
      setResetMessage('A reset link has been sent to your email. Please check your inbox.');
    } catch (error) {
      if (error.response) {
        setResetError(error.response.data.message || 'Error sending reset email.');
      } else {
        console.error('Error resetting password:', error);
        setResetError('An error occurred. Please try again later.');
      }
    }
  };


  return (
    <div>
      <Header />

      <div className="login-container">
        <h2 className='h2login'>LOGIN HERE - </h2>
        <p>If you have already activated your alumni account, please log in with your information below. (Need an account?  <Link to="/signup">Activate it now!</Link>)</p>
        <p><strong>Important</strong> - Current Students do not need to create an account.</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">User Email Id</label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="login-button">LOGIN NOW</button>
          <a href="#reset" onClick={toggleResetForm} className="reset-password-link">Reset Password</a>
        </form>

        {showReset && (
          <div className="reset-password-section" id='reset'>
          <h3 className='h3div'>Reset Password -</h3>
          <p className='pdiv'>In the space below, enter the preferred email address that you have on file with Eternal University. An email message will be sent to this email account containing a link to reset your password. This Reset Password link will be good for 72 hours.</p>
          <form className='reset-form'  onSubmit={handleResetSubmit}>
          <label htmlFor="email">Enter preferred email address:</label>
            {/* <input type="email" placeholder="Email" /> */}
            <input
                type="email"
                id="reset-email"
                placeholder="Email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
            <button type="submit" className='reset-button' >RESET PASSWORD</button>
          </form>
          {resetMessage && <p className="success-message">{resetMessage}</p>}
          {resetError && <p className="error-message">{resetError}</p>}
        </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage