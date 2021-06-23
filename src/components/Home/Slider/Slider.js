import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css';

import { Autoplay } from 'swiper';

import AIML from '../Images/AIML.webp';
import WebDesign from '../Images/WebDesign.webp';
import CodeCamp from '../Images/CodeCamp.webp';
import BrandingSols from '../Images/BrandingSols.webp';


import WebDesignMob from '../Images/WebDesignMob.webp';
import AIMLMob from '../Images/AIMLMob.webp';
import CodeCampMob from '../Images/CodeCampMob.webp';
import BrandingSolsMob from '../Images/BrandingSolsMob.webp';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);




function Slider() {

  SwiperCore.use([Autoplay])
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];

  slides.push(
    <SwiperSlide data-aos-delay="100" id="b" key={`slide-${1}`} tag="li" >



      <div className=" heading" >Web Services</div>
      <div className="wrapper">
        <div id="columnmid">We make h hkhjhk secure, efficient, SEO-friendly websites for static display and khjhk secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into  </div>
        <div id="column1" >

          <img className="responsive"

            src={WebDesign}

            alt={`Slide ${1}`}


          />
          <img className="responsive_mob"

            src={WebDesignMob}

            alt={`Slide ${1}`}


          />



        </div>


        <div id="column2" >
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit.ellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim lconsectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpi
</div></div></SwiperSlide>
  );





  slides.push(
    <SwiperSlide key={`slide-${2}`} tag="li" >



      <div className=" heading" >Branding Sols</div>
      <div className="wrapper">
        <div id="columnmid">We make h hkhjhk secure, efficient, SEO-friendly websites for static display and khjhk secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert WordPress website into </div>
        <div id="column1" >
          <img className="responsive"

            src={BrandingSols}

            alt={`Slide ${2}`}


          />
          <img className="responsive_mob"

            src={BrandingSolsMob}

            alt={`Slide ${2}`}


          />



        </div>


        <div id="column2" >
          We make, consectetur adipiscing elit. SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into a cost-effective Anroid app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpi
</div></div></SwiperSlide>
  );



  slides.push(
    <SwiperSlide key={`slide-${3}`} tag="li" >



      <div className=" heading" >AI and ML</div>
      <div className="wrapper">
        <div id="columnmid">We make h hkhjhk secure, efficient, SEO-friendly websites for static display and khjhk secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert WordPress website into </div>
        <div id="column1" >
          <img className="responsive"

            src={AIML}

            alt={`Slide ${3}`}


          />
          <img className="responsive_mob"

            src={AIMLMob}

            alt={`Slide ${3}`}


          />



        </div>


        <div id="column2" >
          We make secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into a cost-effective Anroid app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpi
</div></div></SwiperSlide>
  );



  slides.push(
    <SwiperSlide key={`slide-${4}`} tag="li" >



      <div className=" heading" >Coding Camp</div>
      <div className="wrapper">
        <div id="columnmid">We make h hkhjhk secure, efficient, SEO-friendly websites for static display and khjhk secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into </div>
        <div id="column1" >
          <img className="responsive"

            src={CodeCamp}

            alt={`Slide ${4}`}


          />
          <img className="responsive_mob"

            src={CodeCampMob}

            alt={`Slide ${4}`}


          />



        </div>


        <div id="column2" >
          We make secure, efficient, SEO-friendly websites for static display and eCommerce. We can also convert your WordPress website into a cost-effective Anroid app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpi
</div></div></SwiperSlide>
  );





  return (
    <React.Fragment >
      <br />
      <Swiper
        data-aos="fade-up"
        className="box"


        autoplay={{ delay: 4000 }}
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        effect="fade"
        navigation

        pagination
        spaceBetween={10}

        speed={1000}
        onInit={(swiper) => console.log('Swiper initialized!', swiper)}
        onSlideChange={(swiper) => {
          console.log('Slide index changed to: ', swiper.activeIndex);
        }}
        onReachEnd={() => console.log('Swiper end reached')}





      >
        {slides}
      </Swiper>





    </React.Fragment>
  );
};

export default Slider;










