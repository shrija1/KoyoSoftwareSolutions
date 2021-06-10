import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './ApplicationForm.css';
import { useState } from "react";
import InputSkills from './InputSkills'
import { EventAvailable, RecordVoiceOverSharp } from '@material-ui/icons';


const customStyles2 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    borderRadius: '8px',
    width: '550px',
    padding: '25px',
    height: '580px',
    overflow: 'scroll'


  },
  overlay: {
    backgroundColor: 'rgba(191, 189, 189, 0.75)'
  }
};




// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

function ApplicationForm() {


  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
    const [modalIsOpen3, setIsOpen3] = useState(false);
  const [applicationDetails, setApplicationDetails] = useState({
    applicantname: "",
    applicantemail: "",
    phone: "",
    available_inhours: "",
    available_inmonths: ""

  });
  const [records, setRecords] = useState([]);
  const [err, setErr] = useState("");
  const [errEmail, setErrEmail] = useState("");



  //second modal
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    var ee = ""
    var ef = ""


    if (name === "applicantemail" && value !== "" && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {

      ef = "Please enter a valid email"

    }
    if (name === "in_hours") {
      console.log("in hours we need" + value)
    }
    setErr(ee);
    setErrEmail(ef);
    setApplicationDetails({ ...applicationDetails, [name]: value });

  }

  const handleSubmit = (e) => {
    if (applicationDetails.applicantname !== "" && applicationDetails.applicantemail !== "" && applicationDetails.available_inhours !== "" && applicationDetails.available_inmonths !== "") {
      e.preventDefault()

      document.getElementById("exampleInputname2").style.backgroundColor = "white"
      document.getElementById("exampleInputEmail2").style.backgroundColor = "white"
      document.getElementById("selectboxhours").style.backgroundColor = "white"
      document.getElementById("selectboxmonths").style.backgroundColor = "white"
      const newRecord = { ...applicationDetails, id: new Date().getTime().toString() };
      setRecords([...records, newRecord]);
      setApplicationDetails({
        applicantname: "",
        applicantemail: "",
        phone: "",
        available_inhours: "",
        available_inmonths: ""
      })
      console.log(records);
    }
    else {
      console.log(applicationDetails.available_inhours + "in hours")
      if (applicationDetails.applicantname === "")
        document.getElementById("exampleInputname2").style.backgroundColor = "#f28585"

      if (applicationDetails.applicantemail === "")
        document.getElementById("exampleInputEmail2").style.backgroundColor = "#f28585"

      if (applicationDetails.available_inhours === "") {

        document.getElementById("selectboxhours").style.backgroundColor = "#f28585"
      }
      if (applicationDetails.available_inmonths === "") {
        document.getElementById("selectboxmonths").style.backgroundColor = "#f28585"

      }
      const error = "Please fill all the required* details"

      setErr(error);
      setApplicationDetails({
        applicantname: "",
        applicantemail: "",
        phone: "",
        available_inhours: "",
        available_inmonths: ""

      })
      e.preventDefault()

    }
  }





  function openModal2() {


    setIsOpen2(true);
     setIsOpen1(false);
      setIsOpen3(false);
    console.log(modalIsOpen2);
    console.log("submitted");
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    document.getElementById("title2").style.color = '#000000';
    document.getElementById("title2").style.fontFamily = 'Arial'
  }
  function closeModal2() {
    setIsOpen2(false);
    setErr("")

  }






function openModal1() {


    setIsOpen1(true);
setIsOpen2(false);
   setIsOpen3(false);
    console.log(modalIsOpen2);
    console.log("submitted");
 
  }

  function closeModal1() {
    setIsOpen1(false);
    setErr("")

  }







function openModal3() {


    setIsOpen3(true);
 setIsOpen1(false);
  setIsOpen2(false);
    console.log(modalIsOpen2);
    console.log("submitted");
   
  }

  function closeModal3() {
    setIsOpen3(false);
    setErr("")

  }






  return (
    <>


<Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal1"

      >

<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={closeModal1}>x</button>
<div className="md-stepper-horizontal yellow">
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal2}><span>1</span></div>
  
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal1}><span>2</span></div>
     
      <div className="md-step-optional">Optional</div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step ">
      <div className="md-step-circle" onClick={openModal3}><span>3</span></div>
   
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
  
  </div>

 Any Other Uploads<br />

          <input type="text" className="form-control form-control-sm  " id="otherurls1" placeholder="Portfolio URL"></input><br />
          <input type="text" className="form-control form-control-sm " id="otherurls2" placeholder="Project URL"></input><br />
          <input type="text" className="form-control form-control-sm  " id="otherurls3" placeholder="Website URL"></input><br />
          <input type="text" className="form-control form-control-sm " id="otherurls4" placeholder="Photo URL"></input><br />
          <input type="text" className="form-control form-control-sm  " id="otherurls5" placeholder="Video URL"></input><br />



     <InputSkills />
     <br/>

      </Modal>





