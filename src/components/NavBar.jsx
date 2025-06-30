import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setMenuOpen(!menuOpen);
  
  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
    
    // Force scroll to top with multiple approaches
    setTimeout(() => {
      // Try multiple scroll methods
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'  // Force immediate scroll
      });
      
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // If those didn't work, try setting scroll position directly
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100); // Small delay to ensure navigation has completed
  };

  return (
    <nav className="navbar">
      <button className="nav-toggle" onClick={handleToggle} aria-label="Toggle navigation">
        <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a onClick={() => handleNavigation('/PageOne')} className="nav-link" style={{ cursor: 'pointer' }}>Home</a></li>
        <li><a onClick={() => handleNavigation('/PageThree')} className="nav-link" style={{ cursor: 'pointer' }}>About Us</a></li>
        {/* 'Crops & Fertilizers' and 'Services' visually identical to nav links, not clickable, bold and black */}
        <li><span className="nav-link" tabIndex="0" style={{ cursor: 'not-allowed', fontWeight: 'bold', color: 'black' }}>Crops & Fertilizers</span></li>
        <li><span className="nav-link" tabIndex="0" style={{ cursor: 'not-allowed', fontWeight: 'bold', color: 'black' }}>Services</span></li>
        <li><a onClick={() => handleNavigation('/PageTwo')} className="nav-link" style={{ cursor: 'pointer' }}>News & Events</a></li>
      </ul>
    </nav>
  );
};

export default NavBar; 