import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import PortfolioDetails from './components/PortfolioDetails/PortfolioDetails';
import NavbarOfPortfolio from './components/PortfolioDetails/NavbarOfPortfolio';
import Registration from './components/Registration/Registration';
import BuyerServices from './components/Products/BuyerServices/BuyerServices';
import SellerServices from './components/Products/SellerServices/SellerServices';
import WebDevelopment from './components/Products/WebDevelopment/WebDevelopment';
import EMarketing from './components/Products/EMarketing/EMarketing';
import BusinessProductivityServices from './components/Products/BusinessProductivityServices/BusinessProductivityServices';
import MachineLearning from './components/Products/MachineLearning/MachineLearning';
import ProfessionalsToolbox from './components/Products/ProfessionalsToolbox/ProfessionalsToolbox';
import Chat from './components/Chat/Chat';
import About from './components/Home/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Home/Contact/Contact';
import AboutPage from './components/AboutPage/AboutPage';
import HeaderForAll from './components/HeaderForAll/HeaderForAll';
import Admin from './components/Admin/Admin';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import AdminDashboardLogin from './components/Dashboard/AdminDashboard/AdminDashboardLogin';


// import connectDatabase from '../src/node-mysql/connectDatabase'


function App() {
  // useEffect(() => {
  //   fetch('http://localhost:4400/getData')
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  // }, [])



  return (
    <div className="">
      <Sidebar/>
      <div className="mainContent">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navbar/>
              <Header/>
              <Home/>
              <Footer />
            </Route>
            <Route path='/account'>
              <Navbar/>
              <HeaderForAll title='Account'/>
              <Registration/>
              <Footer />
            </Route>
            <Route path='/BuyerServices'>
              <Navbar/>
              <HeaderForAll title='BuyerServices'/>
              <BuyerServices/>
              <Footer />
            </Route>
            <Route path='/SellerServices'>
              <Navbar/>
              <HeaderForAll title='SellerServices'/>
              <SellerServices/>
              <Footer />
            </Route>
            <Route path='/webDevelopment'>
              <WebDevelopment/>
              <Footer />
            </Route>
            <Route path='/e-marketing'>
              <EMarketing/>
              <Footer />
            </Route>
            <Route path='/businessPS'>
              <BusinessProductivityServices/>
              <Footer />
            </Route>
            <Route path='/machineLearning'>
              <MachineLearning/>
              <Footer />
            </Route>
            <Route path='/professionalsToolbox'>
              <ProfessionalsToolbox/>
              <Footer />
            </Route>
            <Route path='/chat'>
              <Chat/>
              <Footer />
            </Route>
            <Route path='/about'>
              <Navbar/>
              <HeaderForAll title='About'/>
              <AboutPage/>
              <Footer/>
            </Route>
            <Route path='/cart'>
              <Cart/>
              <Footer />
            </Route>
            <Route path='/contact'>
              <Navbar/>
              <HeaderForAll title='About'/>
              <AboutPage/>
              <Footer/>
            </Route>

            <Route path='/admin'>
              <Navbar/>
              <HeaderForAll title='Admin Login Page'/>
              {/* <Admin/> */}
              <AdminDashboardLogin/>
              <Footer/>
            </Route>


            <Route path='/portfolio'>
              <NavbarOfPortfolio/>
              <PortfolioDetails/>
              <Footer />
            </Route>

            <Route path='/dashboard'>
              <AdminDashboard/>
              <Footer />
            </Route>

            
            <Route path='*'>
              <PageNotFound/>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
