import React, { useState } from 'react';

const TestingInputValue = () => {
    const [inputValue, setInputValue] = useState("");

    const changeStateValue = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <h1>Input Component</h1>
            <input value={inputValue} onChange={changeStateValue} type="text"></input>
            <p>{inputValue}</p>

        </div>
    )
}

export default TestingInputValue;
