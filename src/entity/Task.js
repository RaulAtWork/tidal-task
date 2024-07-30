import { HHMMtoMinutes } from "../utils/DateHelper";

export class Task {
  constructor(title, startTime, endTime) {
    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
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
