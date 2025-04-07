// 

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import TrendingProducts from './components/TrendingProducts';
import PlanningSection from './components/PlanningSection';
import Whychoose from './components/Whychoose';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Auth from './components/Auth';
import AppoinmentList from './components/AppoinmentList';





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
                <TrendingProducts />
                <PlanningSection />
               
                <Whychoose />
                <Footer />
                
              </>
            }
          />

          <Route path='contact' element ={<Contact/>}/>
          <Route path='destination' element ={<TrendingProducts/>}/>
          <Route path='/auth' element={<Auth/>} />
          <Route path="/booking" element={<AppoinmentList />} />
         
          
    

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;