<Modal
        isOpen={modalIsOpen3}
   
        onRequestClose={closeModal3}
       
        contentLabel="Example Modal3"
        
        className="Modal2"
        overlayClassName="Overlay2"
      >
<button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={closeModal3}>x</button>
<div className="md-stepper-horizontal yellow">
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal2}><span>1</span></div>
  
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal1}><span>2</span></div>
     
      <div className="md-step-optional">Optional</div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal3}><span>3</span></div>
   
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
  
  </div>
   <div className="notice">Information in<span style={{ color: 'red' }}> red </span>is mandatory<span style={{ color: 'red' }}> * </span></div><br />
   <div className="form-group">
          
            <input type="file"  className="form-control-file border border-danger rounded" id="exampleFormControlFile1" />
          </div>

<button type="submit" className="btn btn-warning btn-sm float-right" onClick={openModal1}>Submit</button>
      </Modal>






      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        
        contentLabel="Example Modal2"
      className="Modal"
           overlayClassName="Overlay"
     
   
      >

  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={closeModal2}>x</button>
        <div className="md-stepper-horizontal yellow">
    <div className="md-step active">
      <div className="md-step-circle" onClick={openModal2}><span>1</span></div>
  
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step ">
      <div className="md-step-circle" onClick={openModal1}><span>2</span></div>
     
      <div className="md-step-optional">Optional</div>
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
    <div className="md-step ">
      <div className="md-step-circle" onClick={openModal3}><span>3</span></div>
   
      <div className="md-step-bar-left"></div>
      <div className="md-step-bar-right"></div>
    </div>
  
  </div>
  
        <h5 id="title2" className="text-center">Details</h5>
        <div className="notice">Information in<span style={{ color: 'red' }}> red </span>is mandatory<span style={{ color: 'red' }}> * </span></div><br />
        <form action="" onSubmit={handleSubmit} formNoValidate>
          <div className="form-row">
            <div className="col">
              <div className="form-group ">

                <input type="text" name="applicantname" className="form-control form-control-sm border border-danger" id="exampleInputname2" placeholder="Name" value={applicationDetails.applicantname} onChange={handleInput} />
              </div>
            </div>


            <div className="col">
              <div className="form-group ">

                <input type="email" name="applicantemail" className="form-control form-control-sm border border-danger" id="exampleInputEmail2" placeholder="Email ID" onChange={handleInput} value={applicationDetails.applicantemail} />
                <div className="feedback">

                  {errEmail}
                </div>
              </div>
            </div>

          </div>

          <br />
          <div className="form-row">
            <div className="col">
              Availibility
                 </div>
 <div className="col">
            <div className="form-group w-100 p-0">
              <select name="available_inhours" className=" form-control form-control-sm selectpicker form-control border border-danger" id="selectboxhours" onChange={handleInput} data-width="200px">
                <option value="" selected>Hours/Week</option>
                <option value="1">10</option>
                <option value="2">15</option>
                <option value="3">20</option>
                <option value="4">30</option>
                <option value="5">Full Time</option>
              </select>
            </div>
</div>



            <div className="col">

           
            <div className="form-group w-100 p-0">
              <select name="available_inmonths" className="selectpicker form-control-sm form-control  border border-danger" id="selectboxmonths" value={applicationDetails.available_inmonths} onChange={handleInput} data-width="200px">
                <option selected value="">Months</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">6</option>
                <option value="6">9</option>
                <option value="7">Full Time</option>
              </select>
            </div>


          </div>
