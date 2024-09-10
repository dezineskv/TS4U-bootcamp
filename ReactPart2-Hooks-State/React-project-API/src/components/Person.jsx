import { useParams } from 'react-router-dom';
import data from "../staticData/people.json"
import {useState, useEffect } from "react";
import Navigation from './Navigation';

const Person = () => {
    const [user, setUser ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const singleUser = data.users.find((user) => user.id === parseInt(id));
        setUser(singleUser);
    
    }, [id])
   
    console.log("user", user);

  return (
    <>
    <Navigation></Navigation>
    <h1>Person per ID: {id}</h1> 
    {user && (
            <div>
                <h3>{user.name}</h3>
            <p>{user.email}</p>
            </div>
        )}
    </>
  )
}

export default Person