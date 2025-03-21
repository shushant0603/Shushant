import React from 'react';

import '../stylesheets/header.css';

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "/icons/linkedin.png" },
  { name: "Twitter", href: "#", icon: "/icons/twitter.png" },
  { name: "GitHub", href: "#", icon: "/icons/github.png" },
  { name: "CV", href: "#", icon: "/icons/cv.png" },
];

const Header = () => {
  return (
    <header className="header">
      
      <h1 className="title">Hi, I'm Shushant Kumar 👋</h1>
      <div className="right-section">
        <ul className="social-list"> 
           {socialLinks.map((link, index) => (
            <li key={index} className="social-item">
              <a href={link.href} className="social-link" aria-label={link.name}>
                <span className="tooltip">{link.name}</span>
                <img src={link.icon} alt={link.name} className="icon" />
              </a>
            </li>
          ))}
        </ul>
        <p className="email">
          <a href="mailto:shushantkumar0625@gmail.com" className="email-link">
            shushantkumar0625@gmail.com
          </a>
        </p>
      </div>
    
    </header>
  );
};

export default Header;
