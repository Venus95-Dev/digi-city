// 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingDestination from './components/TrendingDestinations';
import PlanningSection from './components/PlanningSection';
import WhyChoose from './components/Whychoose';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Auth from './components/Auth';




function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Define Routes for each page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TrendingDestination />
                <PlanningSection />
                <WhyChoose />
                <Footer />
                
              </>
            }
          />
         
          <Route path='contact' element ={<Contact/>}/>
          <Route path='destination' element ={<TrendingDestination/>}/>
          <Route path='/auth' element={<Auth/>} />
    

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;




