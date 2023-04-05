import React from "react";
import "./Attractions.css";

export default function Attractions() {
  return (
    <div className="attractions">
      <h1>Okoliczne atracje</h1>
      <div className="attractions-content1">
        <h3>Papugarnia</h3>
        <p>
          Chcesz spędzić fajnie czas z rodziną w Trójmieście? Zapraszamy do
          Papugarni!
        </p>
        <a href="https://crazyanimals.pl/">
          <img src="../images/papugarnia.png" alt="papugarnia"></img>
        </a>
      </div>
      <div className="attractions-content2">
        <h3>Polsat Plus Arena</h3>
        <p>Sprawdz co ciekawego odbywa sie na stadionie</p>
        <a href="https://polsatplusarenagdansk.pl/">
          <img src="../images/stadion.png" alt="stadion"></img>
        </a>
      </div>
      <div className="attractions-content1">
        <h3>Westerplatte</h3>
        <p>
          Chcesz spędzić fajnie czas z rodziną w Trójmieście? Zapraszamy do
          Papugarni!
        </p>
        <a href="https://muzeum1939.pl/muzeum-westerplatte.html">
          <img src="../images/westerplatte.png" alt="westerplatte"></img>
        </a>
      </div>
      <div className="attractions-content2">
        <h3>Molo w Brzeznie</h3>
        <p>Wieczorny spacer po molo?</p>
        <a href="https://sportgdansk.pl/obiekty/molo-gdansk/">
          <img src="../images/molo.jpg" alt="molo"></img>
        </a>
      </div>
    </div>
  );
}
