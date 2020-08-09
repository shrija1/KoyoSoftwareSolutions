import React from 'react'
import './Counts.css'

function Counts() {
    const data = [
        {
            icon: 'icofont-simple-smile',
            counter: 65,
            title: 'Happy Clients',
            description: 'consequuntur voluptas nostrum aliquid ipsam architecto ut.'
        },
        {
            icon: 'icofont-document-folder',
            counter: 85,
            title: 'Projects',
            description: 'adipisci atque cum quia aspernatur totam laudantium et quia dere tan'
        },
        {
            icon: 'icofont-clock-time',
            counter: 12,
            title: 'Years of experience',
            description: 'aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel'
        },
        {
            icon: 'icofont-award',
            counter: 15,
            title: 'Awards',
            description: 'rerum asperiores dolor alias quo reprehenderit eum et nemo pad der'
        }
    ]
    return (
        <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">

            <div className="row no-gutters">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
                <div className="content d-flex flex-column justify-content-center">
                <h3>Voluptatem dignissimos provident quasi</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                    {
                        data.map(e => (
                            <div className="col-md-6 d-md-flex align-items-md-stretch" key={e.title}>
                            <div className="count-box">
                                <i className={e.icon}></i>
                                <span data-toggle="counter-up">{e.counter}</span>
                                <p><strong>{e.title}</strong> {e.description}</p>
                            </div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}

export default Counts
