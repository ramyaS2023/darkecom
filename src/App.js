import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import TopRated from "./Pages/TopRated";
import KidsWear from "./Pages/KidsWear";
import MensWear from "./Pages/MensWear";
import Electronics from "./Pages/Electronics";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [orderPopup, setorderPopup] = useState(false);

  const handleOrderPopup = () => {
    setorderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter basename="/darkecom">
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={
            <Home handleOrderPopup={handleOrderPopup} />
          } />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/kids-wear" element={<KidsWear />} />
          <Route path="/mens-wear" element={<MensWear />} />
          <Route path="/electronics" element={<Electronics />} />
        </Routes>
        <Popup orderPopup={orderPopup} setorderPopup={setorderPopup} />
      </div>
    </BrowserRouter>
  );
}




















































// import React from 'react'
// import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Products from './components/Products/Products'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import TopProducts from './components/TopProducts/TopProducts'
// import Banner from './components/Banner/Banner'
// import Subscribe from './components/Subscribe/Subscribe'
// import Testimonials from './components/Testimonials/Testimonials';
// import Footer from './components/Footer/Footer'
// import Popup from './components/Popup/Popup'
 
// const App = () => {

  // const [orderPopup, setorderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setorderPopup(!orderPopup);
  // };

  // React.useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // }, []);


//   return (
//     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        
//         <Navbar handleOrderPopup={handleOrderPopup}/>
//         <Hero handleOrderPopup={handleOrderPopup}/>
//         <Products />
//         <TopProducts handleOrderPopup={handleOrderPopup}/>
//         <Banner />
//         <Subscribe />
//         <Products />
//         <Testimonials />
//         <Footer />
//         <Popup orderPopup={orderPopup} setorderPopup={setorderPopup} />
//     </div>
//   )
// }

// export default App