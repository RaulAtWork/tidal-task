import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getTimeInFormatHHMM,
  addMinutesToDate,
  timeframeIsBooked,
  calculateTimeDifferenceInMinutes,
} from "../utils/DateHelper";
import { Task } from "../entity/Task";
import { TaskContext } from "../TaskContext";

const DEFAULT_TIME_INTERVAL = 30;

function CreateTask() {
  const { addTask, tasks } = useContext(TaskContext);
  const [ successMessage, setSuccessMessage ] = useState("");

  let currentTime = getTimeInFormatHHMM(new Date());
  let afterIntervalTime = getTimeInFormatHHMM(
    addMinutesToDate(new Date(), DEFAULT_TIME_INTERVAL)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const startTime = watch("startTime", currentTime);

  const validateEndTime = (value) => {
    if (value <= startTime) {
      return "End time must be after the start time.";
    }
    if (timeframeIsBooked(startTime, value, tasks)) {
      return "A tasks was already created within the timeframe.";
    }
    if (calculateTimeDifferenceInMinutes(startTime, value) < 30) {
      return "Minimun duration of a task is 30 minutes.";
    }
    return true;
  };

  function onSubmit(data) {
    // process data
    let newTask = new Task(data.title, data.startTime, data.endTime);
    // add it to the context
    addTask(newTask);
    setSuccessMessage("Task Created!");
  }

  return (
    <section>
      <h2>Task Creation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input
          {...register("title", {
            required: "Field is required",
            maxLength: {
              value: 70,
              message: "Title cannot exceed 70 characters",
            },
          })}
        />

        {errors.title?.message && <p role="alert">{errors.title.message}</p>}

        <label>Start Time</label>
        <input
          defaultValue={currentTime}
          {...register("startTime", { required: "Field is required" })}
          type="time"
        />
        {errors.startTime?.message && (
          <p role="alert">{errors.startTime.message}</p>
        )}
        <label>End Time</label>
        <input
          defaultValue={afterIntervalTime}
          {...register("endTime", {
            required: "Field is required",
            validate: validateEndTime,
          })}
          type="time"
        />
        {errors.endTime?.message && (
          <p role="alert">{errors.endTime.message}</p>
        )}

        <input value="Create!" type="submit" />
      </form>
      {successMessage && <p>{successMessage}</p>}
    </section>
  );
}

export default CreateTask;
