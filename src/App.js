import React from 'react';
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
import GeM from './components/Products/GeM/GeM';
import WebDevelopment from './components/Products/WebDevelopment/WebDevelopment';
import EMarketing from './components/Products/EMarketing/EMarketing';
import BusinessProductivityServices from './components/Products/BusinessProductivityServices/BusinessProductivityServices';
import MachineLearning from './components/Products/MachineLearning/MachineLearning';
import ProfessionalsToolbox from './components/Products/ProfessionalsToolbox/ProfessionalsToolbox';
import Chat from './components/Chat/Chat';
import About from './components/Home/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Home/Contact/Contact';


function App() {
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
              <Registration/>
            </Route>
            <Route path='/gem'>
              <GeM/>
            </Route>
            <Route path='/webDevelopment'>
              <WebDevelopment/>
            </Route>
            <Route path='/e-marketing'>
              <EMarketing/>
            </Route>
            <Route path='/businessPS'>
              <BusinessProductivityServices/>
            </Route>
            <Route path='/machineLearning'>
              <MachineLearning/>
            </Route>
            <Route path='/professionalsToolbox'>
              <ProfessionalsToolbox/>
            </Route>
            <Route path='/chat'>
              <Chat/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route>





            <Route path='/portfolio'>
              <NavbarOfPortfolio/>
              <PortfolioDetails/>
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
