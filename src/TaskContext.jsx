import React, { useState } from "react";

export const TaskContext = React.createContext();

const TaskContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([])

    function addTask(newTask){
        setTasks([...tasks, newTask])
    }

    function clearTasks(){
        setTasks([])
    }

    const contextValues= {
        tasks, 
        addTask,
        clearTasks
    }

    return (
        <TaskContext.Provider value={contextValues}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskContextProvider