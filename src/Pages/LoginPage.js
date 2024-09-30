import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import  Footer from '../Components/Footer';
import '../CSS/LoginPage.css';

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showReset, setShowReset] = useState(false);

  const navigate = useNavigate();

  const toggleResetForm = () => {
    setShowReset(!showReset)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    if(username === 'admin' && password === 'password123') {
      alert('Login Successfully!');
      navigate('/');
    }else{
      alert('Invalid username or password.')
    }
  }

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2 className='h2login'>LOGIN HERE - </h2>
        <p>If you have already activated your alumni account, please log in with your information below. (Need an account?  <Link to="/signup">Activate it now!</Link>)</p>
        <p><strong>Important</strong> - Current Students do not need to create an account.</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} required/>
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
          <form className='reset-form'>
          <label htmlFor="email">Enter preferred email address:</label>
            <input type="email" placeholder="Email" />
            <button type="submit" className='reset-button' >RESET PASSWORD</button>
          </form>
        </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage