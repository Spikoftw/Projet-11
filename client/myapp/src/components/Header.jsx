import React from "react";
import LogoArgentBank from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { isLogged } = useSelector(selectAuth);
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/SignIn";
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={LogoArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isLogged && (
          <Link className="main-nav-item" to={"/Signin"}>
            <FontAwesomeIcon icon={faCircleUser} />
            <span> Sign In</span>
          </Link>
        )}
        {isLogged && (
          <>
            <Link className="main-nav-item" to="/User">
              <FontAwesomeIcon icon={faCircleUser} />
              <span> Tony</span>
            </Link>
            <Link className="main-nav-item" onClick={logout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span> Sign Out</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
