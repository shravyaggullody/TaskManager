import React from 'react';

function FormattedDate({ formattedDate }) {
  const dateStyle = {
    color: 'grey', 
    fontSize: '12px', 
  };

  return <p style={dateStyle}>{formattedDate}</p>;
}

export default FormattedDate;
