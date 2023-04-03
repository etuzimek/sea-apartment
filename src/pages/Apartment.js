import React from "react";
import "./Apartment.css";

export default function Apartment() {
  return (
    <>
      <div className="apartment">
        <h1>GALERIA ZDJĘĆ</h1>
        <div className="apartment-wrapper">
          <img src="../images/img1.jpg" alt="apartament" />
          <div className="box" id="obrazek1">
            <img src="../images/img1.jpg" alt="apartament" />
          </div>
          <img src="../images/img2.jpg" alt="apartament" />
          <div className="box" id="obrazek2">
            <img src="../images/img2.jpg" alt="apartament" />
          </div>
          <img src="../images/img3.jpg" alt="apartament" />
          <div className="box" id="obrazek3">
            <img src="../images/img3.jpg" alt="apartament" />
          </div>
        </div>
      </div>
    </>
  );
}
