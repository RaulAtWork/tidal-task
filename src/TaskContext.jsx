import React, { useState } from "react";

export const TaskContext = React.createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function clearTasks() {
    setTasks([]);
  }

  function deleteTask(uuid) {
    setTasks(
      tasks.filter((element) => {
        element.id !== uuid;
      })
    );
  }

  const contextValues = {
    tasks,
    addTask,
    clearTasks,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={contextValues}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
