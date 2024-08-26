import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const TaskContext = React.createContext();

const TaskContextProvider = ({ children }) => {
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const [tasks, setTasks] = useState(() => {
    // load initial tasks if any
    let localData = loadFromLocalStorage();
    //console.log("Loading local data", localData);
    if (!localData) return [];
    return localData.taskList;
  });

  useEffect(() => {
    saveToLocalStorage(tasks);
  }, [tasks]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function clearTasks() {
    setTasks([]);
  }

  function deleteTask(uuid) {
    setTasks(
      tasks.filter((element) => {
        return element.id !== uuid;
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
