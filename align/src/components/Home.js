import React from "react";

function Home() {
  return (
    <>

      <div className="homepageTitle">
         CHOOSE YOUR ZODIAC SIGN
      </div>
      <div className="zodiacContainer">
        <a href="www.google.com">
          <img src="/ariesSVG.svg" alt="aries" height="100" width="100" />
          Aries

        </a>
        <a href="www.google.com">
          <img src="/taurusSVG.svg" alt="taurus" height="100" width="100" />
          Taurus
        </a>
     
        <a href="www.google.com">
          <img src="/geminiSVG.svg" alt="gemini" height="100" width="100" /> Gemini
        </a>
        <a href="www.google.com">
          <img src="/cancerSVG.svg" alt="cancer" height="100" width="100" /> Cancer
        </a>
        <a href="www.google.com">
          <img src="/leoSVG.svg" alt="leo" height="100" width="100" /> Leo
        </a>
        <a href="www.google.com">
          <img src="/virgoSVG.svg" alt="virgo" height="100" width="100" /> Virgo
        </a>
        <a href="www.google.com">
          <img src="/libraSVG.svg" alt="libra" height="100" width="100" /> Libra
        </a>
        <a href="www.google.com">
          <img src="/scorpioSVG.svg" alt="scorpio" height="100" width="100" /> Scorpio
        </a>
        <a href="www.google.com">
          <img
            src="/sagittariusSVG.svg"
            alt="sagittarius"
            height="100"
            width="100"
          /> Sagittarius
        </a>
        <a href="www.google.com">
          <img
            src="/capricornSVG.svg"
            alt="capricorn"
            height="100"
            width="100"
          /> Capricorn
        </a>
        <a href="www.google.com">
          <img src="/aquariusSVG.svg" alt="aquarius" height="100" width="100" /> Aquarius
        </a>
        <a href="www.google.com">
          {" "}
          <img src="/piscesSVG.svg" alt="pisces" height="100" width="100" /> Pisces
        </a>
      </div>
    </>
  );
}

export default Home;
