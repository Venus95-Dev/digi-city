




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './i18n';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import TrendingProducts from './components/TrendingProducts';
// import PlanningSection from './components/PlanningSection';
// import Whychoose from './components/Whychoose';
// import Footer from './components/Footer';
// import Contact from './components/Contact';
// import Auth from './components/AuthPage';
// import AppoinmentList from './components/AppoinmentList';
// import Services from './components/Services';
// import IphoneRepairDetails from './pages/IphoneRepairDetails';
// import AndroidRepairDetails from './pages/AndroidRepairDetails';
// import TabletLaptopRepair from './pages/TabletLaptopRepair';
// import CheckoutForm from './pages/CheckoutForm';
// import StripeSuccess from './pages/StripSuccess';
// import KlarnaSuccess from './pages/KlarnaSuccess';
// import PaymentForm from './pages/PaymentForm';
// import CartPage from './pages/CartPage'; // ✅ اضافه شد
// import { CartProvider } from './components/CartContext';
// import AboutSection from './components/AboutSection';

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <div className="app-container">
//           <Navbar />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <Services />
//                   <PlanningSection />
//                   <Whychoose />
//                   <Footer />
//                 </>
//               }
//             />

//             <Route path="contact" element={<Contact />} />
//             <Route path="destination" element={<TrendingProducts />} />
//             <Route path="/auth" element={<Auth />} />
//             <Route path="/booking" element={<AppoinmentList />} />
//             <Route path="/sercices" element={<Services />} />
//             <Route path="/about-us" element={<AboutSection />} />

//             <Route path="/iphone-repair-details" element={<IphoneRepairDetails />} />
//             <Route path="/android-repair-details" element={<AndroidRepairDetails />} />
//             <Route path="/tablet-laptop-repair" element={<TabletLaptopRepair />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/checkout" element={<CheckoutForm />} />
//             <Route path="/payment-success/stripe" element={<StripeSuccess />} />
//             <Route path="/payment-success/klarna" element={<KlarnaSuccess />} />
//             <Route path="/test-payment" element={<PaymentForm />} />
       
        
//           </Routes>
//         </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingProducts from './components/TrendingProducts';
import PlanningSection from './components/PlanningSection';
import Whychoose from './components/Whychoose';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Auth from './components/AuthPage';
import AppoinmentList from './components/AppoinmentList';
import Services from './components/Services';
import IphoneRepairDetails from './pages/IphoneRepairDetails';
import AndroidRepairDetails from './pages/AndroidRepairDetails';
import TabletLaptopRepair from './pages/TabletLaptopRepair';
import CheckoutForm from './pages/CheckoutForm';
import StripeSuccess from './pages/StripSuccess';
import KlarnaSuccess from './pages/KlarnaSuccess';
import PaymentForm from './pages/PaymentForm';
import CartPage from './pages/CartPage';
import { CartProvider } from './components/CartContext';
import AboutSection from './components/AboutSection';

const AppRoutes = () => {
  const location = useLocation();
  const hideFooterPaths = ['/auth', '/checkout', '/payment-success/stripe', '/payment-success/klarna','/booking','/cart' ];

  return (
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
            </>
          }
        />

        <Route path="contact" element={<Contact />} />
        <Route path="destination" element={<TrendingProducts />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/booking" element={<AppoinmentList />} />
        <Route path="/sercices" element={<Services />} />
        <Route path="/about-us" element={<AboutSection />} />

        <Route path="/iphone-repair-details" element={<IphoneRepairDetails />} />
        <Route path="/android-repair-details" element={<AndroidRepairDetails />} />
        <Route path="/tablet-laptop-repair" element={<TabletLaptopRepair />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/payment-success/stripe" element={<StripeSuccess />} />
        <Route path="/payment-success/klarna" element={<KlarnaSuccess />} />
        <Route path="/test-payment" element={<PaymentForm />} />
      </Routes>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
