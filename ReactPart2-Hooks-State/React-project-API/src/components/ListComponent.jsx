import React, { useState, useEffect } from 'react';

const ListComponent = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.ts4u.us/api/course/get?type=program")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, []);

    console.log(data.success);
    return (
        <div>
            {data.map((item, index) => (
                <p key={index}>{item.success}</p>
            ))}

        </div>
    )
}
export default ListComponent;