import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Card from "./components/Reusables/Card/Card";
import Carousel from "./components/Reusables/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Card />} />
          <Route path="logo" element={<Carousel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
