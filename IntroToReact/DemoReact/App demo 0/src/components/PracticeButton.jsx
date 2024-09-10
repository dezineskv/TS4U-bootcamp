import React, { useState } from 'react';


function PracticeButton({ message }) {

  const handleClick = () => {
    alert(message);
  };

  return (
    <div style={{marginTop: '20px'}}>
    <button onClick={handleClick}>
      Using props
    </button>
    </div>
  );
}
export default PracticeButton;
