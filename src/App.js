import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import Home  from "./components/home/Home"; 
import Contact from "./components/contact/Contact";
import Grass from "./components/grass/Grass";
import PokemonDetail  from "./components/pokemon/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grass">Grass</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grass" element={<Grass />} />
        <Route path="/detail/:id" element={<PokemonDetail />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
