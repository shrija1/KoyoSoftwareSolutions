import React, { useState } from 'react'
import './Join.css'
import WebText from '../../TextData';

const Join = () => {
    const [isJob, setIsJob] = useState(false);
    const [isIntern, setIsIntern] = useState(false);

    return (
        <section>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>{WebText.home.team.title}</h2>
                    <p>{WebText.home.team.description}</p>
                </div>

                <div style={{textAlign: 'center', margin: '50px 0px'}}>
                    <h1 style={{margin: '50px 0px'}}>{isJob || isIntern ? 'Please Fill Up This Form Now' : 'Please choose one'}</h1>
                    {
                        !isJob && !isIntern &&
                        <div>
                            <button className="jobBtn" onClick={() => setIsJob(true)}>Job</button>
                            <button className="internBtn" onClick={() => setIsIntern(true)}>Intern</button>
                        </div>
                    }
                </div>

                {
                    isJob && 
                    <iframe 
                        title="Intern"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSerYW2y5ddzv39sdhnAFF1GEZfjeKh_kIEGkIgfZrGtWjPHOg/viewform?embedded=true" 
                        width="100%" 
                        height="900px" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                    >Loading…</iframe>
                }

                {
                    isIntern && 
                    <iframe 
                        title="Intern"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeTYTdvfchWGbNv7JsJMqyvSfAJ1lFFYphqV7roq_CYbLOSUg/viewform?embedded=true" 
                        width="100%" 
                        height="900px" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                    >Loading…</iframe>
                }
                
            </div>
        </section>
    )
}

export default Join
