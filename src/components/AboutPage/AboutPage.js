import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2' style={{ backgroundColor: 'black' }}>
                        <nav class="nav flex-column" id='vertical'>
                            <a class="nav-link active" href="#">Contact</a>
                            <a class="nav-link" href="#">Company History</a>
                            <a class="nav-link" href="#">Company Values</a>
                            <a class="nav-link" href="#">Portfolio</a>
                            <a class="nav-link" href="#">Clientele</a>
                            <a class="nav-link" href="#">Team</a>
                            <a class="nav-link" href="#">Investor Relations</a>
                        </nav>
                    </div>
                    <div className='col-md-10'></div>
                </div>
                <hr/>
                {/* Map */}
                <div className="section-title">
                    <h2>Map</h2>
                    <p>Office Location</p>
                    <iframe style={{border:'0', width: '100%', height: '320px', marginTop: '100px'}} 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391749.673762374!2d74.28433657717014!3d33.8830719935751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sbg!4v1593532278326!5m2!1sen!2sbg" 
                        frameborder="0" allowfullscreen >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
