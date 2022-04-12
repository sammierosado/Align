import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { PuffLoader } from "react-spinners";
function DailyHoroscope({ sun_sign, signs, date }) {
  const [sunSignHoro, setSunSignHoro] = useState([]);
  const [currentDay, setCurrentDay] = useState("today"); // intializes today as the first state
  const getHoroscopeData = () => {
    const urlConst = date.map( // construct url to retrieve data for days in date array
      (d) => `https://aztro.sameerkumar.website/?sign=${sun_sign}&day=${d}`
    );
    Promise.all(
      urlConst.map((url) =>
        fetch(url, { method: "POST" }).then((data) => data.json())
      )
    )
      .then((data) => { // structure data to mange days with currentDay states
        const signHoroDataStructure = data.map((d, i) => ({
          date: date[i],
          data: d,
        }));
        setSunSignHoro(signHoroDataStructure);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getHoroscopeData();
  });

  if (!sunSignHoro.length > 0) {
    return <PuffLoader />;
  }

  const horoscopeInfo = sunSignHoro.filter((s) => s.date === currentDay)[0].data; //updates state for day horoscope info
  return (
    <>
    {/* HEADER */}
      <div className="horoscopeHeader">
        <div className="horoTitle">{sun_sign} Horoscope</div>
        <div className="dropdown">
          <button className="dropbtn">Change Sign&#x25BE;</button>
          <div className="dropdown-content">
            {signs.map((h, i) => (
              <a key={h.sign + i} href={`/${h.url}`}>
                {h.sign}
              </a>
            ))}
          </div>
        </div>
      </div>

    {/*INFO*/}
      <div className="horoscopePage">
        <div className="changeDay">
          {date.map((d, i) => (
            <button
              key={d + i}
              onClick={() => setCurrentDay(d)}
              className={d !== currentDay ? 'date-button button-active':'date-button'}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="horoscopeDescription">
          <strong>{horoscopeInfo.current_date}:</strong> &nbsp;
          {horoscopeInfo.description}
        </div>
        <ul className="horoscopeContainers">
          <li className="horoscopeItems">
            Compatibility
            <div className="horoCompatibility">
              <img alt={"horoscope-sign"} src="/piscesSVG.svg"></img>
              {horoscopeInfo.compatibility}
            </div>
          </li>
          <li className="horoscopeItems">Mood:&nbsp;{horoscopeInfo.mood}</li>
          <li className="horoscopeItems">
            Lucky Number:&nbsp;{horoscopeInfo.lucky_number}
          </li>
          <li className="horoscopeItems">Color:&nbsp;{horoscopeInfo.color}</li>
        </ul>
      </div>
    </>
  );
}
export default DailyHoroscope;
