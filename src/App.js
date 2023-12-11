import "./App.css"
import NavBar from "./component/NavBar/NavBar"
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route className="Button" path="/" element={<ItemListContainer />}/>
        <Route className="Button" path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route className="Button" path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;