import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import JobsList from './JobsList'
import Footer from './Footer'

function Home() {
  return (
    <>
    <Header></Header>
    <JobsList></JobsList>
    <Footer></Footer>
    </>
  )
}

export default Home