import "../styles/custom-style/timetable.css";
import React, { useEffect, useRef } from "react";
import { HHMMtoMinutes } from "../utils/DateHelper";

function TimeTable({ taskList }) {
  const scrollToRef = useRef(null); //used to start at the item where the scrollToRef is

  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <div className="timetable">
        <div className="timetable-ignore">
          {taskList.map((t, index) => (
            <div
              key={t.title + index}
              className="timetable-task"
              style={{ top: t.getStartTimeInMinutes() + "px", height: t.getDurationInMinutes() + "px" }}
            >
              {t.title}
            </div>
          ))}
        </div>
        <Hour hour="00" />
        <Hour hour="01" />
        <Hour hour="02" />
        <Hour hour="03" />
        <Hour hour="04" />
        <Hour hour="05" />
        <Hour hour="06" />
        <Hour hour="07" />
        <Hour scrollToRef={scrollToRef} hour="08" />
        <Hour hour="09" />
        <Hour hour="10" />
        <Hour hour="11" />
        <Hour hour="12" />
        <Hour hour="13" />
        <Hour hour="14" />
        <Hour hour="15" />
        <Hour hour="16" />
        <Hour hour="17" />
        <Hour hour="18" />
        <Hour hour="19" />
        <Hour hour="20" />
        <Hour hour="21" />
        <Hour hour="22" />
        <Hour hour="23" />
      </div>
    </>
  );
}

export default TimeTable;

function Hour({ hour, scrollToRef }) {
  return (
    <>
      <span className="timetable-hour" ref={scrollToRef}>
        {hour}:00
      </span>
      <span className="timetable-separator" />
      <span className="timetable-hour-half">{hour}:30</span>
      <span className="timetable-separator-half" />
    </>
  );
}
