import React, { useContext } from "react";
import CreateTask from "./components/CreateTask";
import { TaskContext } from "./TaskContext";
import TimeTable from "./components/Timetable";
import ClearTasks from "./components/ClearTasks";
import CurrentTime from "./components/CurrentTime";

function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <header>
        <span>Welcome to Tidal Task!</span>
      </header>
      <main className="main-container">
        <div className="side-content">
          <div className="main-card">
            <CurrentTime/>
          </div>
          <div className="main-card">
            <ClearTasks />
            <CreateTask />
          </div>
        </div>
        <div className="main-card main-content">
          <TimeTable taskList={tasks} />
        </div>
      </main>
    </>
  );
}

export default App;
