import React from 'react'
import './AboutPage.css'
import ContactAbout from './ContactAbout/ContactAbout'
import TeamAbout from './TeamAbout/TeamAbout'
import CompanyHistory from './CompanyHistory/CompanyHistory'
import WebText from '../../TextData'

const AboutPage = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="sidenavAbout">
                        <a href="#about">{WebText.aboutPage.leftSidebar.item1}</a>
                        <a href="#services">{WebText.aboutPage.leftSidebar.item2}</a>
                        <a href="#clients">{WebText.aboutPage.leftSidebar.item3}</a>
                        <a href="#contact">{WebText.aboutPage.leftSidebar.item4}</a>
                        <a href="#services">{WebText.aboutPage.leftSidebar.item5}</a>
                        <a href="#clients">{WebText.aboutPage.leftSidebar.item6}</a>
                        <a href="#contact">{WebText.aboutPage.leftSidebar.item7}</a>
                    </div>

                    <div className="mainAbout">
                        <ContactAbout/>
                        <CompanyHistory/>
                        <TeamAbout/>
                    </div>
                </div>
                <hr/>
                {/* Map */}
                <div className="container section-title">
                    <h2>{WebText.aboutPage.map.title}</h2>
                    <p>{WebText.aboutPage.map.description}</p>
                    <iframe title={WebText.aboutPage.map.title} style={{border:'0', width: '100%', height: '320px', marginTop: '35px'}} 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.2642564899743!2d75.50407131517214!3d32.38527728109204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIzJzA3LjAiTiA3NcKwMzAnMjIuNSJF!5e0!3m2!1sen!2sus!4v1596982748456!5m2!1sen!2sus" 
                        frameBorder="0" allowFullScreen >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
