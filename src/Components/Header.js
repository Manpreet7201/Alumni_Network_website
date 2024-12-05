import React, { useState, useEffect } from 'react';
import '../CSS/Header.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    // Track login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check localStorage for login status on mount
    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(userLoggedIn);
    }, []);

    // Handle Login and Logout
    const handleLogin = () => {
        navigate('/login'); // Redirect to login
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn'); // Clear login state
        alert('You have been logged out.');
        setIsLoggedIn(false); // Update state
        navigate('/'); // Redirect to Home
    };

    return (
        <header className="header">
            <div className="top-bar">
                <div className="login">
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>LOGOUT</button>
                    ) : (
                        <button onClick={handleLogin}>LOGIN</button>
                    )}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="logo">
                    <span className="eternal">ETERNAL</span> <br />
                    <span className="alumni-hub">AlumniHub</span>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career-resources" activeClassName="active">Career Resources</NavLink>
                        </li>
                        <li>
                            <NavLink to="/alumni-connect" activeClassName="active">Alumni Connect</NavLink>
                        </li>
                        {isLoggedIn && ( // Show Alumni Profile link only if logged in
                            <li>
                                <NavLink to="/alumni-profile" activeClassName="active">Alumni Profile</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="line"></div>
        </header>
    );
}

export default Header;
