import React from 'react'
import './Features.css'
import features from '../../../img/features.jpg'
import FeatureTemplate from './FeatureTemplate'
import WebText from '../../../TextData';


function Features() {
    return (
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="image col-lg-6" style={{backgroundImage: `url(${features})`}} data-aos="fade-right"></div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                        {
                            WebText.home.featuresListData.map(element => <FeatureTemplate key={element.title} data={element}/>)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features
