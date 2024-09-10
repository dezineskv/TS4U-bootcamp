import React, { useState } from 'react';
import './App.css'
 
const Nums = () => {
    const [num, setNum] = useState(0);
 
    const handleDoubleClick = () => {
        setNum(num + 2);
    };
 
    return (
        <div className='App'>
            <h2> {num}</h2>
            <button onDoubleClick={handleDoubleClick}>
                Double Click me
            </button>
        </div>
    );
};
 
export default Nums;