import React from 'react'
import data from "../staticData/jobs.json"
import { Link } from 'react-router-dom'

function JobsList() {

  return (
    <>
    <div className="container">
        <div className="job_container" style={{paddingBottom: '20px'}}>
        <h1 style={{color: 'black', marginTop: '30px', padding: '20px'}}>Open Positions</h1>
        {data?.jobs?.map((job) => (
            <Link to={`/job/${job.id}`}><div className="single_job" key={job.id}>
                <div className="job_thumbnail"><img src={job.img} alt="job thumbnail"/></div>
                <div style={{textAlign: 'left', paddingLeft: '30px', maxWidth: '80%'}}>
                <h4>{job.title}</h4>
                <p className="job_type">{job.type}</p>
                <p><img className="location_img" src="https://ts4u.us/career/location.png" alt="location"/>{job.location}</p>
                </div>
                <div className="stack">
                {job?.stacks?.map((stack) => (
                  <div className="stacks" >{stack}</div>
                ))}
                </div>
                <div class="apply_btn"><Link to={`/job/${job.id}`}><span className='apply_txt'>Apply</span></Link></div>            
            </div></Link>
        ))}
        </div>
        </div>
    </>
  )
}

export default JobsList