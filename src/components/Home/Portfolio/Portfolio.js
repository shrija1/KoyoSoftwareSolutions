import React from 'react'
import './Portfolio.css'
import { Link } from 'react-router-dom'
import portfolio1 from '../../../img/portfolio/portfolio-1.jpg'
import portfolio2 from '../../../img/portfolio/portfolio-2.jpg'
import portfolio3 from '../../../img/portfolio/portfolio-3.jpg'
import portfolio4 from '../../../img/portfolio/portfolio-4.jpg'
import portfolio5 from '../../../img/portfolio/portfolio-5.jpg'
import portfolio6 from '../../../img/portfolio/portfolio-6.jpg'
import portfolio7 from '../../../img/portfolio/portfolio-7.jpg'
import portfolio8 from '../../../img/portfolio/portfolio-8.jpg'
import portfolio9 from '../../../img/portfolio/portfolio-9.jpg'
import PortfolioTemplate from './PortfolioTemplate'


function Portfolio() {
    const data = [
        {
            category: 'filter-app',
            img: portfolio1,
            name: 'App 1',
            description: 'App'
        },
        {
            classAdd: 'filter-web',
            img: portfolio2,
            name: 'Web 3',
            description: 'Web'
        },
        {
            classAdd: 'filter-app',
            img: portfolio3,
            name: 'App 2',
            description: 'App'
        },
        {
            classAdd: 'filter-card',
            img: portfolio4,
            name: 'Card 1',
            description: 'Card'
        },
        {
            classAdd: 'filter-web',
            img: portfolio5,
            name: 'Web 2',
            description: 'Web'
        },
        {
            classAdd: 'filter-app',
            img: portfolio6,
            name: 'App 3',
            description: 'App'
        },
        {
            classAdd: 'filter-card',
            img: portfolio7,
            name: 'Card 1',
            description: 'Card'
        },
        {
            classAdd: 'filter-card',
            img: portfolio8,
            name: 'Card 3',
            description: 'Card'
        },
        {
            classAdd: 'filter-web',
            img: portfolio9,
            name: 'Web 3',
            description: 'Web'
        }
    ]
    return (
        <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {
                data.map(element=> <PortfolioTemplate key={element.img} data={element}/>)
            }
            

            </div>

        </div>
        </section>
    )
}

export default Portfolio
