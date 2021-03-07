import React from 'react'
import './Features.css'
import {Jumbotron} from 'react-bootstrap';
import FeatureTemplate from './FeatureTemplate'
import WebText from '../../../TextData';
import WebDesign from '../Images/WebDesign.png'
import AIML from '../Images/AIML.png'
import CodeCamp from '../Images/CodeCamp.png'
function Features() {
    const images=[WebDesign,AIML,CodeCamp,WebDesign];
    var i=0;
    return (
        <section id="features" className="features">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                    {/* <div className="image col-lg-6" style={{backgroundImage: `url(${features})`}} data-aos="fade-right"></div> */}
                    <div data-aos="fade-left" data-aos-delay="100">
                        {
                            WebText.home.featuresListData.map((element,index) =>
                                <Jumbotron className={'images cl'+(index%2).toString()} id={'f'+(index).toString()}>
                                    <FeatureTemplate key={element.title} data={element} image={images[i++]}/>
                                    {/* {console.log('cl'+toString(index%2))} */}
                                </Jumbotron>
                            )
                            // <Jumbotron>
                            //     {WebText.home.featuresListData.map(element => <FeatureTemplate key={element.title} data={element}/>)}
                            // </Jumbotron>
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features
