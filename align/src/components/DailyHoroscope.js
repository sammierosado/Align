import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { PuffLoader } from "react-spinners";

function DailyHoroscope({sun_sign}) {
  const [sunSignHoro, setSunSignHoro] = useState({});
  const [loading, setLoading] = useState(false);

  const getHoroscopeData = ({sun_sign}) => {
    const URL = `https://aztro.sameerkumar.website/?sign=${sun_sign}&day=today`
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
    getHoroscopeData({sun_sign});
  });
  return (
    <>
      <div className="horoscopeHeader">
        <div className="">{sun_sign} Horoscope {sunSignHoro.date_range}</div>
      </div>
      <div className="horoscopePage">
        <div className="horoscopeDescription">
          <strong>{sunSignHoro.current_date}:</strong> &nbsp;
          {sunSignHoro.description}
        </div>
        <div className="horoscopeContainers">
          <div className="horoscopeItems">Mood:&nbsp;{sunSignHoro.mood}</div>
          <div className="horoscopeItems">Compatibility:&nbsp; {sunSignHoro.compatibility}</div>
          <div className="horoscopeItems">Lucky Number:&nbsp;{sunSignHoro.lucky_number}</div>
          <div className="horoscopeItems">Lucky Time:&nbsp;{sunSignHoro.lucky_time}</div>
          <div className="horoscopeItems">Color:&nbsp;{sunSignHoro.color}</div>
        </div>
      </div>
      <div>
        <PuffLoader size={150} color={"#F17D80"} />
      </div>
    </>
  );
}
export default DailyHoroscope;
