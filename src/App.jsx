/* React */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Pages */
import Home from "./Components/pages/home";
import Category from "./Components/pages/category";
import Item from "./Components/pages/item";
import Cart from "./Components/pages/cart";

/* Context */
import { CartContext } from "./context/CartContext";

/* Styles */
import "./App.css";

/* Nav */
import CartWidget from "./Components/NavBar/CartWidget/CartWidget";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App">
          <NavBar>
            <CartWidget />
          </NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
