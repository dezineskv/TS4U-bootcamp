import React from 'react'
import burger from '../assets/hamburger-icon.png';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <div>
     <Link to="/"><img src={burger} className="burger" alt="burger" /></Link>
    </div>
    <h1 style={{color: 'black'}}>Burger Builder</h1>
</>   
  )
}

export default Header