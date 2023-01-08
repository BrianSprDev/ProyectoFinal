import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./Components/Cart/Cart";
import React from "react";
import { CartContext } from "./context/CartContext";
import ItemList from "./Components/ItemListContainer/ItemList/ItemList";

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
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/itemlist" element={<ItemList />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
