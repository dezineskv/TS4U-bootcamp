import Navigation from './Navigation'
import { useState, useEffect } from 'react'
import data from '../staticData/jobs.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import finger from '../finger.png'
import '../styles/style.css'

function JobDetail() {
    const [job, setJob ] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const singleJob = data.jobs.find((user) => user.id === parseInt(id));
        setJob(singleJob);
    }, [id]);

  return (
    <>
        <div className="container">
        <div className="job_container">
    <div className="detail">
        <h1 style={{textAlign: 'center', paddingBottom: '20px'}}>{job.title}</h1>
        <p className="entries">{job.blurb}</p>
        <p><img className="location_img" src="https://ts4u.us/career/location.png" alt="location"/> {job.location}</p>
        <p className="entries"><span className="bold">Job Type: </span>
        {job.type}</p>
        <h2>Skills</h2>
            {
            job?.skills?.map(skill => 
             skill.length > 0 && <p><img src={finger} alt="bullet points" className="pointer" /> {skill}</p>
        )} 
        <h2 style={{marginTop: '20px'}}>Responsibilities</h2>   
        <div className="entries">                             
        {
            job?.responsibilities?.map(responsibility => 
                responsibility.length > 0 && <p><img src={finger} alt="bullet points" className="pointer" /> 
            {responsibility}</p>
        )}   
        </div>

        <p className="entries">
        <span className="bold">Vacancy: </span>{job.vacancy}
        </p>
       
        <p className="entries"><span className="bold">Salary: </span>{job.salary}</p>
        <div style={{margin: '0 auto', maxWidth: '100px'}} class="apply_btn">
            <Link to={job.apply}><span className='apply_txt'>Apply</span></Link>
        </div>            
        <div style={{textAlign: 'center', paddingTop: '20px'}}>
            <Navigation></Navigation></div>
    </div>
    </div>
    </div>

    </>
  )
}

export default JobDetail