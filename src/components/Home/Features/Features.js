import React from 'react'
import './Features.css'
import features from '../../../img/features.jpg'
import FeatureTemplate from './FeatureTemplate'


function Features() {
    const data = [
        {
            classDiv: 'mt-lg-0',
            icon: 'bx-receipt',
            title: 'Est labore ad',
            description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
        },
        {
            classDiv: '',
            icon: 'bx-cube-alt',
            title: 'Harum esse qui',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
        },
        {
            classDiv: '',
            icon: 'bx-images',
            title: 'Aut occaecati',
            description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
        },
        {
            classDiv: '',
            icon: 'bx-shield',
            title: 'Beatae veritatis',
            description: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta'
        },
    ]
    return (
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="image col-lg-6" style={{backgroundImage: `url(${features})`}} data-aos="fade-right"></div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                        {
                            data.map(element => <FeatureTemplate data={element}/>)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features
