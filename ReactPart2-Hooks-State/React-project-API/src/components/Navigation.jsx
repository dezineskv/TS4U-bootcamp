import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <>
        <ul style={{listStyle: 'none'}}>
            <Link to="/">
            <li>New Home Page Route</li></Link>
            <Link to="/counters"><li>Counter</li></Link>
            <Link to="/people"><li>People Page</li></Link>

            </ul>
            </>
      )
    }
    
export default Navigation