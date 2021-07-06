import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import Flip from '../Images/flip.png';
import WhatsApp from '../Images/whatsapp.svg';
import Email from '../Images/email.svg';
import Call from '../Images/call.png';
import WebText from '../../../TextData';
import PortfolioCard from './PortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);




function Portfolio() {
  SwiperCore.use([Autoplay])
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slideswebsite1 = [];
  const slideswebsite2 = [];
  var i
  for (i = 0; i < 6; i++) {
    console.log(WebText.home.portfolio.portfolioListData[i].title);
    console.log(WebText.home.portfolio.portfolioListData[i].category);
    if (WebText.home.portfolio.portfolioListData[i].category === "filter-restaurant app-item") {

      slideswebsite1.push(


<SwiperSlide data-aos-delay="100" id="b" key={`slide-${i}`} tag="li" >

       <PortfolioCard i={i}></PortfolioCard>


        </SwiperSlide>
    

      );
    }


    
    }
  






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
              <li data-filter=".filter-latest" className="filter-activee" >Latest</li>
                <li data-filter=".filter-restaurant" title="Bakery, Cafe, Catering, Food Trucks, Restaurant">Restaurant</li>
                <li data-filter=".filter-realestate" title="Construction, Modular housing, Turnkey Projects">Real Estate</li>
                <li data-filter=".filter-ngo" title="Animal Care, Environment, Poverty Alleviation, Human Rights">NGO</li>
                <li data-filter=".filter-portfolio" title="Blog, CV, Advertisement, Artist, Printing">Portfolio</li>
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
                          <img src={port.img} style={{height:'100%',width:'100%',opacity:'0.3',borderRadius:'8px'}} alt=""/>
       
                          <button id="flip-card-btn-turn-to-front"> 
     
                          <img src={Flip} class="img-fluid" alt="" />
                          </button>
     
                          
                       </div>
                     
                     </div>
               </div>
               ))}

        </div>

      

       {/*  <div className=" app-container " data-aos="fade-up" data-aos-delay="200">
            <Swiper
              data-aos="fade-up"
              className="box filter-restaurant app-item"


              autoplay={{ delay: 4000 }}
              id="main"
              thumbs={{ swiper: thumbsSwiper }}
              controller={{ control: controlledSwiper }}
              tag="section"
              wrapperTag="ul"
              effect="fade"
            

              pagination
              spaceBetween={10}

              speed={1000}
              onInit={(swiper) => console.log('Swiper initialized!', swiper)}
              onSlideChange={(swiper) => {
                console.log('Slide index changed to: ', swiper.activeIndex);
              }}
              onReachEnd={() => console.log('Swiper end reached')}
            >
              {slideswebsite1}

            </Swiper>

          </div>
         
        

        */}

        </div>


      </section>
    </>


  );
};

export default Portfolio;