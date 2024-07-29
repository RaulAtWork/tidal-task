import React from "react";
import { useForm } from "react-hook-form";
import { getTimeInFormatHHMM, addMinutesToDate } from "../utils/DateHelper";

const DEFAULT_TIME_INTERVAL = 30;

function CreateTask() {
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

  const startTime = watch("startTime");

  const validateEndTime = (value) => {
    if (value <= startTime) {
      return "End time must be after the start time";
    }
    return true;
  };

  const onSubmit = (data) => console.log(data);
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
        {errors.startTime?.message && <p role="alert">{errors.startTime.message}</p>}
        <label>End Time</label>
        <input
          defaultValue={afterIntervalTime}
          {...register("endTime", {
            required: "Field is required",
            validate: validateEndTime,
          })}
          type="time"
        />
        {errors.endTime?.message && <p role="alert">{errors.endTime.message}</p>}

        <input type="submit" />
      </form>
    </section>
  );
}

export default CreateTask;
