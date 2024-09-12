import { useLocation, useParams } from 'react-router-dom';
import data from "../staticData/people.json"
import {useState, useEffect } from "react";
import Navigation from './Navigation';

const Person = () => {
    const [user, setUser ] = useState([]);
    const { id } = useParams();

    console.log("user", user);

    // const location = useLocation();
    // console.log('location', location);

    useEffect(() => {
        const singleUser = data.users.find((user) => user.id === parseInt(id));
        setUser(singleUser);
    
    }, [id]);
   

  return (
    <>
    <Navigation></Navigation>
    <h1>Person per ID: {id}</h1> 
    
         <div className="user-detail-info"><img src="https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=268&h=220&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="profile image"/>
         <h3 className="user-name">{user.name}</h3>
         <p className="user-username">{user.email}</p>    
         </div>
    </>
  )
}

export default Person