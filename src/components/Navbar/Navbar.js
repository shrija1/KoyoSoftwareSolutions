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
                <a href="/account" className="get-started-btn scrollto">Sign In</a>
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







            {/* <nav className="container navbar navbar-expand-md d-flex justify-content-between bg-dark">
                <a className="navbar-brand logo" href="/">
                    <img src={logo} alt="SoftSite" className="img-fluid"/>
                </a>
                <button id="navBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <i className="ri-arrow-down-line" aria-hidden="true"></i>
                </button>
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

                <a href="/account" className="get-started-btn scrollto">Account</a>
            </nav> */}
        </header>
    )
}

export default Navbar
