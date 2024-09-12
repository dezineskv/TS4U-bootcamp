import React from 'react'
import data from "../staticData/jobs.json"
import { Link } from 'react-router-dom'

function JobsList() {

  return (
    <>
    <div>
        <h1 style={{color: 'black', marginTop: '30px'}}>Open Positions</h1>
        {data.jobs.map((job) => (
            <div className="single_job" key={job.id}>
                <div className="job_thumbnail" style={{width: '25%'}}><img src={job.img} alt="job thumbnail"/></div>
                <div style={{textAlign: 'left', paddingLeft: '30px'}}>
                <h4>{job.title}</h4>
                <p className="job_type">{job.type}</p>
                <p><img className="location_img" src="https://ts4u.us/career/location.png" alt="location"/>{job.location}</p>
                </div>
                <div className="stack"><p className="stacks">{job.stack}</p></div>
                <div class="apply_btn"><Link to={`/job/${job.id}`}><span className='apply_txt'>Apply</span></Link></div>            
            </div>
        ))}
        </div>
    </>
  )
}

export default JobsList