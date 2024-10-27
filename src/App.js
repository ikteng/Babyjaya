// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === 'contact') {
                setCurrentPage('contact');
            } else {
                setCurrentPage('home');
            }
        };

        // Add event listener for hash change
        window.addEventListener('hashchange', handleHashChange);

        // Call it initially
        handleHashChange();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="app">
            <Header />
            {currentPage === 'home' && <Home />}
            {currentPage === 'contact' && <Contact />}
            <Footer /> {/* Add the Footer component here */}
        </div>
    );
};

export default App;
