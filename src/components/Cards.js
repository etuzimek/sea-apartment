import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="mobile">
        <div className="mobile-container">
          <a href="/apartment">
            <img src="/images/img3.jpg" alt="apartament"></img>
          </a>
        </div>
        <div className="mobile-container" >
          <a href="/beach">
            <img src="/images/beach1.jpg" alt="plaza"></img>
          </a>
        </div>
        <div className="mobile-container" >
          <a href="/atractions">
            <img src="/images/img-3.jpg" alt="atrakcje"></img>
          </a>
        </div>
        <div className="mobile-container" >
          <a href="/gallery">
            <img src="/images/img4.jpg" alt="galeria"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
