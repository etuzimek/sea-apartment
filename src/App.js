import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";
import Gallery from "./pages/Gallery";
import Rules from "./pages/Rules";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/apartament" element={<Apartment/>} />
          <Route path="/galeria" element={<Gallery/>} />
          <Route path="/regulamin" element={<Rules/>} />
          <Route path="/kontakt" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
