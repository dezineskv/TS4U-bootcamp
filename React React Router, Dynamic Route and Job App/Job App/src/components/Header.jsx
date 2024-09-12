import React from 'react'

function Header() {
  return (
    <div style={{backgroundColor: '#062539'}}>
       <h1 style={{marginTop: '0', paddingTop: '30px', color: 'white'}}>TS4U Job Listings</h1> 
       <img src="https://ts4u.us/career/job-vacancy.png" alt="header image" style={{maxWidth: '40%'}}/>
    </div>
  )
}

export default Header