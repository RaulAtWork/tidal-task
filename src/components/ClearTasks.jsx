import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

function ClearTasks() {
  const { clearTasks } = useContext(TaskContext);

  return <button onClick={clearTasks} className="full-width no-margin">Clear Tasks</button>;
}

export default ClearTasks;
