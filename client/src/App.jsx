import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Episodes from "./components/Episodes/Episodes";
import Home from "./components/Home/Home";

function App() {
  


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/season/episodes" element={<Episodes/>}/>
      </Routes>

    </div>
  );
}

export default App;
