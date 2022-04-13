import React from "react";

function Home() {
  return (
    <>
      <div className="homepageTitle">CHOOSE YOUR ZODIAC SIGN</div>
      <div className="zodiacContainer">
        <a href="/aries-horoscope">
          <img src="/ariesSVG.svg" alt="aries" height="100" width="100" />
          Aries
        </a>
        <a href="/taurus-horoscope">
          <img src="/taurusSVG.svg" alt="taurus" height="100" width="100" />
          Taurus
        </a>

        <a href="/gemini-horoscope">
          <img src="/geminiSVG.svg" alt="gemini" height="100" width="100" />{" "}
          Gemini
        </a>
        <a href="/cancer-horoscope">
          <img src="/cancerSVG.svg" alt="cancer" height="100" width="100" />{" "}
          Cancer
        </a>
        <a href="/leo-horoscope">
          <img src="/leoSVG.svg" alt="leo" height="100" width="100" /> Leo
        </a>
        <a href="/virgo-horoscope">
          <img src="/virgoSVG.svg" alt="virgo" height="100" width="100" /> Virgo
        </a>
        <a href="/libra-horoscope">
          <img src="/libraSVG.svg" alt="libra" height="100" width="100" /> Libra
        </a>
        <a href="/scorpio-horoscope">
          <img src="/scorpioSVG.svg" alt="scorpio" height="100" width="100" />{" "}
          Scorpio
        </a>
        <a href="/sagittarius-horoscope">
          <img
            src="/sagittariusSVG.svg"
            alt="sagittarius"
            height="100"
            width="100"
          />{" "}
          Sagittarius
        </a>
        <a href="/capricorn-horoscope">
          <img
            src="/capricornSVG.svg"
            alt="capricorn"
            height="100"
            width="100"
          />{" "}
          Capricorn
        </a>
        <a href="/aquarius-horoscope">
          <img src="/aquariusSVG.svg" alt="aquarius" height="100" width="100" />{" "}
          Aquarius
        </a>
        <a href="/pisces-horoscope">
          {" "}
          <img
            src="/piscesSVG.svg"
            alt="pisces"
            height="100"
            width="100"
          />{" "}
          Pisces
        </a>
      </div>
    </>
  );
}

export default Home;
