import { Task } from "./Task";

export class LocalData {
  constructor(tasks) {
    this.updateDateTime = new Date();
    this.taskList = [];
    for (const t of tasks) {
      this.taskList.push(new Task(t.title, t.startTime, t.endTime));
    }
  }

  getJSON() {
    return JSON.stringify(this);
  }
}
