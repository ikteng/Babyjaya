// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    const handleNavigation = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        window.location.hash = target; // Set the URL hash to navigate
    };

    return (
        <header className="header">
            <h1>BabyJaya</h1>
            <nav>
                <ul>
                    <li><a href="#home" onClick={handleNavigation}>Home</a></li>
                    <li><a href="#contact" onClick={handleNavigation}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
