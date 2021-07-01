import React from 'react';
import './Portfolio.css';
import Flip from '../Images/flip.png';
import WhatsApp from '../Images/whatsapp.svg';
import Email from '../Images/email.svg';
import Call from '../Images/call.png';
import WebText from '../../../TextData';



function Portfolio() {


  return (


    <>

      <section className="portfolio">
        <div className="port-container" data-aos="fade-up">
      
          <div className="section-title">
            <h2>{WebText.home.portfolio.title}</h2>
            <p>{WebText.home.portfolio.description}</p>
          </div>



         <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="app-flters">
              <li data-filter="*" className="filter-activee">All</li>
                <li data-filter=".filter-restaurant" title="Bakery, Cafe, Catering, Food Trucks, Restaurant">Restaurant</li>
                <li data-filter=".filter-realestate" title="Construction, Modular housing, Turnkey Projects">Real Estate</li>
                <li data-filter=".filter-ngo" title="Animal Care, Environment, Poverty Alleviation, Human Rights">NGO</li>
                <li data-filter=".filter-portfolio" title="Blog, CV, Advertisement, Artist, Printing"> Freelancer Portfolio</li>
                <li data-filter=".filter-ecommerce" title="Clothing, Dried Fruits, NGO, Restaurant">eCommerce</li>
                <li data-filter=".filter-petcare" >Pet Care</li>
                <li data-filter=".filter-professional" title="Accountant, Lawyer, Educator">Professional</li>

              </ul>
            </div>
          </div>
          
          <div className=" app-container " data-aos="fade-up" data-aos-delay="200">


          {WebText.home.portfolio.portfolioListData.map((port) => ( 

          <div className={port.category}>
               
               <div id="flip-card">
                     <div className="flip-card-front"><img src={port.img} style={{height:'100%',width:'100%',borderRadius:'8px'}} alt="" />
                     <a href={port.link} rel="noopener noreferrer" target="_blank"><button type="button" id="flip-btn-load1" className="btn" >Demo</button></a>
                       <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
     
                          <div className="flip-card-back"><p>{port.description}<div id="downn" ><br /><b>
                           Technologies:</b>{port.technologies}
                           <br /><b>Hosting:</b>{port.hosting}
                           <br /><b>Find Out More:</b>
                          <img className="contactpic" src={WhatsApp} alt="" />  <img className="contactpic" src={Email} alt="" />   <img className="contactpic" src={Call} class="img-fluid" alt="" />
                          </div></p>
                          <img src={port.img} style={{height:'100%',width:'100%',opacity:'0.3'}} alt=""/>
       
                          <button id="flip-card-btn-turn-to-front"> 
     
                          <img src={Flip} class="img-fluid" alt="" />
                          </button>
     
                          
                       </div>
                     
                     </div>
               </div>
               ))}

        </div>
          </div>


      </section>
    </>


  );
};

export default Portfolio;