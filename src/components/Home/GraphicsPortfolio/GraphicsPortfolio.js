import React from 'react';
import './GraphicsPortfolio.css';
import wa from '../Images/wa_icon.png';
import telegram from '../Images/telegram_icon.png';
import instagram from '../Images/instagram_icon.png';
import close from '../Images/close_icon.png';







import desiFirangiL from '../Images/Banner/desiFirangi-L.jpg';
import apricot from '../Images/Banner/apricot jam.jpg';
import apricotjambanner from '../Images/Banner/apricot jam banner.jpg';
import apricotmassage from '../Images/Banner/apricot massage.jpg';
import FBCover_Honey from '../Images/Banner/FBCover_Honey.jpg';
import TRCWalnutBag from '../Images/Banner/TRCWalnutBag.jpg';
import HoneyBeeScroll from '../Images/Banner/HoneyBeeScroll.jpg';
import desiFirangiP from '../Images/Banner/desiFirangi-P.jpg';

import apricotjam from '../Images/Packaging/apricotjam.jpg';
import DriedFruit from '../Images/Packaging/DriedFruit.jpg';
import packedblack from '../Images/Packaging/packedblack.jpg';
import packedbrown from '../Images/Packaging/packedbrown.jpg';
import packedwhite from '../Images/Packaging/packedwhite.jpg';
import WalnutBoxPackaging from '../Images/Packaging/WalnutBoxPackaging.jpg';


import chinese1 from '../Images/MenuCard/chinese1.jpg';
import chinese2 from '../Images/MenuCard/chinese2.jpg';
import chinese3 from '../Images/MenuCard/chinese3.jpg';
import chinese4 from '../Images/MenuCard/chinese4.jpg';
import chinese5 from '../Images/MenuCard/chinese5.jpg';
import icecream1 from '../Images/MenuCard/icecream1.jpg';
import icecream2 from '../Images/MenuCard/icecream2.jpg';
import icecream3 from '../Images/MenuCard/icecream3.jpg';
import icecream4 from '../Images/MenuCard/icecream4.jpg';
import icecream5 from '../Images/MenuCard/icecream5.jpg';
import icecream6 from '../Images/MenuCard/icecream6.jpg';


import pink1 from '../Images/Vinyl-Wrapper/1.jpg';
import pink2 from '../Images/Vinyl-Wrapper/3.jpg';
import green1 from '../Images/Vinyl-Wrapper/1green.jpg';
import orange1 from '../Images/Vinyl-Wrapper/3orange.jpg';
import red1 from '../Images/Vinyl-Wrapper/1red.jpg';
import brown1 from '../Images/Vinyl-Wrapper/11.jpg';
import cream1 from '../Images/Vinyl-Wrapper/2.jpg';
import blue1 from '../Images/Vinyl-Wrapper/1blue.jpg';
import maroon1 from '../Images/Vinyl-Wrapper/maroon1.jpg';




function bro(id){

  var modal = document.getElementById("mydiv");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img 
  var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
   img = document.getElementById(id);
  
  modalImg.src = img.src;
  captionText.innerHTML = img.title;
  
  modal.style.display = "block";

  var desc=document.getElementById("description");
  setTimeout(() => { desc.style.display="block" }, 3000);
  setTimeout(() => { desc.style.display="none" }, 7000);
}
  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closee")[0];

// When the user clicks on <span> (x), close the modal


function Open(){
  
  var modal = document.getElementById("mydiv");
  modal.style.display = "none";

}


