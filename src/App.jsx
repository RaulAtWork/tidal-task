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
      <main>
        <div className="main-container">
          <div className="side-content">
            <div className="main-card">
              <CurrentTime />
            </div>
            <div className="main-card">
              <CreateTask />
            </div>
            <div className="main-card bottom">
              <ClearTasks />
            </div>
          </div>
          <div className="main-card main-content">
            <TimeTable taskList={tasks} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
