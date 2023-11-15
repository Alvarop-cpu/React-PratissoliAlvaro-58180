import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import "./App.css";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      
      <NavBar />

        <p className="has-text-centered title is-2">
        <ItemListContainer greeting={"Bienvenidos a StreetFlow"}/>
        </p>

    </div>
  );
}

export default App;
