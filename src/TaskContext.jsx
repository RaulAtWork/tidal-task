import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { Task } from "./entity/Task";

export const TaskContext = React.createContext();

const TaskContextProvider = ({ children }) => {
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();

  const [tasks, setTasks] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    let localData = loadFromLocalStorage();
    console.log("Loading local data", localData);
    if (!localData) return;
    for (const t of localData.taskList) {
      addTask(new Task(t.title, t.startTime, t.endTime));
    }
    setInitialLoad(false)
  }, []);



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
