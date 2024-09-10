import React from 'react'
import Navigation from './Navigation'
import ListComponent from './ListComponent';

function Home() {
  return (
    <>
    <Navigation></Navigation>
    <h2>TS4U Bootcamps</h2>
        <p><a href="https://ts4u.us/link/training">Join our chat</a> for FREE personal career counseling, scholarship, and discounts!</p>
            <ListComponent></ListComponent> 
        </>
  )
}

export default Home