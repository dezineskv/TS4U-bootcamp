import React from 'react'
import data from "../staticData/people.json"
import { Link } from 'react-router-dom';
import '../styles/people.css';

function People() {
    console.log("data", data);

  return (
    <>
    <h1>Static List of People</h1> 
    <div className="user-list">
        {data.users.map((user) => (
                <div className="user-detail-info"
 key={user.id}>
    <div><img src="https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=268&h=220&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="profile image"/></div>
            <Link to={`/user/${user.id}`}><h3 className="user-name">{user.name}</h3>
            </Link>
            <p className="user-username">{user.email}</p>
        </div>      
    ))
    }
    </div>

    </>
  )
}

export default People