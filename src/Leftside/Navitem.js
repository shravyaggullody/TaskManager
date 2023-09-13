import React from 'react';
import './Navitem.css'; 

function Navitem({ activeLink, handleNavClick }) {
  const navItems = [
    { name: "Today's Tasks", key: 'todayTasks' },
    { name: 'All Tasks', key: 'allTasks' },
    { name: 'Important Tasks', key: 'importantTasks' },
    { name: 'Completed Tasks', key: 'completedTasks' },
    { name: 'Uncompleted Tasks', key: 'uncompletedTasks' },
  ];

  return (
    <div>
      {navItems.map((item) => (
        <li key={item.key} className="nav-item">
          <a
            className={`nav-link custom-nav-link ${activeLink === item.key ? 'active' : ''}`}
            href="#"
            onClick={() => handleNavClick(item.key)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </div>
  );
}

export default Navitem;
