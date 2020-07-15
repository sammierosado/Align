import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
  <div className="navBar">
  <div>
  <Link to="/">AlignTheStars.com</Link>
  </div>
    <div>
    <Link to="/daily-horoscope">Daily Horoscope&#x25BE;</Link>
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

export default Nav;
