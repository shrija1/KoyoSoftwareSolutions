
import React from 'react'
import './Footer.css'


import { animateScroll as scroll } from 'react-scroll';




function Footer() {
    // const [dataFooter, setDataFooter] = useState([])
    const thisYear = new Date().getFullYear()
    const ScrollTo = function () {
        scroll.scrollToTop();
    }


    return (
        <div className="footercontainer" id="contact">
            <div className="contact">
                <div className="container " >
                    <div className="section-title">
                        <h2>Contact</h2>
                        <br />
                    </div>
                </div>
                <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '350px' }}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8841435256463!2d72.86934941490306!3d19.200261987016756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e308faa87%3A0x762c8fa53c6ea895!2sWhispering%20Palms%20Shopping%20Complex%2C%20Akurli%20Rd%2C%20Mira%20Road%20East%2C%20Alika%20Nagar%2C%20Lokhandwala%20Twp%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1624316535089!5m2!1sen!2sin" frameBorder={0} style={{ border: 0, height: '350px', width: '100%' }} loading="lazy" allowFullScreen title="map address" />

                </div>





                <div id="footer">
                    <div> Terms of Service</div>

                    <div>  Privacy Policy</div>


                    <div className="container">
                        <div className="social-links">
                            Follow Us
                            <a href="/#" className="twitter"> <i className="bx bxl-twitter"></i></a>
                            <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            <br class="d-md-none"></br>
                            Contact Us
                            <a href="/#" className="phone"> <i className="bx bxs-phone"></i></a>
                            <a href="/#" className="telegram"><i className="bx bxl-telegram"></i></a>
                            <a href="/#" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
                            <a href="/#" className="envelope"><i className="bx bxs-envelope"></i></a>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <strong><span>KoyoSoftwareSolutions</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits" >
                            Designed by <a style={{ color: '#ffb03b' }} href="https://bootstrapmade.com/">Koyo Software Solutions</a>
                        </div>
                    </div>
                </div>

                {/* Back to top */}
                <a href="/#" className="back-to-top" onClick={ScrollTo}>
                    <i className="ri-arrow-up-line"></i>
                </a>
                <div id="preloader"></div>

            </div>
        </div>
    )
}

export default Footer