import React, { useState } from 'react';
import './Portfolio.css';
import Flip from '../Images/flip.png';
import WhatsApp from '../Images/whatsapp.svg';
import Email from '../Images/email.svg';
import Call from '../Images/call.png';
import { ScrollTo } from "react-scroll-to";

import { HashLink as Link } from 'react-router-hash-link';


function Portfolio() {


  return (


    <>

      <section className="portfolio">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-restaurant">Restaurant</li>
                <li data-filter=".filter-realestate">Real Estate</li>
                <li data-filter=".filter-ngo">NGO</li>
                <li data-filter=".filter-portfolio"> Freelancer Portfolio</li>
                <li data-filter=".filter-media">Media</li>

              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-restaurant">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="https://desifirangifoods.web.app/" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                  <div className="flip-card-back"><p>desiFirangi is a modern, dark theme, multilingual food truck website that looks great both on phone and mobile devices.  With prominently displayed and apropriately placed call-to-action buttons  is designed  also help be used by cloud kitchens that wish to manage their bottomlines via direct access to clients as opposed to routing their entire traffic via expensive food delivery platforms.<div id="downn" ><br /><b>Technologies:</b> reactJS, BootStrap, JS, CSS
                  <br /><b>Hosting:</b> Antibes, France
                  <br /><b>Find Out More:</b> <img className="contactpic" src={WhatsApp} alt="" />  <img className="contactpic" src={Email} alt="" />   <img className="contactpic" src={Call} class="img-fluid" alt="" /></div></p><iframe className="iframe2" src="https://desifirangifoods.web.app/" scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>



            <div className="col-lg-4 col-md-6  col-sm-12 portfolio-item filter-realestate">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="https://realestate-jk.web.app/" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                <div className="flip-card-back"><p>
                  RHE is a visual call-to-action oriented real estate website that is suitable for architects, contractors that build prefabricated structures and property sale and rental agents.
                  Use it for compact single-page structure that is easy to search and navigate without having to wade through multiple pages.<div id="downn" ><br /><br /><b>Technologies:</b>  reactJS, BootStrap, JS, CSS
                  <br /><b>Hosting:</b>  J&amp;K, India
                  <br /><b>Find Out More:</b> <img src={WhatsApp} class="img-fluid" alt="" />  <img src={Email} class="img-fluid" alt="" />   <img src={Call} class="img-fluid" alt="" /></div></p><iframe
                    className="iframe2" src="https://realestate-jk.web.app/ "
                    scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>


             <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-restaurant">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="https://demo.w3layouts.com/demos_new/template_demo/20-09-2018/cakes_bakery-demo_Free/190696682/web/index.html" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                <div className="flip-card-back"><p>
                  Cakey Bakey was designed to aid online sale of both, standaardized cakes as well as custom-designed cakes.  A client can thus browse through literally several hundered oferings, check the promotions, arrange a pick-up or a deliery time and make the payment.
                  The website structure is not only suitable for cake shops but also bread shops and florists.<div id="downn" ><br /><br /><b>Technologies:</b>  HTML, CSS, JS, BootStrap, nodeJS, expressJS, mongoDB
                 <br /><b>Hosting:</b>  Sydney, Australia
                  <br /><b>Find Out More:</b> <img src={WhatsApp} class="img-fluid" alt="" />  <img src={Email} class="img-fluid" alt="" />   <img src={Call} class="img-fluid" alt="" /></div></p><iframe
                    className="iframe2" src="https://demo.w3layouts.com/demos_new/template_demo/20-09-2018/cakes_bakery-demo_Free/190696682/web/index.html "
                    scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>



            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-ngo">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="https://ngo-website-tts.web.app/" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                <div className="flip-card-back"><p>
                  careDonateur is an NGO website with a fully-functiional CMS.  It is designed for a high-activity organization that operates with several programs across multiple categories running across the country.

                  The website is suitable for large NGOs or activists irrespective of whether the focus is on photo, blog, video or social media communication. <div id="downn" ><br /><br /><b>Technologies:</b> BootStrap, MERN stack
                   <br /><b>Hosting:</b>  Delhi , India
                    <br /><b>Find Out More:</b> <img src={WhatsApp} class="img-fluid" alt="" />  <img src={Email} class="img-fluid" alt="" />   <img src={Call} class="img-fluid" alt="" /></div></p><iframe
                    className="iframe2" src="https://ngo-website-tts.web.app/ "
                    scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>



            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-ngo">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="https://dakshinvrindavan.org" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                <div className="flip-card-back"><p>Samskrithi Goshala is a single-page animal rescue website that allows you to share your social media feeds, convey your purpose, make an impassioned plea for results-oriented actions towards adoption, donation, online or onsite volunteering.

                The website can be used by NGOs working towards breed conservation, aiding commerce development around compassionate aimal husbandry in rural areas or, protection of wildlife
.               <div id="downn" ><br /><br /><b>Technologies:</b> BootStrap, MERN stack
                <br /><b>Hosting:</b>  Kerala, India
                  <br /><b>Find Out More:</b> <img src={WhatsApp} class="img-fluid" alt="" />  <img src={Email} class="img-fluid" alt="" />   <img src={Call} class="img-fluid" alt="" /></div></p><iframe
                    className="iframe2" src="https://dakshinvrindavan.org "
                    scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>



            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-media">
              <div id="flip-card">
                <div className="flip-card-front"><iframe src="http://www.knskashmir.com/" scrolling="yes" title="W3Schools Free Online Web Tutorials" />
                  <button id="flip-card-btn-turn-to-back"> <img src={Flip} class="img-fluid" alt="" /></button></div>
                <div className="flip-card-back"><p>apnaJammu is a local media website that was designed with the need to perform live updates of news.  It is suitable for text-based news with some photograph and video illustrations to accompany the news.  The website also has a digital advertisement section.

                The structure is suitable for local media channels, prticularly those who have experienced shadow bans by social media platforms or those who need to build a searchable, indexable, proprietary database for their many man-years of research and investigations.
.               <div id="downn" ><br /><br /><b>Technologies:</b> WordPress, JS, CSS
                <br /><b>Hosting:</b>  J&amp;K, India
                <br /><b>Find Out More:</b> <img src={WhatsApp} class="img-fluid" alt="" />  <img src={Email} class="img-fluid" alt="" />   <img src={Call} class="img-fluid" alt="" /></div></p><iframe
                    className="iframe2" src="http://www.knskashmir.com/ "
                    scrolling="no" title="W3Schools Free Online Web Tutorials" /><button id="flip-card-btn-turn-to-front"> <img src={Flip} class="img-fluid" alt="" /></button></div></div></div>



          </div>

        </div>

      </section>
    </>


  );
};

export default Portfolio;