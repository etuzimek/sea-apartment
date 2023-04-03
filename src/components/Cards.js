import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="mobile">
        <div className="mobile-container">
          <a href="/apartament">
            <img src="/images/img3.jpg" alt="apartament"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="/plaza">
            <img src="/images/img-1.jpg" alt="plaza"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="/atrakcje">
            <img src="/images/img-3.jpg" alt="atrakcje"></img>
          </a>
        </div>
        <div className="mobile-container">
          <a href="/galeria">
            <img src="/images/img4.jpg" alt="galeria"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
