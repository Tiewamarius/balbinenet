

import { Link } from "react-router-dom";

// Navbar Section Start
export default function Navbar() {
  return (
    <div className="navbar-area">
      {/* Menu For Mobile Device */}
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img
            src="/assets/img/logo.png"
            className="main-logo"
            alt="Balbine.net"
          />
          <img
            src="/assets/img/logo-2.png"
            className="white-logo"
            alt="Balbine.net"
          />
        </Link>
      </div>

      {/* Menu For Desktop Device */}
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" className="navbar-brand">
              <img
                src="/assets/img/logo.png"
                className="main-logo"
                alt="Balbine.net"
              />
              <img
                src="/assets/img/logo-2.png"
                className="white-logo"
                alt="Balbine.net"
              />
            </Link>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                {/* Accueil */}
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Accueil
                    <i className="icofont-rounded-right" />
                  </Link>
                </li>

                {/* À propos */}
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    À propos
                  </Link>
                </li>

                {/* Services */}
                <li className="nav-item">
                  <Link to="/services" className="nav-link dropdown-toggle">
                    Services
                    <i className="icofont-rounded-right" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Nos services
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Formules */}
                <li className="nav-item">
                  <Link to="/formules" className="nav-link">
                    Nos formules
                  </Link>
                </li>

                {/* Espace client */}
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Connexion
                  </Link>
                </li>

                {/* Contact */}
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="navbar-button">
                <Link to="/contact">Demander un devis</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