function GraphicsPortfolio() {



  return (
<> 

{/*
<div className="Graphics">
<div id="mydiv" className="mydivclass">

      <img className="modal-content" id="img01" alt=""/><img src={close}  onClick={Open} className="closee" style={{height:'35px', width:'35px'}} alt=""/>
     
      
      <div id="description" >
  <div className="title">Busy Morning Coffee<br/></div>
  <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </div>
  <div className="links">Artist : Urvi Negi 
  <img src={wa} style={{height:'35px', width:'35px'}} alt=""/><img src={instagram} style={{height:'35px', width:'35px'}} alt=""/><img src={telegram} style={{height:'35px', width:'35px'}} alt=""/>
  </div>

</div>


</div>



   <div className="graphicscontainer"  data-aos="fade-up">
   <div className="section-title">
            <h2>Graphics Portfolio</h2>
          
            <p>Check our Portfolio</p>
       
          </div>
       
   <div className="row">
   <div className="col-sm-12 col-md-6 col-lg-6 first">
     <div className="left">
     <h2 className="category">Banners</h2>
   <img className="myImg88 myImg" id="1" src={desiFirangiL} onClick={(e)=>bro(e.target.id)} alt="" title="This is image"/>
   <img className="myImg88 myImg1" id="2" src={apricot} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
   <img className="myImg88 myImg2" id="3" src={TRCWalnutBag} onClick={(e)=>bro(e.target.id)}  alt="Description" />
   <img className="myImg88 myImg3" id="4" src={FBCover_Honey} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
   <img className="myImg88 myImg4" id="5" src={desiFirangiP} onClick={(e)=>bro(e.target.id)}  alt="Description" />
   <img className="myImg88 myImg5" id="6" src={apricotjambanner} onClick={(e)=>bro(e.target.id)}  alt="Description" />
   <img className="myImg88 myImg6" id="7" src={apricotmassage} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
   <img className="myImg88 myImg7" id="8" src={HoneyBeeScroll} onClick={(e)=>bro(e.target.id)}  alt="Description" />
   <img className="myImg88 myImg8" id="9" src={apricotmassage} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
   <img className="myImg88 myImg9" id="10" src={HoneyBeeScroll} onClick={(e)=>bro(e.target.id)}  alt="Description" />

  </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-6 first">
<div className="right">
<h2 className="category">Menu Cards</h2>
     <img className="myImg88 myImg" id="0" src={icecream4} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88 myImg1" id="11 " src={icecream3} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg2" id="12" src={chinese1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg3" id="13" src={chinese2} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg4" id="14" src={icecream6} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg5" id="15" src={icecream2} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg6" id="16" src={chinese3} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg7" id="17" src={icecream1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg8" id="18" src={chinese5} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg9" id="19" src={icecream5} onClick={(e)=>bro(e.target.id)}  alt="Description" />
  
    </div>
  </div>


  <div className="col-sm-12 col-md-6 col-lg-6 first">
<div className="left">
<h2 className="category">Vinyl Covers</h2>
     <img className="myImg88 myImg" id="20" src={pink1} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88 myImg1 " id="21" src={brown1} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg2" id="22" src={green1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg3" id="23" src={red1} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg4" id="24" src={pink2} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg5" id="25" src={cream1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg6" id="26" src={blue1} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg7" id="27" src={maroon1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg8" id="28" src={maroon1} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg9" id="29" src={orange1} onClick={(e)=>bro(e.target.id)}  alt="Description" />
  
    </div>
  </div>


  <div className="col-sm-12 col-md-6 col-lg-6 first">
<div className="right">
<h2 className="category">Packaging</h2>
     <img className="myImg88 myImg" id="30" src={apricotjam} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88 myImg1" id="31 " src={WalnutBoxPackaging} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg2" id="32" src={DriedFruit} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg3" id="33" src={packedbrown} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg4" id="34" src={packedblack} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg5" id="35" src={WalnutBoxPackaging} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg6" id="36" src={packedwhite} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg7" id="37" src={packedwhite} onClick={(e)=>bro(e.target.id)}  alt="Description" />
     <img className="myImg88 myImg8" id="38" src={DriedFruit} onClick={(e)=>bro(e.target.id)}  alt="Description"/>
     <img className="myImg88 myImg9" id="39" src={packedblack} onClick={(e)=>bro(e.target.id)}  alt="Description" />
  
    </div>
  </div>


{/*
<div className="col-sm-12 col-md-6 col-lg-6 second">
     
<img className="myImg88" id="img1" src={apricotjam} onClick={(e)=>bro(e.target.id)} alt="Description" />
<img className="myImg88" id="img3" src={packedblack} onClick={(e)=>bro(e.target.id)} alt="Description" />
<img className="myImg88" id="img2" src={DriedFruit} onClick={(e)=>bro(e.target.id)} alt="Description" />

<img className="myImg88" id="img4" src={packedbrown} onClick={(e)=>bro(e.target.id)} alt="Description" />
<img className="myImg88" id="img5" src={packedwhite} onClick={(e)=>bro(e.target.id)} alt="Description" />
<img className="myImg88" id="img6" src={WalnutBoxPackaging} onClick={(e)=>bro(e.target.id)} alt="Description" />

  
  
  </div>


  <div className="col-sm-12 col-md-6 col-lg-6 first">
     
     <img className="myImg88" id="img21" src={chinese1} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88" id="img22" src={icecream2} onClick={(e)=>bro(e.target.id)} alt="Description" />

     <img className="myImg88" id="img23" src={chinese2} onClick={(e)=>bro(e.target.id)} alt="Description" />

     <img className="myImg88" id="img26" src={chinese4} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88" id="img27" src={icecream1} onClick={(e)=>bro(e.target.id)} alt="Description" />
     <img className="myImg88" id="img29" src={icecream4} onClick={(e)=>bro(e.target.id)} alt="Description" />
     
       
       
       </div> 


</div>
    
    
    
  
    <div id="myModal" className="modal">
      <span onClick={Open} className="closee"></span>
      <img className="modal-content" id="img01" alt=""/>
      <div id="caption"></div>
    </div>
    </div>

    </div>







*/}
    
    </>
    );
};


export default GraphicsPortfolio;