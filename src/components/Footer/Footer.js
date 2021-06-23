import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'
// import paypal from '../../img/payment/payment-icon-paypal.svg'
// import googlepay from '../../img/payment/payment-icon-googlepay.svg'
// import applepay from '../../img/payment/payment-icon-applepay.svg'
// import visa from '../../img/payment/payment-icon-visa.svg'
// import mastercard from '../../img/payment/payment-icon-mastercard.svg'
// import discover from '../../img/payment/payment-icon-discover.svg'
// import amex from '../../img/payment/payment-icon-amex.svg'
// import paymentGateway from '../../img/payment/paymentGateway.png'
// import logo from '../../img/logo/softsiteLogo.svg'
import { animateScroll as scroll } from 'react-scroll';
import logo1 from '../../img/logo/tawn_tech.png'
import WebText from '../../TextData';

function Footer() {
    // const [dataFooter, setDataFooter] = useState([])
    const thisYear = new Date().getFullYear()
    const ScrollTo = function() {
        scroll.scrollToTop();
    }
    // useEffect( () => {
    //     fetch('http://localhost:4400/footer')
    //         .then(response => response.json())
    //         .then(data => {
    //             // console.log(data.data[0])
    //             // setDataFooter(data.data[0])
    //             data.data.map(element => setDataFooter(element))
    //         })
    // }, [])
    // const {email, phone, whatsapp} = dataFooter

    return (
        <div className="contact">
          <div className="container " >
          <div className="section-title">
            <h2>Contact</h2>
            <br/>
          </div>
          </div>
          <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: '350px'}}>
              
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8841435256463!2d72.86934941490306!3d19.200261987016756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e308faa87%3A0x762c8fa53c6ea895!2sWhispering%20Palms%20Shopping%20Complex%2C%20Akurli%20Rd%2C%20Mira%20Road%20East%2C%20Alika%20Nagar%2C%20Lokhandwala%20Twp%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1624316535089!5m2!1sen!2sin" frameBorder={0} style={{border: 0,height: '350px',width:'100%'}} loading="lazy" allowFullScreen title="map address" />
      
      </div>
    



      <div class="container mt-6 mb-4">

    
          <div class="row ">
            <div class="col-lg-6 info">
              <i class="bi bi-geo-alt d-flex p-2 "></i>
              
              <p>1305, 6B, Whispering Palms<br/>Akurli Rd, Kandivali East<br/>Mumbai, Maharashtra, India</p>
            </div>
           

            <div class="col-lg-6 info mt-4 mt-lg-0">
            <i class="bi bi-telephone"></i>
            
              <p><br/>+91 98679 10690</p>
            </div>

        
</div>
</div>
    
   
      
            <footer id="footer">
       
            <div className="row justify-content-md-center">
    <div className="col col-lg-2  priv ">
      Terms of Service
    </div>
    <div className="col col-lg-2  priv">
      Privacy Policy
    </div>
  
  </div>
      <div className="container">
   

      <div className="social-links">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        
      
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>KoyoSoftwareSolutions</span></strong>. All Rights Reserved
      </div>
      <div className="credits" >
        Designed by <a   style={{color: '#ffb03b'}} href="https://bootstrapmade.com/">Koyo Software Solutions</a>
      </div>
    </div>
            </footer>

            {/* Back to top */}
            <a href="/#" className="back-to-top" onClick={ScrollTo}>
                <i className="ri-arrow-up-line"></i>
            </a>
            <div id="preloader"></div>
            
        </div>
    )
}

export default Footer
