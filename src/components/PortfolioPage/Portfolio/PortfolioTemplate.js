import React from 'react';
import './Portfolio.css'
import { Link } from 'react-router-dom'

const PortfolioTemplate = (props) => {
    const {category, img, name, description} = props.data
    const classNew = 'col-lg-4 col-md-6 portfolio-item ' + category
    return (
        <div className={classNew}>
            <div className="portfolio-wrap">
            <img src={img} className="img-fluid" alt=""/>
            <div className="portfolio-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="portfolio-links">
                <a href={img} data-gall="portfolioGallery" className="venobox" title={name}>
                    <i className="bx bx-plus"></i>
                </a>
                <Link to={'/portfolio'} title="More Details">
                    <i className="bx bx-link"></i>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PortfolioTemplate;
