import React from 'react'
import About from './About/About'
import Client from './Client/Client'
import Features from './Features/Features'

// import Services from './Services/Services'
// import Portfolio from '../PortfolioPage/Portfolio/Portfolio'
import CallToAction from './CallToAction/CallToAction'
// import Counts from './Counts/Counts'
// import Testimonials from './Testimonials/Testimonials'
import Team from './Team/Team'
import Slider from './Slider/Slider'
import Portfolio from './Portfolio/Portfolio'
import GraphicsPortfolio from './GraphicsPortfolio/GraphicsPortfolio'
import ApplicationForm from './ApplicationForm/ApplicationForm'
import InputSkills from './ApplicationForm/InputSkills'




function Home() {
    
    return (
        <main id="main">
           
            <Slider/>
            <Portfolio/>
            <GraphicsPortfolio/>
            <ApplicationForm/>
            
            <Client/>
            
            
            {/* <Services/> */}
            {/* <Portfolio/> */}
            <CallToAction/>
            {/* <Counts/> */}
            {/* <Testimonials/> */}
            <Team/>
        </main>
    )
}

export default Home
