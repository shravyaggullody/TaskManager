import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Left from './Leftside/Left';
import Center from './Centerside/Center';
import Right from './Rightside/Right';

function App() {
  const [showMain, setShowMain] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMain = () => {
    setShowMain(!showMain);
    setActiveLink(null); 
  };

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Left activeLink={activeLink} handleNavClick={handleNavClick} showMain={showMain} toggleMain={toggleMain} />
          <Center/>
          <Right/>
        </div>
      </div>
    </div>
  );
}

export default App;