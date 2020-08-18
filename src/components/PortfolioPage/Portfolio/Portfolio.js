import React from 'react';
import './Portfolio.css';
import PortfolioTemplate from './PortfolioTemplate';
import WebText from '../../../TextData';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>{WebText.portfolio.title}</h2>
            <p>{WebText.portfolio.description}</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">{WebText.portfolio.head.item1}</li>
                <li data-filter=".filter-app">{WebText.portfolio.head.item2}</li>
                <li data-filter=".filter-card">{WebText.portfolio.head.item3}</li>
                <li data-filter=".filter-web">{WebText.portfolio.head.item4}</li>
                </ul>
            </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {
                WebText.portfolio.data.map(element=> <PortfolioTemplate key={element.img} data={element}/>)
            }
            

            </div>

        </div>
        </section>
    )
}

export default Portfolio;
