import React, { useState, useEffect } from 'react';
import './App.css';

function App()  {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.ts4u.us/api/course/get?type=program")
        .then((res) => res.json())
        .then((data) => setData(data.courses))
        .catch((err) => console.log(err));
    }, []);

    console.log(data.courses);
    return (
        <>
        <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
            {data.map((item, index) => (
                <div key={item._id} style={{textAlign: 'center', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '30px', marginBottom: '20px'}}>
                  <h3>{item.meta.title}</h3>
                  <p>{item.meta.description}</p>
                  <p style={{fontSize: '12px'}}>{item.shortDetail}</p>
                </div>
            ))}
           </div>

        </>
    )
}
export default App;