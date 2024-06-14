import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LoginPop from "./components/LoginPopUp/LoginPop";
import Verify from "./pages/Verify/Verify";
import MyOrder from "./pages/MyOrders/MyOrder";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<MyOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
};

export default App;
