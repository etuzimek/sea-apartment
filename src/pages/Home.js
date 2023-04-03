import React from "react";
import "../App.css";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
// import CardsMobile from "../CardsMobile";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      {/* <CardsMobile /> */}
      <Footer />
    </>
  );
}

export default Home;
