import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../img/logo/softsiteLogo3.png'
import { Button, Modal } from 'react-bootstrap'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import facebook from '../../img/social/facebook.png'
import google from '../../img/social/google.png'
import twitter from '../../img/social/twitter.png'
import linkedIn from '../../img/social/linkedin.png'
import logout from '../../img/social/logout.png'

const Navbar = (props) => {
    const [show, setShow] = useState(false)
    // user from local storage
    let ttsGoogleSignIn = localStorage.getItem('ttsGoogleSignIn')
    console.log(ttsGoogleSignIn)
    // || userLocal.ttsGoogleSignIn
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


    return (
        <header id="header" className="fixed-top">

            <div className="container d-flex justify-content-between">

                <a href="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></a>

                {/* <nav className="navbar navbar-expand-md nav-menu"> */}
                <nav className="nav-menu d-none d-lg-block collapse navbar-collapse" id="navbarNav1">
                    <ul>
                    <li id="home"><a href="/">Home</a></li>
                    {/* <li id="registration"><a href="/account">Registration</a></li> */}
                    <li className="drop-down" id="services"><a href="">Services</a>
                        <ul>
                            <li className="drop-down"><a href="#">GeM</a>
                                <ul>
                                    <li><a href="/BuyerServices">BuyerServices</a></li>
                                    <li><a href="/SellerServices">SellerServices</a></li>
                                </ul>
                            </li>
                            <li><a href="/webDevelopment">Web Development</a></li>
                            <li><a href="/e-marketing">E-Marketing</a></li>
                            <li><a href="/businessPS">Business Productivity Services</a></li>
                            <li><a href="/machineLearning">Machine Learning</a></li>
                            <li><a href="/professionalsToolbox">Professionals Toolbox</a></li>
                        </ul>
                    </li>
                    {/* <li><a href="/chat">Chat</a></li> */}
                    <li id="portfolio"><a href="/portfolio">Portfolio</a>
                    </li>
                    <li id="about"><a href="/about">About</a></li>
                    {/* <li><a href="/cart">Cart</a></li> */}
                    <li id="contact"><a href="/contact">Contact</a></li>

                    </ul>
                </nav>

                <button id="navBtn" className="navbar-toggler d-block d-md-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <i className="navbar-toggler-icon"></i> */}
                    <i className="ri-arrow-down-line" aria-hidden="true"></i>
                </button>
                {
                    user.googleSignIn ? <a href='#' className="get-started-btn scrollto" onClick={handleModel} style={{border: 'none'}}>Hi, {user.name}</a>
                    : <a href='#' className="get-started-btn scrollto" onClick={handleModel} >Sign In</a>
                }
<br/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li id="home" className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li id="registration" className="nav-item"><a className="nav-link" href="/account">Registration</a></li>
                        <li className="drop-down" id="products" className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item dropdown" href="#">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        GeM
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                                        <a class="dropdown-item" href="#">BuyerServices</a>
                                        <a class="dropdown-item" href="#">SellerServices</a>
                                    </div>
                                </a>
                                <a class="dropdown-item" href="#">Web Development</a>
                                <a class="dropdown-item" href="#">E-Marketing</a>
                                <a class="dropdown-item" href="#">Business Productivity Services</a>
                                <a class="dropdown-item" href="#">Machine Learning</a>
                                <a class="dropdown-item" href="#">Professionals Toolbox</a>
                            </div>
                        </li>
                        <li id="about" className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li id="contact" className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            
            <Modal show={show} onHide={handleModel} animation={true} className="d-flex align-items-center" >
                {/* <Modal.Header closeButton>
                    <Modal.Title>Sign in with</Modal.Title>
                </Modal.Header> */}
                {
                    (user.googleSignIn ) ? <div style={{textAlign: 'center', padding: '50px'}}>
                        <img src={user.photo} alt="Photo" width="50px" style={{ borderRadius: '50%' }} />
                        <p>Welcome, {user.name}</p>
                        <p>{user.email}</p>
                        <br/>
                        {/* <button onClick={handleSignOutGoogle}>Sign Out</button> */}
                        <Button onClick={handleSignOutGoogle} style={{backgroundColor: 'transparent', border: 'none'}}>
                            <img src={logout} alt="Logout" width="100px"/>
                        </Button>
                    </div> 
                   :
                <Modal.Body closeButton style={{textAlign: 'center', padding: '50px'}}>
                    <h3>Sign in with</h3> <br/>
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

export default Navbar
