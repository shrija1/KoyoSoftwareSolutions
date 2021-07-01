import React from 'react';
import './GraphicsPortfolio.css';
import WebText from '../../../TextData';
import close from '../Images/cross_gallery.png';
import whatsapp from '../../../img/wa_icon.png';
import instagram from '../../../img/instagram_icon.png';
import telegram from '../../../img/telegram_icon.png';








function bro(id){

  var modal = document.getElementById("mydiv");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img 
  var modalImg = document.getElementById("img01");

   img = document.getElementById(id);
  
  modalImg.src = img.src;
  
  
  modal.style.display = "block";

}


function Open(){
  
  var modal = document.getElementById("mydiv");
  modal.style.display = "none";


}


function GraphicsPortfolio() {



  return (
<> 


<div className="Graphics">

<div id="mydiv" className="mydivclass">
  <div className="modalcontainer">
      <img className="modal-content" id="img01" alt=""/>
       <div class="overlaygraphics">
          <div className="textgraphicstitle">Busy Morning Coffee <img src={whatsapp} style={{height:'38px',width:'38px'}} alt=""/><img src={telegram} style={{height:'32px',width:'32px'}} alt=""/><img src={instagram} style={{height:'35px',width:'35px'}} alt=""/></div>
         <div className="textgraphicsdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel\ erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,</div>
      </div>
  </div>
    <img src={close}  onClick={Open} className="closee" style={{height:'35px', width:'35px'}} alt=""/>
</div>


<div className="graphicscontainer"  data-aos="fade-up">
   <div className="section-title">
  
            <h2>{WebText.home.graphicsportfolio.title}</h2>
            <p>{WebText.home.graphicsportfolio.description}</p>
  
   </div>
 


   <div className="graphicsflexcontainer">

   {WebText.home.graphicsportfolio.graphicsportfolioListData.map((graphics) => ( 

<div className=" first">
<div className="left">
<h2 className="category">{graphics.category}</h2>


{graphics.galleryData.map((gallery) => ( 
  <img className={gallery.class}  id={gallery.id} src={gallery.img} onClick={(e)=>bro(e.target.id)} alt="" title="This is image"/>

))}



</div>
</div>





   ))}



</div>


    

    
    
  
   
    </div>

    </div>


    </>
    );
};


export default GraphicsPortfolio;