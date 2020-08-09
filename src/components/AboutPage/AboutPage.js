import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2' style={{ backgroundColor: 'black' }}>
                        <nav className="nav flex-column" id='vertical'>
                            <a className="nav-link active" href="#">Contact</a>
                            <a className="nav-link" href="#">Company History</a>
                            <a className="nav-link" href="#">Company Values</a>
                            <a className="nav-link" href="#">Portfolio</a>
                            <a className="nav-link" href="#">Clientele</a>
                            <a className="nav-link" href="#">Team</a>
                            <a className="nav-link" href="#">Investor Relations</a>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.2642564899743!2d75.50407131517214!3d32.38527728109204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIzJzA3LjAiTiA3NcKwMzAnMjIuNSJF!5e0!3m2!1sen!2sus!4v1596982748456!5m2!1sen!2sus" 
                        frameborder="0" allowfullscreen >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
