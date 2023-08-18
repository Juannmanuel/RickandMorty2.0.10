import "./App.css";
import { getAllCharacters } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/detail";
function App() {
  


  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/cards"} element={<Cards/>}/>
        <Route path={"/detail/:id"} element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
