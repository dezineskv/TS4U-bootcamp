import Navigation from './Navigation'
import { useState, useEffect } from 'react'
import data from '../staticData/jobs.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import finger from '../finger.png'
import Responsibilities from './Responsibilities'

function JobDetail() {
    const [job, setJob ] = useState([]);
    const { id } = useParams();
const responsibs = [
    "Design and develop web applications using MongoDB, Express.js, React, and Node.js",
    "Develop and maintain RESTful APIs using Node.js and Express.js",
    "Design and develop responsive and dynamic user interfaces using React.js",
    "Implement data models and schemas using MongoDB",
    "Write clean, maintainable, and scalable code that follows best practices and standards.",
    "Debug and troubleshoot code issues, and provide timely solutions",
    "Work with version control tools like Git and continuously integrate and deploy code using tools like Jenkins or Travis CI",
    "Participate in code reviews and provide feedback to other developers",
    "Stay up-to-date with emerging trends and technologies in the MERN stack",
    "Write clear technical documentation for other team members and stakeholders"
];

    useEffect(() => {
        const singleJob = data.jobs.find((user) => user.id === parseInt(id));
        setJob(singleJob);
    }, [id]);

  return (
    <>
    <div className="bg detail">
        <h1 style={{textAlign: 'center', paddingBottom: '20px'}}>{job.title}</h1>
        <p className="entries">{job.blurb}</p>
        <p><img className="location_img" src="https://ts4u.us/career/location.png" alt="location"/> {job.location}</p>
        <p className="entries"><span className="bold">Job Type: </span>
        {job.type}</p>
        <h2>Skills</h2>
        <p><img src={finger} alt="points" className="pointer" />{job.skills}</p>
        <h2 style={{marginTop: '20px'}}>Responsibilities</h2>
        <div className="entries">
        {responsibs.map((responsibility, index) =>(        
            <div key={index}>
              <p><img src={finger} alt="points" className="pointer" /> {responsibility}</p>
                 </div>   
        ))}
        </div> 
        <p className="entries"><span className="bold">Vacancy: </span>{job.vacancy}</p>
        <p className="entries"><span className="bold">Salary: </span>{job.salary}</p>
        <div style={{margin: '0 auto', maxWidth: '100px'}} class="apply_btn">
            <Link to={job.apply}><span className='apply_txt'>Apply</span></Link>
        </div>            
        <div style={{textAlign: 'center', paddingTop: '20px'}}>
            <Navigation></Navigation></div>
    </div>
    </>
  )
}

export default JobDetail