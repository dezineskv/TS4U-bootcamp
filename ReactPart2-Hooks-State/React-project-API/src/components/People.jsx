import React from 'react'
import data from "../staticData/people.json"
import { Link } from 'react-router-dom';

function People() {
    console.log("data", data);

  return (
    <>
    <h1>Static List of People</h1> 
    <div>
        {data.users.map((user) => (
        <div key={user.id}>
            <Link to={`/user/${user.id}`}><h3>{user.name}</h3>
            </Link>
            <p>{user.email}</p>
        </div>
    ))
    }
    </div>
    </>
  )
}

export default People