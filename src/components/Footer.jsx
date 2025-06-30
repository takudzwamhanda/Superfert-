import React from 'react';

const links = [
  "Home",
  "Who We Are",
  "Where to Buy",
  "Bindura Processing Plant",
  "Tools & Services",
  "News & Events",
  "Contact Us"
];

const Footer = () => (
  <div className="footer">
    {[...Array(4)].map((_, idx) => (
      <div className="Links" key={idx}>
        <h3>Quick Links</h3>
        <ul>
          {links.map((link, i) => (
            <a href="#" key={i}>{link}</a>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Footer; 