import React, { useState, useEffect } from 'react';

const ListComponent = () => {

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
        <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}>
            {data.map((item, index) => (
                <div key={item._id} style={{textAlign: 'center', borderStyle: 'solid', borderWidth: '1px', borderColor: 'white', padding: '30px', marginBottom: '20px', marginRight: '20px'}}>
                  <div><img src={item.image} alt="image" className="images" /></div>
                  <h3>{item.meta.title}</h3>
                  <p>{item.meta.shortDescription}</p>
                  <p style={{fontSize: '12px'}}>{item.shortDetail}</p>
                </div>
            ))}
           </div>

        </>
    )
}
export default ListComponent;