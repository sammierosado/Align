import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { PuffLoader } from "react-spinners";

function DailyHoroscope({ sun_sign }) {
  const [sunSignHoro, setSunSignHoro] = useState({});
  const [loading, setLoading] = useState(false);

  const getHoroscopeData = ({ sun_sign }) => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sun_sign}&day=today`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        setSunSignHoro(json);
        setLoading(true);
      });
  };

  useEffect(() => {
    getHoroscopeData({ sun_sign });
  });
  return (
    <>
      <div className="horoscopeHeader">
        <div className="horoTitle">{sun_sign} Horoscope</div>

        <div class="dropdown">
          <button class="dropbtn">Change Sign</button>
          <div class="dropdown-content">
            <a href="/aries-horoscope">Aries</a>
            <a href="/taurus-horoscope">Taurus</a>
            <a href="/gemini-horoscope">Gemini</a>
            <a href="/cancer-horoscope">Cancer</a>
            <a href="/leo-horoscope">Leo</a>
            <a href="/virgo-horoscope">Virgo</a>
            <a href="/libra-horoscope">Libra</a>
            <a href="/scorpio-horoscope">Scorpio</a>
            <a href="/sagittarius-horoscope">Sagittarius</a>
            <a href="/capricorn-horoscope">Capricorn</a>
            <a href="/aquarius-horoscope">Aquarius</a>
            <a href="/pisces-horoscope">Pisces</a>
          </div>
        </div>

        {/* <div className="dd-wrapper">Change Sign&#x25BE;
          {" "}
          
          <div className="dd-header">
            <div className="dd-header-title">Change Sign</div>
          </div>
          <ul className="dd-list">
            <a href="/aries-horoscope">Aries</a>
            
            
          </ul>
        </div> */}
      </div>
      <div className="horoscopePage">
        <div className="horoscopeDescription">
          <strong>{sunSignHoro.current_date}:</strong> &nbsp;
          {sunSignHoro.description}
        </div>
        <div className="horoscopeContainers">
          <div className="horoscopeItems">Mood:&nbsp;{sunSignHoro.mood}</div>
          <div className="horoscopeItems">
            Compatibility:&nbsp; {sunSignHoro.compatibility}
          </div>
          <div className="horoscopeItems">
            Lucky Number:&nbsp;{sunSignHoro.lucky_number}
          </div>
          <div className="horoscopeItems">
            Lucky Time:&nbsp;{sunSignHoro.lucky_time}
          </div>
          <div className="horoscopeItems">Color:&nbsp;{sunSignHoro.color}</div>
        </div>
      </div>
      <div>{/* <PuffLoader size={150} color={"#F17D80"} /> */}</div>
    </>
  );
}
export default DailyHoroscope;
