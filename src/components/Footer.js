import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import "./Contact.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <Contact />
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Pomoc</h2>
            <Link to="/">Jak dojechac</Link>
            <Link to="/">Na plaze</Link>
            <Link to="/">Molo</Link>
            <Link to="/">Osiedle</Link>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/">Rezerwacja</Link>
            <Link to="/">Pytania</Link>
            <Link to="/">Regulamin</Link>
            <Link to="/">Kontakt</Link>
          </div>
        </div>
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Filmiki</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div> */}
      </div>
      <section>
        <div>
          {/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div> */}
          <small className="website-rights">ETUZ @ 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
