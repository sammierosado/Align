import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { PuffLoader } from "react-spinners";

function DailyHoroscope() {
  const [sunSignHoro, setSunSignHoro] = useState({});
  const [loading, setLoading] = useState(false);

  const getHoroscopeData = () => {
    const URL = "https://aztro.sameerkumar.website/?sign=gemini&day=today";
    fetch(URL, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((json) => {
      setSunSignHoro(json);
      setLoading(true);
    });
  }

  useEffect(() => {
   getHoroscopeData();
  });
  return (
    <div>
      <div className="horoscopeHeader">Gemini Horoscope</div>
      <div className="horoscopePage">
        <div>{sunSignHoro.current_date}</div>
        <div>{sunSignHoro.description}</div>
        {sunSignHoro.compatibility}
        {sunSignHoro.lucky_number}
        {sunSignHoro.lucky_time}
        {sunSignHoro.color}
        {sunSignHoro.date_range}
        {sunSignHoro.mood}
        <PuffLoader size={150} color={"#123abc"} />
      </div>
    </div>
  );
}
export default DailyHoroscope;
