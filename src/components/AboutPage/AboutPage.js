import React from 'react'
import './AboutPage.css'
import ContactAbout from './ContactAbout/ContactAbout'
import TeamAbout from './TeamAbout/TeamAbout'
import CompanyHistory from './CompanyHistory/CompanyHistory'
import CompanyValues from './CompanyValues/CompanyValues'

const AboutPage = () => {
    return (
        <div>
            <div>
                <div>
                    <div class="sidenavAbout">
                        <a href="#about">Contact</a>
                        <a href="#services">Company History</a>
                        <a href="#clients">Company Values</a>
                        <a href="#contact">Portfolio</a>
                        <a href="#services">Clientele</a>
                        <a href="#clients">Team</a>
                        <a href="#contact">Investor Relations</a>
                    </div>

                    <div class="mainAbout">
                        <ContactAbout/>
                        <CompanyHistory/>
                        <hr/>
                        <CompanyValues/>
                        <TeamAbout/>
                    </div>
                </div>
                <hr/>
                {/* Map */}
                <div className="container section-title">
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
