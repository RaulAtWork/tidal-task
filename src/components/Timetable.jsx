import "../styles/custom-style/timetable.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../TaskContext";
import { getTimeInFormatHHMM, HHMMtoMinutes } from "../utils/DateHelper";

function TimeTable({ taskList }) {
  const scrollToRef = useRef(null); //used to start at the item where the scrollToRef is
  const [currentTimeinMinutes, setCurrentTimeInMinutes] = useState(
    HHMMtoMinutes(getTimeInFormatHHMM(new Date()))
  );

  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeInMinutes = HHMMtoMinutes(getTimeInFormatHHMM(new Date()));
      setCurrentTimeInMinutes(timeInMinutes);
    }, 60 * 1000); //each minute

    // Cleanup function to clear the timeout
    return ()=>  clearInterval(interval);
  }, []);

  return (
    <>
      <div className="timetable">
        <div className="timetable-ignore">
          <div
            className="timetable-current-time"
            style={{ top: currentTimeinMinutes }}
          />
          {taskList.map((t, index) => (
            <TimeTableTask task={t} key={t.title + "-" + index} />
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

function TimeTableTask({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div
      className="timetable-task"
      style={{
        top: task.getStartTimeInMinutes() + "px",
        height: task.getDurationInMinutes() + "px",
      }}
    >
      <span>
        <b>{task.title}</b>
      </span>
      <span className="timetask-right">
        <span>
          {task.startTime} - {task.endTime}
        </span>
        <div className="timetask-actions">
          <FontAwesomeIcon
            icon={faPen}
            className="icon icon-action selectable"
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="icon icon-action selectable"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      </span>
    </div>
  );
}
