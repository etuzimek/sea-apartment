import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check1"
          checked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check2"
          checked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check3"
          checked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check4"
          checked
        ></input>

        <div className="container">
          <h1>GALERIA ZDJEC</h1>
          <div className="top-content">
            <label for="check1">All photos</label>
            <label for="check2">Apartament</label>
            <label for="check3">Osiedle</label>
            <label for="check4">Atrakcje</label>
          </div>

          <div className="photo-gallery">
            <div className="pic place">
              <img src="../images/img1.jpg" alt="all"></img>
            </div>
            <div className="pic family">
              <img src="../images/img2.jpg" alt="all"></img>
            </div>
            <div className="pic child">
              <img src="../images/img3.jpg" alt="all"></img>
            </div>
            <div className="pic place">
              <img src="../images/img1.jpg" alt="all"></img>
            </div>
            <div className="pic family">
              <img src="../images/img2.jpg" alt="all"></img>
            </div>
            <div className="pic child">
              <img src="../images/img3.jpg" alt="all"></img>
            </div>
            <div className="pic place">
              <img src="../images/img1.jpg" alt="all"></img>
            </div>
            <div className="pic family">
              <img src="../images/img2.jpg" alt="all"></img>
            </div>
            <div className="pic child">
              <img src="../images/img3.jpg" alt="all"></img>
            </div>
            <div className="pic place">
              <img src="../images/img1.jpg" alt="all"></img>
            </div>
            <div className="pic family">
              <img src="../images/img2.jpg" alt="all"></img>
            </div>
            <div className="pic child">
              <img src="../images/img3.jpg" alt="all"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
