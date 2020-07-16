import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
  <div className="footer">
  <div>
  <Link to="/">AlignTheStars.com</Link>
  </div>
    <div>
    <Link to="/about-us">About</Link>
    </div>
    <div>
    <Link to="/contact-us">Contact</Link>
    </div>
    <div>
    <Link to="/">Zodiac Signs</Link>
    </div>

  </div>

  )
}

export default Footer;
