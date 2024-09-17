import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{backgroundColor: '#062539', maxHeight: '200px'}}>
       <Link to="https://ts4u.us/career"><img src="https://ts4u.us/hero-section/footerTS$ulogo.png" alt="TS4U Logo" style={{maxWidth: '140px', padding: '20px', display: 'block', textAlign: 'left', backgroundColor: '#062539'}}/></Link>
    </div>
  )
}
