import React, { useState } from 'react';
import Navigation from './Navigation';

function Counter() {
    const [count, setCount ] = useState(0);

    return (
        <div>
            <Navigation></Navigation>
            <p> Click Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
export default Counter;