import React, {useState, useEffect} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import paypal from '../../img/payment/payment-icon-paypal.svg'
import googlepay from '../../img/payment/payment-icon-googlepay.svg'
import applepay from '../../img/payment/payment-icon-applepay.svg'
import visa from '../../img/payment/payment-icon-visa.svg'
import mastercard from '../../img/payment/payment-icon-mastercard.svg'
import discover from '../../img/payment/payment-icon-discover.svg'
import amex from '../../img/payment/payment-icon-amex.svg'
import paymentGateway from '../../img/payment/paymentGateway.png'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../img/logo/softsiteLogo.svg'
import logo1 from '../../img/logo/softsiteLogo3.png'

function Footer() {
    const [dataFooter, setDataFooter] = useState([])
    const ScrollTo = function() {
        scroll.scrollToTop();
    }
    useEffect(() => {
        fetch('http://localhost:4400/getDataFooter')
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                json.map(data => setDataFooter(data))
            })
    }, [])
    const {email, phone, whatsapp} = dataFooter

    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <img src={logo1} alt="SoftSite Logo" />
                            <p>
                                Abcdef 123 T. Abcdef Teafa Yadfe 
                                TT, 12345, India<br/><br/>
                                <strong>Phone:</strong> {phone}<br/>
                                <strong>WhatsApp:</strong> {whatsapp}<br/>
                                <strong>Email:</strong> {email}<br/>
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/chat">Chat</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/gem">GeM</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/webDevelopment">Web Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/e-marketing">E-Marketing</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/businessPS">Business Productivity Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/machineLearning">Machine Learning</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/professionalsToolbox">Professionals Toolbox</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                            <img src={paymentGateway} alt="paymentGateway" />
                        </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                {/* <div className="copyright">
                    &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                </div> */}
                
                </div>


                
                <div class="column100 credits text-center">  
                    <a href="/">©2020 TTS</a>  
                    <span class="sep"> | </span>  
                    <a href="#">Terms</a>  
                    <span class="sep"> | </span>  
                    <a href="#">Privacy Policy</a>
                    <span class="footer-address"> Abcdef 123 T. Abcdef Teafa Yadfe, TT, 12345 | 123.456.7891</span>
                </div>
                {/* <div class="section-footer-payments">
                    <div class="payment-badge"><img src={paypal} alt=""/></div>
                    <div class="payment-badge"><img src={googlepay} alt=""/></div>
                    <div class="payment-badge"><img src={applepay} alt=""/></div>
                    <div class="payment-badge"><img src={visa} alt=""/></div>
                    <div class="payment-badge"><img src={mastercard} alt=""/></div>
                    <div class="payment-badge"><img src={discover} alt=""/></div>
                    <div class="payment-badge"><img src={amex} alt=""/></div>
                </div> */}
            </footer>

            {/* Back to top */}
            <a href="#" className="back-to-top" onClick={ScrollTo}>
                <i className="ri-arrow-up-line"></i>
            </a>
            <div id="preloader"></div>
            
        </div>
    )
}

export default Footer
