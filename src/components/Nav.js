import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="navbar">

  
      <Link to="/">
      <img src="\star-logo.svg" height={50}/>
      </Link>
     
    </div>
  );
}

export default Nav;
