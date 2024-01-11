import "./App.css"
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route className="Button" path="/" element={<ItemListContainer />}/>
            <Route className="Button" path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route className="Button" path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;