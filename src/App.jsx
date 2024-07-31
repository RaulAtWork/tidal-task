import React, { useContext } from "react";
import CreateTask from "./components/CreateTask";
import { TaskContext } from "./TaskContext";
import TimeTable from "./components/Timetable";
import ClearTasks from "./components/ClearTasks";

function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Welcome to Tidal Task!</h1>
      <ClearTasks />
      <CreateTask />
      <TimeTable taskList={tasks} />
    </div>
  );
}

export default App;
