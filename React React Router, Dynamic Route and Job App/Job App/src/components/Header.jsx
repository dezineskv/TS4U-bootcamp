import React from 'react'
import '../styles/style.css'

function Header() {
  return (
    <div className="bg" style={{backgroundColor: '#062539', marginTop: '0', paddingTop: '0'}}>
       <h1 style={{backgroundColor: '#062539', marginTop: '0', paddingTop: '30px', color: 'white'}}>TS4U Job Listings</h1> 
       <img src="https://ts4u.us/career/job-vacancy.png" alt="header image" style={{backgroundColor: '#062539', maxWidth: '40%'}}/>
    </div>
  )
}

export default Header