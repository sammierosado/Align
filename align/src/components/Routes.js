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
          <DailyHoroscope sun_sign={"aries"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/leo-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"leo"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/cancer-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"cancer"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/pisces-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"pisces"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/scorpio-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"scorpio"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/taurus-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"taurus"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/sagittarius-horoscope"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"sagittarius"}
            date={"today"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/gemini-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"gemini"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/virgo-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"virgo"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/libra-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"libra"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/capricorn-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"capricorn"} date={"today"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/aquarius-horoscope"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"aquarius"} date={"today"} {...oldProps} />
        )}
      />

      <Route
        exact
        path="/aries-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"aries"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/taurus-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"taurus"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/gemini-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"gemini"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/cancer-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"cancer"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/leo-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"leo"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/virgo-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"virgo"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/libra-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"libra"} date={"tomorrow"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/scorpio-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"scorpio"}
            date={"tomorrow"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/sagittarius-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"sagittarius"}
            date={"tomorrow"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/capricorn-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"capricorn"}
            date={"tomorrow"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/aquarius-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"aquarius"}
            date={"tomorrow"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/pisces-horoscope-tomorrow"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"pisces"} date={"tomorrow"} {...oldProps} />
        )}
      />
       <Route
        exact
        path="/aries-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"aries"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/taurus-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"taurus"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/gemini-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"gemini"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/cancer-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"cancer"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/leo-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"leo"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/virgo-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"virgo"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/libra-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"libra"} date={"yesterday"} {...oldProps} />
        )}
      />
      <Route
        exact
        path="/scorpio-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"scorpio"}
            date={"yesterday"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/sagittarius-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"sagittarius"}
            date={"yesterday"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/capricorn-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"capricorn"}
            date={"yesterday"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/aquarius-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope
            sun_sign={"aquarius"}
            date={"yesterday"}
            {...oldProps}
          />
        )}
      />
      <Route
        exact
        path="/pisces-horoscope-yesterday"
        render={(oldProps) => (
          <DailyHoroscope sun_sign={"pisces"} date={"yesterday"} {...oldProps} />
        )}
      />


      <Route component={Err404} />
    </Switch>
  );
}

export default Routes;
