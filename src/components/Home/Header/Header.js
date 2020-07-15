import React, { useState, useEffect } from 'react'
import './Header.css'
import HeaderElement from './HeaderElement'

function Header() {
    // fetch('https://api.proarif.com/softsite/Home/HeaderElement.json')
    // .then(response => response.json())
    // .then(json => console.log(json))


    


    // console.log(data1)

    const data = [
        {
            classBox: '',
            icon: 'ri-store-line',
            name: 'Lorem Ipsum'
        },
        {
            classBox: '',
            icon: 'ri-bar-chart-box-line',
            name: 'Dolor Sitema'
        },
        {
            classBox: 'mt-4 mt-md-0',
            icon: 'ri-calendar-todo-line',
            name: 'Sedare Perspiciatis'
        },
        {
            classBox: 'mt-4 mt-xl-0',
            icon: 'ri-paint-brush-line',
            name: 'Magni Dolores'
        },
        {
            classBox: 'mt-4 mt-xl-0',
            icon: 'ri-database-2-line',
            name: 'Nemos Enimade'
        }
    ]
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">

            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div className="col-xl-6 col-lg-8">
                <h1>Powerful Digital Solutions With SoftSite<span>.</span></h1>
                <h2>We are team of talanted digital marketers</h2>
                </div>
            </div>

            <div className="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
                
                {
                    data.map(element => <HeaderElement data={element}/>)
                }
                
            </div>

            </div>
        </section>
    )
}

export default Header