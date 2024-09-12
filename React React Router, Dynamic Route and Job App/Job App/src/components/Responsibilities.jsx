import Navigation from './Navigation'
import { useState, useEffect } from 'react'
import data from '../staticData/jobs.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import finger from '../finger.png'

function Responsibilities({ responsibility }) {
console.log(responsibility)
  return (
    <>
       
        <h2 style={{marginTop: '20px'}}>Responsibilities</h2>
        <div>
        {data.job.responsibilities.map((responsibility, index) =>(        
            <div key={index}>
              <p><img src={finger} alt="points" className="pointer" /> {responsibility}</p>
                 </div>
      
        ))}
        </div>     
        
    </>
  )
}

export default Responsibilities