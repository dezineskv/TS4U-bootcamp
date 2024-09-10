import React, { useState } from 'react';

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <Child message={message} />
  );
}

function Child({ message }) {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}