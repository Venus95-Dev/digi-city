// 

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingDestination from './components/TrendingDestinations';
import PlanningSection from './components/PlanningSection';
import WhyChoose from './components/Whychoose';
import Footer from './components/Footer';
import Login from './components/Login';
import Contact from './components/Contact';


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
          <Route path="/login" element={<Login />} />
          <Route path='contact' element ={<Contact/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
