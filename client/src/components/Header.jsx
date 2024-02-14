import React from "react";
import headerimage from "../img/argentBankLogo.png";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={headerimage}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
      {/* <li><Link to={`../`}>Accueil</Link></li>
                <li><Link to={`/About/`}>A Propos</Link></li> */}
    </nav>
  );
};

export default Header;
