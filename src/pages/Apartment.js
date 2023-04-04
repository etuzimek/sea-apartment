import React from "react";
import "./Apartment.css";

export default function Apartment() {
  return (
    <>
      <div className="apartment">
        <h1>APARTAMENT</h1>
        <div className="apartment-wrapper">
          <img src="../images/apartament1.jpg" alt="apartament" />
          <div className="box" id="obrazek1">
            <img src="../images/apartament1.jpg" alt="apartament" />
          </div>
          <img src="../images/apartament2.jpg" alt="apartament" />
          <div className="box" id="obrazek2">
            <img src="../images/apartament2.jpg" alt="apartament" />
          </div>
          <img src="../images/apartament3.jpg" alt="apartament" />
          <div className="box" id="obrazek3">
            <img src="../images/apartament3.jpg" alt="apartament" />
          </div>
          <img src="../images/apartament4.jpg" alt="apartament" />
          <div className="box" id="obrazek1">
            <img src="../images/apartament4.jpg" alt="apartament" />
          </div>
          <img src="../images/apartament5.jpg" alt="apartament" />
          <div className="box" id="obrazek1">
            <img src="../images/apartament5.jpg" alt="apartament" />
          </div>
        </div>
      </div>
    </>
  );
}
