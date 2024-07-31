import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

function ClearTasks() {
  const { clearTasks } = useContext(TaskContext);

  return <button onClick={clearTasks}>Clear Tasks</button>;
}

export default ClearTasks;
