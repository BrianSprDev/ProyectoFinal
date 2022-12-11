import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
