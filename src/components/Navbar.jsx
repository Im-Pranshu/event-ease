import React from "react";
import { Link } from "react-router-dom";
import "..//css/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to={"/"} className="navbar-brand">
        EventEase
      </Link>
      <nav className="navbar-links">
        <Link to="/sign-in" className="nav-link">
          Log In
        </Link>
        <Link to="/sign-up" className="nav-link">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
