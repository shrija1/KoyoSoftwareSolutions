import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../img/logo/softsiteLogo3.png'
import { Button, Modal } from 'react-bootstrap'
import * as firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from '../../firebase.config';
import facebook from '../../img/social/facebook.png'
import google from '../../img/social/google.png'
import twitter from '../../img/social/twitter.png'
import linkedIn from '../../img/social/linkedin.png'
// import logout from '../../img/social/logout.png'
import WebText from '../../TextData'
// import { NavItem } from "react-bootstrap";


const Navbar1 = (props) => {
    const [show, setShow] = useState(false)
    // user from local storage
    let ttsGoogleSignIn = localStorage.getItem('ttsGoogleSignIn')
    const [checked, setChecked] = useState(true)

    const [user, setUser] = useState({
        googleSignIn: false,
        linkedInSignIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    // useEffect(() => {
        if (ttsGoogleSignIn && checked) {
            setUser({
                googleSignIn: true,
                linkedInSignIn: false,
                name: localStorage.getItem('ttsUsername'),
                email: localStorage.getItem('ttsEmail'),
                photo: localStorage.getItem('ttsPhoto')
            })
            setChecked(false)
            console.log(user)
        }
    // }, ttsGoogleSignIn)

    const handleSignInGoogle = () => {
        firebase.auth().signInWithPopup(GoogleProvider)
        .then(result =>{
            const {displayName, photoURL, email} = result.user;
            // console.log(result.user);
            const signInUserGoogle = {
                googleSignIn: true,
                linkedInSignIn: false,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUserGoogle);
            // set user to local storage
            localStorage.setItem('ttsGoogleSignIn', true);
            localStorage.setItem('ttsUsername', displayName);
            localStorage.setItem('ttsEmail', email);
            localStorage.setItem('ttsPhoto', photoURL);
        })
        .catch(err =>{
            console.log(err);
            console.log(err.message);
        })
    }
    const handleSignOutGoogle = () => {
        firebase.auth().signOut()
        .then(res =>{
            const signOutUserGoogle = {
                googleSignIn: false,
                linkedInSignIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(signOutUserGoogle);
            // remove all from local storage
            // localStorage.clear();

            // remove user from local storage
            localStorage.removeItem('ttsGoogleSignIn');
            localStorage.removeItem('ttsUsername');
            localStorage.removeItem('ttsEmail');
            localStorage.removeItem('ttsPhoto');
        })
        // .catch(err =>{})
    }



    useEffect(() => {
        if (props.active !== '') {
            document.getElementById(props.active).className = "active"
        }
    })

    const handleModel = () => {
        setShow(!show)
    }

    const [clickedNav, setClickedNav] = useState(false)
    const nav2Active = () => {
        // if (clickedNav) {
        //     setClickedNav(false)
        // } else {
        //     setClickedNav(true)
        // }

        clickedNav ? setClickedNav(false) : setClickedNav(true)
    }

    // useState(() => {
    //     if (clickedNav === true) {
    //         document.getElementById("header").className='navActive'
    //     } else {
    //         document.getElementById("header").className="navDeactive"
    //     }
    // })


    return (
        <header id="header" className="fixed-top">

            <div className="container d-flex justify-content-between">

                <a href="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></a>

                <nav className="nav-menu d-none d-lg-block collapse navbar-collapse" id="navbarNav1">
                    <ul>
                        <li id="home"><a href="/">{WebText.home.navbar.navItems.item1}</a></li>
                        <li className="drop-down" id="services">
                            <a href="/services">{WebText.home.navbar.navItems.item2.main}</a>
                            <ul>
                                <li className="drop-down"><a href="#/">{WebText.home.navbar.navItems.item2.item1.main}</a>
                                    <ul>
                                        <li><a href="/BuyerServices">{WebText.home.navbar.navItems.item2.item1.item1}</a></li>
                                        <li><a href="/SellerServices">{WebText.home.navbar.navItems.item2.item1.item2}</a></li>
                                    </ul>
                                </li>
                                <li><a href="/webDevelopment">{WebText.home.navbar.navItems.item2.item2}</a></li>
                                <li><a href="/e-marketing">{WebText.home.navbar.navItems.item2.item3}</a></li>
                                <li><a href="/businessPS">{WebText.home.navbar.navItems.item2.item4}</a></li>
                                <li><a href="/machineLearning">{WebText.home.navbar.navItems.item2.item5}</a></li>
                                <li><a href="/professionalsToolbox">{WebText.home.navbar.navItems.item2.item6}</a></li>
                            </ul>
                        </li>
                        <li id="portfolio"><a href="/portfolio">{WebText.home.navbar.navItems.item3}</a></li>
                        <li id="about"><a href="/about">{WebText.home.navbar.navItems.item4}</a></li>
                        <li id="contact"><a href="/contact">{WebText.home.navbar.navItems.item5}</a></li>
                    </ul>
                </nav>

                

                {/* <p>
                {
                    user.googleSignIn ? <div>
                    <a href='#/' className="get-started-btn scrollto" onClick={handleModel} style={{border: 'none', display: 'inline'}}>{WebText.home.navbar.greeting} {user.name}</a>
                    <a href='#/' className="get-started-btn scrollto" onClick={handleSignOutGoogle} style={{display: 'inline', marginLeft: '2px', padding: '5px 12px 8px 12px'}}>{WebText.home.navbar.btn.logout}</a>
                    </div>
                    : <a href='#/' className="get-started-btn scrollto" onClick={handleModel} >{WebText.home.navbar.btn.signIn}</a>
                }
                </p> */}
                
<br/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <br/>
                    <ul className="navbar-nav nav-menu" style={{textAlign: 'right'}}>
                        <li id="home" className="nav-item">
                            <a className="nav-link secondNav" href="/">{WebText.home.navbar.navItems.item1}</a>
                        </li>
                        <li className="drop-down nav-item dropdown" id="secondNavServices">
                            <a className="nav-link dropdown-toggle" href="/services" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {WebText.home.navbar.navItems.item2.main}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{background: '#333333'}}>
                                <a className="dropdown-item dropdown" href="/#" >
                                    <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {WebText.home.navbar.navItems.item2.item1.main}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                        <a className="dropdown-item" href="/BuyerServices">{WebText.home.navbar.navItems.item2.item1.item1}</a>
                                        <a className="dropdown-item" href="/SellerServices">{WebText.home.navbar.navItems.item2.item1.item2}</a>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="/webDevelopment">{WebText.home.navbar.navItems.item2.item2}</a>
                                <a className="dropdown-item" href="/e-marketing">{WebText.home.navbar.navItems.item2.item3}</a>
                                <a className="dropdown-item" href="/businessPS">{WebText.home.navbar.navItems.item2.item4}</a>
                                <a className="dropdown-item" href="/machineLearning">{WebText.home.navbar.navItems.item2.item5}</a>
                                <a className="dropdown-item" href="/professionalsToolbox">{WebText.home.navbar.navItems.item2.item6}</a>
                            </div>
                        </li>
                        <li id="portfolio"><a href="/portfolio">{WebText.home.navbar.navItems.item3}</a></li>
                        <li id="about" className="nav-item"><a className="nav-link" href="/about">{WebText.home.navbar.navItems.item4}</a></li>
                        <li id="contact" className="nav-item"><a className="nav-link" href="/contact">{WebText.home.navbar.navItems.item5}</a></li>
                    </ul>
                </div>

                <p>
                <button id="navBtn" 
                    className="navbar-toggler d-block d-md-none" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    style={{marginTop: '11px'}}
                    onClick={nav2Active}
                >
                    {/* <i className="fa fa-menu" aria-hidden="true"></i> */}
                    <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div>
                    <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div>
                    <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div> 
                </button>
                </p>
                <p>
                {
                    user.googleSignIn ? <div>
                    <a href='/#' className="get-started-btn scrollto" onClick={handleModel} style={{border: 'none', display: 'inline'}}>{WebText.home.navbar.greeting} {user.name}</a>
                    <a href='/#' className="get-started-btn scrollto" onClick={handleSignOutGoogle} style={{display: 'inline', marginLeft: '2px', padding: '5px 12px 8px 12px'}}>{WebText.home.navbar.btn.logout}</a>
                    </div>
                    : <a href='/#' className="get-started-btn scrollto" onClick={handleModel} >{WebText.home.navbar.btn.signIn}</a>
                }
                </p>

            </div>
                

            
            <Modal show={show} onHide={handleModel} animation={true} className="d-flex align-items-center" >
                <Modal.Header closebutton style={{borderBottom: '0px'}}>
                    {/* <Modal.Title>Sign in with</Modal.Title> */}
                </Modal.Header>
                {
                    (user.googleSignIn ) ? <div style={{textAlign: 'center', padding: '0px 50px 50px 50px'}}>
                        <img src={user.photo} alt="Profile" width="50px" style={{ borderRadius: '50%' }} />
                        <p>{WebText.home.navbar.popup.greeting} {user.name}</p>
                        <p>{user.email}</p>
                        {/* <br/>
                        <Button onClick={handleSignOutGoogle} style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img src={logout} alt="Logout" width="100px"/>
                        </Button> */}
                    </div> 
                   :
                <Modal.Body closebutton style={{textAlign: 'center', padding: '0px 50px 50px 50px'}}>
                    <h3>{WebText.home.navbar.popup.heading}</h3> <br/>
                    <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={facebook} alt="Facebook SignIn" width="300px"/>
                    </Button>
                    <br/>
                    <Button onClick={handleSignInGoogle} style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={google} alt="Google SignIn" width="300px"/>
                    </Button>
                    <br/>
                    <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={twitter} alt="Twitter SignIn" width="300px"/>
                    </Button>
                    <br/>
                    <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={linkedIn} alt="LinkedIn SignIn" width="300px"/>
                    </Button>
                </Modal.Body>
                 }
                {/* <Modal.Footer style={{justifyContent: 'center'}}>
                    {
                        user.googleSignIn && <div style={{textAlign: 'center'}}>
                            <p>Welcome, {user.name}</p>
                            <p>Your email: {user.email}</p>
                        </div> 
                    }
                </Modal.Footer> */}
            </Modal>
        </header>
    )
}

export default Navbar1
