export class LocalData {
  constructor(tasks) {
    this.updateDateTime = new Date();
    this.taskList = [...tasks];
  }

  getJSON() {
    return JSON.stringify(this);
  }
}
