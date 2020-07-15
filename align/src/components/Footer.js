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
    <Link to="/about-us">About&#x25BE;</Link>
    </div>
    <div>
    <Link to="/contact-us">Contact&#x25BE;</Link>
    </div>
    <div>
    <Link to="/">Zodiac Signs&#x25BE;</Link>
    </div>

  </div>

  )
}

export default Footer;
