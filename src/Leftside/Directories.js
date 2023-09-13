import React from 'react';
import './Directories.css'; 

const Directories = ({ showMain, activeLink, handleNavClick, toggleMain }) => {
  return (
    <li className="nav-item">
      <a className={`nav-link directories-link ${showMain ? 'active' : ''}`} href="#" onClick={toggleMain}>
        {showMain ? "˅ Directories" : "> Directories"}
      </a>
      {showMain && (
        <ul className="nav flex-column ml-3">
          <li className="nav-item">
            <a
              className={`nav-link custom-nav-link ${activeLink === 'main' ? 'active' : ''}`} 
              href="#"
              onClick={() => handleNavClick('main')}>
              Main
            </a>
          </li>
          <button className="dotted-button">+New</button>
        </ul>
      )}
    </li>
  );
};

export default Directories;
