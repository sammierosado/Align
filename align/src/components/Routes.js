import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Err404 from "./Err404";
import Contact from "./Contact";
import About from "./About";
import DailyHoroscope from "./DailyHoroscope";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/about-us" render={About} />
      <Route exact path="/contact-us" render={Contact} />
      <Route
        exact
        path="/aries-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"aries"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/leo-horoscope"
        render={(oldProps) => <DailyHoroscope sun_sign={"leo"} {...oldProps} />}
      />
      <Route
        exact
        path="/cancer-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"cancer"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/pisces-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"pisces"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/scorpio-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"scorpio"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/taurus-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"taurus"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/sagittarius-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"sagittarius"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/gemini-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"gemini"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/virgo-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"virgo"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/libra-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"libra"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/capricorn-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"capricorn"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/aquarius-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"aquarius"} {...oldProps} />
        )}
      />
      <Route component={Err404} />
    </Switch>
  );
}

export default Routes;
