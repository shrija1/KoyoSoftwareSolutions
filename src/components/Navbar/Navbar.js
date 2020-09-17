import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../img/logo/softsiteLogo3.png'
import { Button, Modal, Nav } from 'react-bootstrap'
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

import { Link, useRouteMatch } from  'react-router-dom';

const Navbar1 = (props) => {
    let match = useRouteMatch();
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
                        <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div>
                        <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div>
                        <div style={{width: '25px', height: '3px', backgroundColor: 'white', margin: '4px 0'}}></div> 
                    </button>
                </p>

                <Link to="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></Link>

                <nav className="nav-menu d-none d-lg-block collapse navbar-collapse" id="navbarNav1">
                    <ul>
                        <li id="home"><Link to="/">{WebText.home.navbar.navItems.item1}</Link></li>
                        <li className="drop-down" id="services">
                            <Link to="/services">{WebText.home.navbar.navItems.item2.main}</Link>
                            <ul>
                                <li className="drop-down"><Link to="#">{WebText.home.navbar.navItems.item2.item1.main}</Link>
                                    <ul>
                                        <li><Link to="/BuyerServices">{WebText.home.navbar.navItems.item2.item1.item1}</Link></li>
                                        <li><Link to="/SellerServices">{WebText.home.navbar.navItems.item2.item1.item2}</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/webDevelopment">{WebText.home.navbar.navItems.item2.item2}</Link></li>
                                <li><Link to="/e-marketing">{WebText.home.navbar.navItems.item2.item3}</Link></li>
                                <li><Link to="/businessPS">{WebText.home.navbar.navItems.item2.item4}</Link></li>
                                <li><Link to="/machineLearning">{WebText.home.navbar.navItems.item2.item5}</Link></li>
                                <li><Link to="/professionalsToolbox">{WebText.home.navbar.navItems.item2.item6}</Link></li>
                            </ul>
                        </li>
                        <li id="portfolio"><Link to="/portfolio">{WebText.home.navbar.navItems.item3}</Link></li>
                        <li id="about"><Link to="/about">{WebText.home.navbar.navItems.item4}</Link></li>
                        <li id="contact"><Link to="/contact">{WebText.home.navbar.navItems.item5}</Link></li>
                    </ul>
                </nav>

                
                
<br/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <br/>
                    <ul className="navbar-nav nav-menu" style={{textAlign: 'left'}}>
                        <li id="home" className="nav-item">
                            <Link className="nav-link secondNav" to="/">{WebText.home.navbar.navItems.item1}</Link>
                        </li>
                        <li className="drop-down nav-item dropdown" id="secondNavServices">
                            <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {WebText.home.navbar.navItems.item2.main}
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{background: '#333333'}}>
                                <Link className="dropdown-item dropdown" to="/#" >
                                    <Nav.Link as={Link} to="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {WebText.home.navbar.navItems.item2.item1.main}
                                    </Nav.Link>
                                    {/* <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {WebText.home.navbar.navItems.item2.item1.main}
                                    </Link> */}
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                        <Link className="dropdown-item" to="/BuyerServices">{WebText.home.navbar.navItems.item2.item1.item1}</Link>
                                        <Link className="dropdown-item" to="/SellerServices">{WebText.home.navbar.navItems.item2.item1.item2}</Link>
                                    </div>
                                </Link>
                                <Link className="dropdown-item" to="/webDevelopment">{WebText.home.navbar.navItems.item2.item2}</Link>
                                <Link className="dropdown-item" to="/e-marketing">{WebText.home.navbar.navItems.item2.item3}</Link>
                                <Link className="dropdown-item" to="/businessPS">{WebText.home.navbar.navItems.item2.item4}</Link>
                                <Link className="dropdown-item" to="/machineLearning">{WebText.home.navbar.navItems.item2.item5}</Link>
                                <Link className="dropdown-item" to="/professionalsToolbox">{WebText.home.navbar.navItems.item2.item6}</Link>
                            </div>
                        </li>
                        <li id="portfolio"><Link to="/portfolio">{WebText.home.navbar.navItems.item3}</Link></li>
                        <li id="about" className="nav-item"><Link className="nav-link" to="/about">{WebText.home.navbar.navItems.item4}</Link></li>
                        <li id="contact" className="nav-item"><Link className="nav-link" to="/contact">{WebText.home.navbar.navItems.item5}</Link></li>
                    </ul>
                </div>

                <p>
                    {
                        user.googleSignIn ? <div>
                        <Link to='/#' className="get-started-btn scrollto" onClick={handleModel} style={{border: 'none', display: 'inline'}}>{WebText.home.navbar.greeting} {user.name}</Link>
                        <Link to='/#' className="get-started-btn scrollto" onClick={handleSignOutGoogle} style={{display: 'inline', marginLeft: '2px', padding: '5px 12px 8px 12px'}}>{WebText.home.navbar.btn.logout}</Link>
                        </div>
                        : <Link to='/#' className="get-started-btn scrollto" onClick={handleModel} >{WebText.home.navbar.btn.signIn}</Link>
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
