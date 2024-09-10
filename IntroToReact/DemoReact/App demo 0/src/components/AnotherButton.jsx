import React, { useState } from 'react';


function AnotherButton({ text }) {

  const changeValue = () => {
    setValue("Different message");
    console.log(text);

  };

  return (
    <div style={{marginTop: '20px'}}>
    <button onClick={changeValue}>
      Different Method
    </button>
    </div>
  );
}
export default AnotherButton;
