import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from './pages/Home'
import EmptyCart from "./EmptyCart/EmptyCart"
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <div className="wrapper">
      <div className="content">
        <Header/>
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
