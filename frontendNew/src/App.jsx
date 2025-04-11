// // 

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';

// import TrendingProducts from './components/TrendingProducts';
// import PlanningSection from './components/PlanningSection';
// import Whychoose from './components/Whychoose';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import Auth from './components/Auth';
// import AppoinmentList from './components/AppoinmentList';
// import Services from './components/Services';
// import IphoneRepairDetails from './pages/IphoneRepairDetails';
// import AndroidRepairDetails from './pages/AndroidRepairDetails';
// import TabletLaptopRepair from './pages/TabletLaptopRepair';
// import CheckoutForm from "./pages/CheckoutForm";
// import StripeSuccess from './pages/StripSuccess';
// import KlarnaSuccess from './pages/KlarnaSuccess';
// import { CartProvider } from './components/CartContext';
// import Cart from './pages/Cart';
// function App() {
//   return (
//     <Router>
//        <CartProvider> 
//       <div className="app-container">
//         <Navbar />
//         <Routes>
//           {/* Define Routes for each page */}
          
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <Services/>
//                 {/* <TrendingProducts /> */}
//                 <PlanningSection />
                

               
//                 <Whychoose />
//                 <Footer />
                
//               </>
//             }
//           />

//           <Route path='contact' element ={<Contact/>}/>
//           <Route path='destination' element ={<TrendingProducts/>}/>
//           <Route path='/auth' element={<Auth/>} />
//           <Route path="/booking" element={<AppoinmentList />} />
//           <Route path="/sercices" element={<Services />} />
//           <Route path="/iphone-repair-details" element={<IphoneRepairDetails />} />
//           <Route path="/android-repair-details" element={<AndroidRepairDetails />} />
//           <Route path="/tablet-laptop-repair" element={<TabletLaptopRepair />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<CheckoutForm />} />
//           <Route path="/payment-success/stripe" element={<StripeSuccess />} />
//           <Route path="/payment-success/klarna" element={<KlarnaSuccess />} />
//         </Routes>
//       </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingProducts from './components/TrendingProducts';
import PlanningSection from './components/PlanningSection';
import Whychoose from './components/Whychoose';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Auth from './components/Auth';
import AppoinmentList from './components/AppoinmentList';
import Services from './components/Services';
import IphoneRepairDetails from './pages/IphoneRepairDetails';
import AndroidRepairDetails from './pages/AndroidRepairDetails';
import TabletLaptopRepair from './pages/TabletLaptopRepair';
import CheckoutForm from './pages/CheckoutForm';
import StripeSuccess from './pages/StripSuccess';
import KlarnaSuccess from './pages/KlarnaSuccess';
import Cart from './pages/Cart'; // ✅ اضافه شد
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Services />
                  <PlanningSection />
                  <Whychoose />
                  <Footer />
                </>
              }
            />

            <Route path="contact" element={<Contact />} />
            <Route path="destination" element={<TrendingProducts />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/booking" element={<AppoinmentList />} />
            <Route path="/sercices" element={<Services />} />
            <Route path="/iphone-repair-details" element={<IphoneRepairDetails />} />
            <Route path="/android-repair-details" element={<AndroidRepairDetails />} />
            <Route path="/tablet-laptop-repair" element={<TabletLaptopRepair />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/payment-success/stripe" element={<StripeSuccess />} />
            <Route path="/payment-success/klarna" element={<KlarnaSuccess />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
