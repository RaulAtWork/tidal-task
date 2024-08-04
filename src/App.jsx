import React, { useContext, useEffect } from "react";
import CreateTask from "./components/CreateTask";
import { TaskContext } from "./TaskContext";
import TimeTable from "./components/Timetable";
import ClearTasks from "./components/ClearTasks";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { tasks, setTasks } = useContext(TaskContext);

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
