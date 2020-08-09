import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../img/logo/softsiteLogo3.png'

function Navbar(props) {
    
    useEffect(() => {
        if (props.active !== '') {
            document.getElementById(props.active).className = "active"
        }
    })
    return (
        <header id="header" className="fixed-top ">

            <div className="container d-flex align-items-center justify-content-between">

            <a href="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></a>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li id="home"><a href="/">Home</a></li>
                <li id="registration"><a href="/account">Registration</a></li>
                <li className="drop-down" id="products"><a href="">Products</a>
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
                <li id="about"><a href="/about">About</a></li>
                {/* <li><a href="/cart">Cart</a></li> */}
                <li id="contact"><a href="/contact">Contact</a></li>

                </ul>
            </nav>

            <a href="/account" className="get-started-btn scrollto">Account</a>

            </div>
        </header>
    )
}

export default Navbar
