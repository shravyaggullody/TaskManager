import React from 'react';
import AddNewTask from './Addnewtask'; 
import Navitem from './Navitem'; 
import Directories from './Directories'; 

const Left = ({ activeLink, handleNavClick, showMain, toggleMain }) => {
  return (
    <div className="col-md-3 col-lg-2 d-md-block bg-light-gray">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <div className="nav-item">
            <h4 className="mt-3 mb-3 custom-title">TO-DO LIST</h4>
          </div>
          <AddNewTask />
          <br />
          <Navitem activeLink={activeLink} handleNavClick={handleNavClick} />
          <Directories showMain={showMain} activeLink={activeLink} handleNavClick={handleNavClick} toggleMain={toggleMain} />
        </ul>
      </div>
    </div>
  );
};

export default Left;
