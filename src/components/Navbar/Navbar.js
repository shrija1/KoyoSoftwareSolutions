import React from 'react'
import './Navbar.css'
import logo from '../../img/logo/softsiteLogo1.png'

function Navbar() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center justify-content-between">

            {/* <h1 className="logo"><a href="/">SoftSite</a></h1> */}
            <a href="/" className="logo"><img src={logo} alt="SoftSite" className="img-fluid"/></a>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="#">Registration</a></li>
                <li className="drop-down"><a href="">Products</a>
                    <ul>
                        <li><a href="#">GeM</a></li>
                        <li className="drop-down"><a href="#">Web Development</a>
                            <ul>
                                <li><a href="#">product 2.1</a></li>
                                <li><a href="#">product 2.2</a></li>
                                <li><a href="#">product 2.3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">E-Marketing</a></li>
                        <li><a href="#">Business Productivity Services</a></li>
                        <li><a href="#">Machine Learning</a></li>
                        <li><a href="#">Professionals Toolbox</a></li>
                    </ul>
                </li>
                <li><a href="#">Chat</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Contact</a></li>

                </ul>
            </nav>

            <a href="/registration" className="get-started-btn scrollto">Get Started</a>

            </div>
        </header>
    )
}

export default Navbar
