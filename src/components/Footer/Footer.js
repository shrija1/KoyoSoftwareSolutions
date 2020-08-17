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
import WebText from '../../TextData';

function Footer() {
    const [dataFooter, setDataFooter] = useState([])
    const thisYear = new Date().getFullYear()
    const ScrollTo = function() {
        scroll.scrollToTop();
    }
    useEffect( () => {
        fetch('http://localhost:4400/footer')
            .then(response => response.json())
            .then(data => {
                // console.log(data.data[0])
                // setDataFooter(data.data[0])
                data.data.map(element => setDataFooter(element))
            })
    }, [])
    const {email, phone, whatsapp} = dataFooter

    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-12">
                            <div className="footer-info">
                                <img src={logo1} alt="SoftSite Logo" />
                                <p style={{fontSize: '16px'}}>
                                {WebText.footer.address}<br/><br/>
                                    {/* <strong>Phone:</strong> {phone}<br/>
                                    <strong>WhatsApp:</strong> {whatsapp}<br/>
                                    <strong>Email:</strong> {email}<br/> */}
                                    <strong>{WebText.footer.whatsapp.name}</strong> {WebText.footer.whatsapp.number}<br/>
                                    <strong>{WebText.footer.email.name}</strong> {WebText.footer.email.email}<br/>
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 footer-links" style={{paddingTop: '5%'}}>
                            <h4 style={{paddingLeft: '8%', fontSize: '25px'}}>{WebText.footer.part1.title}</h4>
                            <div class="d-flex justify-content-between" style={{fontSize: '16px'}}>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">{WebText.footer.part1.item1}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/about">{WebText.footer.part1.item2}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/chat">{WebText.footer.part1.item3}</a></li>
                                </ul>
                                <ul style={{paddingRight: '3%'}}>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">{WebText.footer.part1.item4}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">{WebText.footer.part1.item5}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">{WebText.footer.part1.item6}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-0"></div>
                        <div className="col-lg-5 col-md-6 footer-links" style={{paddingTop: '5%'}}>
                            <h4 style={{paddingLeft: '8%', fontSize: '25px'}}>{WebText.footer.part2.title}</h4>
                            <div class="d-flex justify-content-between" style={{fontSize: '16px'}}>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/gem">{WebText.footer.part2.item1}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/webDevelopment">{WebText.footer.part2.item2}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/e-marketing">{WebText.footer.part2.item3}</a></li>
                                </ul>
                                <ul style={{paddingRight: '5%'}}>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/businessPS">{WebText.footer.part2.item4}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/machineLearning">{WebText.footer.part2.item5}</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/professionalsToolbox">{WebText.footer.part2.item6}</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                            <img src={paymentGateway} alt="paymentGateway" />
                        </div> */}

                    </div>
                </div>
            </div>

                <div className="container">
                {/* <div className="copyright">
                    &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
                </div> */}
                
                </div>


                
                <div className="column100 credits text-center">  
                    <a href="/">{WebText.footer.lastPart.copyright}{thisYear} {WebText.footer.lastPart.company}</a>  
                    <span className="sep"> | </span>  
                    <a href="#">{WebText.footer.lastPart.terms}</a>  
                    <span className="sep"> | </span>  
                    <a href="#">{WebText.footer.lastPart.policy}</a>
                    {/* <span className="footer-address">
                            <a href="#" className="sociallink"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="comments"><i className="fa fa-comments"></i></a>
                    </span> */}
                </div>
                {/* <div className="section-footer-payments">
                    <div className="payment-badge"><img src={paypal} alt=""/></div>
                    <div className="payment-badge"><img src={googlepay} alt=""/></div>
                    <div className="payment-badge"><img src={applepay} alt=""/></div>
                    <div className="payment-badge"><img src={visa} alt=""/></div>
                    <div className="payment-badge"><img src={mastercard} alt=""/></div>
                    <div className="payment-badge"><img src={discover} alt=""/></div>
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
