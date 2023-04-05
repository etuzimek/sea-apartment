import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";
import Gallery from "./pages/Gallery";
import Beach from "./pages/Beach";
import Rules from "./pages/Rules";
import Contact from "./pages/Contact";
import Attractions from "./pages/Attractions";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/beach" element={<Beach />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
