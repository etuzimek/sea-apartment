import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Strona główna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apartament"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Apartament
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/galeria"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Galeria
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/regulamin"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Regulamin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/kontakt"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <div class="social-icons">
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>

              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
