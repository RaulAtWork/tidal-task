import { HHMMtoMinutes } from "../utils/DateHelper";
import { v4 as uuidv4 } from "uuid";

export class Task {
  constructor(title, startTime, endTime) {
    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.id = uuidv4(); // create unique id
  }

  getStartTimeInMinutes() {
    if (this.startTime) return HHMMtoMinutes(this.startTime);
    return null;
  }

  getDurationInMinutes() {
    if (this.startTime && this.endTime) {
      return HHMMtoMinutes(this.endTime) - HHMMtoMinutes(this.startTime);
    }
    return null;
  }
}
