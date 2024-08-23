import React, { useEffect, useState } from "react";
import "../styles/custom-style/currentTime.css";

function CurrentTime() {
  const locale = "en";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTimeStamp, setFormattedTimeStamp] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 10 * 1000); // every 10 sec
    return () => {
      clearInterval(timer);
    };
  }, []);
/*
  useEffect(() => {
    // the : on the Time stamps ticks every second
    const timeStampTimer = setInterval(() => {
        console.log("calling the change on time", formattedTimeStamp)
      if (!formattedTimeStamp) return;
      if (formattedTimeStamp.indexOf(":") === -1) {
        //we do not have :
        setFormattedTimeStamp(formattedTimeStamp.replace(" ", ":"));
      } else {
        setFormattedTimeStamp(formattedTimeStamp.replace(":", " "));
      }
    }, 1000); // every second
    return ()=>{
        clearInterval(timeStampTimer)
    }
  }, [formattedTimeStamp]);*/

  useEffect(() => {
    setFormattedTimeStamp(
      currentTime.toLocaleString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
    setFormattedDate(
      currentTime.toLocaleDateString(locale, {
        weekday: "long",
        month: "short",
        day: "numeric",
      })
    );
  }, [currentTime]);

  return (
    <div className="currenttime-container">
      <p className="currenttime-timestmap">{formattedTimeStamp}</p>
      <p className="currenttime-date">{formattedDate}</p>
    </div>
  );
}

export default CurrentTime;
