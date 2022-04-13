import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="navbar">
      <Link to="/">AlignTheStars.com</Link>
    </div>
  );
}

export default Nav;
