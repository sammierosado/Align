import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Err404 from "./Err404";
import Contact from "./Contact";
import About from "./About";
import DailyHoroscope from "./DailyHoroscope";

function Routes() {
  const horoscopeSigns = [
    { url: "aries-horoscope", sign: "aries" },
    { url: "taurus-horoscope", sign: "taurus" },
    { url: "gemini-horoscope", sign: "gemini" },
    { url: "cancer-horoscope", sign: "cancer" },
    { url: "leo-horoscope", sign: "leo" },
    { url: "virgo-horoscope", sign: "virgo" },
    { url: "libra-horoscope", sign: "libra" },
    { url: "scorpio-horoscope", sign: "scorpio" },
    { url: "sagittarius-horoscope", sign: "sagittarius" },
    { url: "capricorn-horoscope", sign: "capricorn" },
    { url: "aquarius-horoscope", sign: "aquarius" },
    { url: "pisces-horoscope", sign: "pisces" },
  ];
  const days = ["yesterday","today", "tomorrow"];
  return (
    <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/about-us" render={About} />
      <Route exact path="/contact-us" render={Contact} />
      {horoscopeSigns.map((h, i) => (
        <Route
          key={h + i }
          exact
          path={`/${h.url}`}
          render={(oldProps) => (
            <DailyHoroscope
              sunSign={h.sign}
              date={days}
              {...oldProps}
              signs={horoscopeSigns}
            />
          )}
        />
      ))}
      <Route component={Err404} />
    </Switch>
  );
}

export default Routes;
