import React from "react";
import { useState, useEffect } from "react";

function DailyHoroscope() {
  const [sunSignHoro, setSunSignHoro] = useState({});

  const URL = "https://aztro.sameerkumar.website/?sign=aries&day=today";
  fetch(URL, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((json) => {
      setSunSignHoro(json);
    });

  return (
    <div>
      DailyHoroscope
      <div>
      {sunSignHoro.current_date}
      </div>
      <div>
      {sunSignHoro.description}
      </div>
      
      {sunSignHoro.compatibility}
      {sunSignHoro.lucky_number}
      {sunSignHoro.lucky_time}
      {sunSignHoro.color}
      {sunSignHoro.date_range}
      {sunSignHoro.mood}
    </div>
  );
}
export default DailyHoroscope;
