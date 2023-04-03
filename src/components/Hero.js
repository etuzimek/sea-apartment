import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/video/video-1.mp4" autoPlay loop muted />
      <p>
        Sea
        <br />
        Apartament
      </p>
    </div>
  );
}

export default Hero;
