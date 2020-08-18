import React, { useState, useEffect } from 'react'
import './Header.css'
import HeaderElement from './HeaderElement'
import WebText from '../../../TextData';

function Header() {
    // fetch('https://api.proarif.com/softsite/Home/HeaderElement.json')
    // .then(response => response.json())
    // .then(json => console.log(json))

    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">

            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div className="col-xl-6 col-lg-8">
                <h1>{WebText.home.header.heading}<span>.</span></h1>
                <h2>{WebText.home.header.headerText}</h2>
                </div>
            </div>

            <div className="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                {
                    WebText.home.header.headerCardsData.map(element => <HeaderElement key={element.name} data={element}/>)
                }
            </div>

            </div>
        </section>
    )
}

export default Header