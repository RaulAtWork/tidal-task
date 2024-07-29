import React from "react";
import { useForm } from "react-hook-form";
import {getTimeInFormatHHMM, addMinutesToDate} from "../utils/DateHelper"

const DEFAULT_TIME_INTERVAL = 30

function CreateTask() {
    let currentTime = getTimeInFormatHHMM(new Date());
    let afterIntervalTime = getTimeInFormatHHMM(addMinutesToDate(new Date(), DEFAULT_TIME_INTERVAL))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <h2>Task Creation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("title")} />
        <label>Start Time</label>
        <input defaultValue={currentTime} {...register("start-time")} type="time"/>
        <label>End Time</label>
        <input defaultValue={afterIntervalTime} {...register("end-time")} type="time"/>

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </section>
  );
}

export default CreateTask;
