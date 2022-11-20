import "./App.css";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar>
          <CartWidget />
        </NavBar>
      </div>
      <ItemListContainer greeting="en SPR Libros" />
    </div>
  );
}

export default App;