</div>

       
          <div className="feedback">

            {err}
          </div>







          <br />


                 










        </form>



        Rate Your Skills<br/>

         <div className="form-row">
            <div className="col">
            
              Skill 1
                 </div>
            <div className="form-group w-50 p-0">
              <select name="available_inhours" className=" form-control form-control-sm selectpicker form-control border border-danger" id="selectboxhours" onChange={handleInput} data-width="200px">
                <option value="" selected>Rate your skill</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

          </div>

           <div className="form-row">
            <div className="col">
              Skill 2
                 </div>
            <div className="form-group w-50 p-0">
              <select name="available_inhours" className=" form-control form-control-sm selectpicker form-control border border-danger" id="selectboxhours" onChange={handleInput} data-width="200px">
                <option value="" selected>Rate your skill</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

          </div>

           <div className="form-row">
            <div className="col">
              Skill 3
                 </div>
            <div className="form-group w-50 p-0">
              <select name="available_inhours" className=" form-control form-control-sm selectpicker form-control border border-danger" id="selectboxhours" onChange={handleInput} data-width="200px">
                <option value="" selected>Rate your skill</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

          </div>

           <div className="form-row">
            <div className="col">
              Skill 4
                 </div>
            <div className="form-group w-50 p-0">
              <select name="available_inhours" className=" form-control form-control-sm selectpicker form-control border border-danger" id="selectboxhours" onChange={handleInput} data-width="200px">
                <option value="" selected>Rate your skill</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

          </div>

     
        <br /> 
        <br /><br />
      </Modal>


















      <section className="portfolio">
        <div className="application-container " data-aos="fade-up">

          <div className="section-title">
            <h2>Jobs/Internships</h2>
            <p>Join Our Team</p>
            <div className="hiringtext">
              KSS is hiring! We are interested in passionate candidates who can bring their skills, creativity or experience and grow in a problem-solving environment.See the details below.
         </div>
          </div>



          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter=".filter-webdesign" className="filter-active">Web Design</li>
                <li data-filter=".filter-graphics">Graphics</li>
                <li data-filter=".filter-videoediting">Video Editing</li>
                <li data-filter=".filter-robotics">Robotics</li>
                <li data-filter=".filter-aiml"> AI ML</li>
              </ul>
            </div>
          </div>
<div className="long">
          <div className="row portfolio-container joinourteam " data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 portfolio-item filter-webdesign">


              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"><span style={{color:'white',fontStyle:'italic'}}> Duration</span> : 4 Month<span style={{color:'white',fontStyle:'italic'}}>  Skills :</span>CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>  
                
                </div>
                  <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-xs-12 portfolio-item filter-webdesign">
               

              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"> <span style={{color:'white',fontStyle:'italic'}}>Duration</span> : 4 Month <span style={{color:'white',fontStyle:'italic'}}> Skills : </span> CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>
                </div>
                <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div >


            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 portfolio-item filter-webdesign">


              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"> <span style={{color:'white',fontStyle:'italic'}}>Duration </span>: 4 Month  <span style={{color:'white',fontStyle:'italic'}}> Skills</span> : CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>
                </div>
                <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div >


            </div>


            <div className="col-lg-6 col-md-6 col-xs-12 portfolio-item filter-webdesign">


              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"><span style={{color:'white',fontStyle:'italic'}}> Duration </span>: 4 Month  <span style={{color:'white',fontStyle:'italic'}}>  Skills</span> : CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>
                </div>
                <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div >


            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 portfolio-item filter-graphics">


              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"> <span style={{color:'white',fontStyle:'italic'}}> Duration</span> : 4 Month <span style={{color:'white',fontStyle:'italic'}}>Skills </span>: CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>
                </div>
                <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div >


            </div>


            <div className="col-lg-6 col-md-6 col-xs-12 portfolio-item filter-graphics">


              <div className="topic">
                Grip Controller optimisation for a coconut tree climbing robotic harvester<br /></div>
              <div className="keywords">Keywords: <i>Robotics , CAD, Simulation, Controls</i></div>
              <div className="jobdescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official. Click <a href="www.youtube.com"> here </a>to know more.</div>
              <div className="duration"> <span style={{color:'white',fontStyle:'italic'}}>Duration</span> : 4 Month <span style={{color:'white',fontStyle:'italic'}}>Skills </span>: CAD , Machine Design, Simulink,Locomotion Design, Ability to work independently</div>

              <div className="centerbuttonform" >

                <div className="col-md-12 text-center">

                  <button type="button" className="btn btn-warning btn-sm" onClick={openModal2}>Apply</button>
                </div>
                <div className="deadline">
                DeadLine : MMMM,DD,YYYY</div>
              </div >


            </div>


</div>
<br/>
<br/>
<br/>
<br/>
<br/>



          </div>

        </div>

      </section>

    </>
  );
}
export default ApplicationForm;