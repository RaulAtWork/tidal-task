import React, { useContext } from "react";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { TaskContext } from "./TaskContext";

function App() {
  const {tasks} = useContext(TaskContext)


  return (
    <div>
      <h1>Welcome to Tidal Task!</h1>
      <CreateTask />
      <TaskList list={tasks}/>
    </div>
  );
}

export default App;
