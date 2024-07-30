import React, { useContext } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { TaskContext } from "./TaskContext";
import TimeTable from "./components/Timetable";
import { exampleTasks_1 } from "./utils/Tasks.examples";

function App() {
  const {tasks} = useContext(TaskContext)


  return (
    <div>
      <h1>Welcome to Tidal Task!</h1>
      <CreateTask />
      <TaskList list={tasks}/>
      <TimeTable taskList={exampleTasks_1}/>
    </div>
  );
}

export default App;
