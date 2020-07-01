import React from 'react'
import './HeaderForAll.css'


function HeaderForAll(props) {
    return (
        <section id="hero" className="d-flex align-items-center justify-content-center">
            <div className="container" data-aos="fade-up">

            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div className="col-xl-6 col-lg-8">
                <h1>{props.title}</h1>
                <h2>We are team of talanted digital marketers</h2>
                </div>
            </div>

            </div>
        </section>
    )
}

export default HeaderForAll