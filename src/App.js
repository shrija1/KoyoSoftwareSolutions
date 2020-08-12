import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
    <div>
      <Sidebar/>
      <div className="mainContent">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navbar active="home"/>
              <Header/>
              <Home/>
              <Footer />
            </Route>
            <Route path='/account'>
              <Navbar active=""/>
              <HeaderForAll title='Account'/>
              <Registration/>
              <Footer />
            </Route>
            <Route path='/BuyerServices'>
              <Navbar active=""/>
              <HeaderForAll title='Buyer Services'/>
              <BuyerServices/>
              <Footer />
            </Route>
            <Route path='/SellerServices'>
              <Navbar active=""/>
              <HeaderForAll title='Seller Services'/>
              <SellerServices/>
              <Footer />
            </Route>
            <Route path='/webDevelopment'>
              <Navbar active=""/>
              <HeaderForAll title='Web Development'/>
              <WebDevelopment/>
              <Footer />
            </Route>
            <Route path='/e-marketing'>
              <Navbar active=""/>
              <HeaderForAll title='E-Marketing'/>
              <EMarketing/>
              <Footer />
            </Route>
            <Route path='/businessPS'>
              <Navbar active=""/>
              <HeaderForAll title='Business Productivity Services'/>
              <BusinessProductivityServices/>
              <Footer />
            </Route>
            <Route path='/machineLearning'>
              <Navbar active=""/>
              <HeaderForAll title='Machine Learning'/>
              <MachineLearning/>
              <Footer />
            </Route>
            <Route path='/professionalsToolbox'>
              <Navbar active=""/>
              <HeaderForAll title='Professionals Toolbox'/>
              <ProfessionalsToolbox/>
              <Footer />
            </Route>
            {/* <Route path='/chat'>
              <Chat/>
              <Footer />
            </Route> */}
            <Route path='/about'>
              <Navbar active="about"/>
              <HeaderForAll title='About'/>
              <AboutPage/>
              <Footer/>
            </Route>
            {/* <Route path='/cart'>
              <Cart/>
              <Footer />
            </Route> */}
            <Route path='/contact'>
              <Navbar active="contact"/>
              <HeaderForAll title='Contact'/>
              <AboutPage/>
              <Footer/>
            </Route>

            <Route path='/admin'>
              <Navbar active=""/>
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
