import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/Navigation Bar/NavigationBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
        <NavigationBar/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<p>product</p>} />
        </Routes>
    </>
  );
}

export default App;
