import React from 'react'
import '../CSS/Header.css'; 
import {NavLink , useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }
return (
    <header className="header">
        <div className="top-bar">
            <div className="login">
                <button onClick={handleLogin} > LOGIN </button>
            </div>
        </div>
        <div className='bottom-bar'>
            <div className="logo">
                <span className='eternal'>ETERNAL</span> <br/>
                <span className="alumni-hub">AlumniHub</span>
            </div>
            <nav className="nav-bar">
                <ul>
                    {/* <li><a href="">Home</a></li>
                    <li><a href="#">Career Resources</a></li>
                    <li><a href="#">Alumni Connect</a></li>
                    <li><a href="#">Alumni Profile</a></li> */}
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/career-resources">Career Resources</Link></li>
                    <li><Link to="/alumni-connect">Alumni Connect</Link></li>
                    <li><Link to="/alumni-profile">Alumni Profile</Link></li> */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/career-resources">Career Resources</NavLink>
                    <NavLink to="/alumni-connect">Alumni Connect</NavLink>
                    <NavLink to="/alumni-profile">Alumni Profile</NavLink>
                </ul>
            </nav>
        </div>
        <div className='line'></div>
    </header>
);
}

export default Header