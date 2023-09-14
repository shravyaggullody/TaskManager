import React from 'react';
import Searbtn from './Searbtn';
import FormattedDate from './FormattedDate';
import BellIcon from './BellIcon';
import Addnewtask from '../Leftside/Addnewtask';
import './Center.css';

function Center() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search functionality here
  };

  return (
    <div className="col-md-6 col-lg-8 bg-light">
      <div className="d-flex justify-content-between align-items-center">
        <Searbtn handleSubmit={handleSubmit} />
        <FormattedDate formattedDate={formattedDate} />
        <div className="d-flex align-items-center">
          <BellIcon />
          <Addnewtask />
        </div>
      </div>
    </div>
  );
}

export default Center;
