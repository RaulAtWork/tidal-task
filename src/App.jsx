import React, { useContext, useState } from "react";
import CreateTask from "./components/CreateTask";
import { TaskContext } from "./TaskContext";
import TimeTable from "./components/Timetable";
import ClearTasks from "./components/ClearTasks";
import CurrentTime from "./components/CurrentTime";
import Modal from "./components/Modal";

function App() {
  const { tasks } = useContext(TaskContext);
  const [isModalOpen, setModalOpen] = useState(false);

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
              <button onClick={() => setModalOpen(true)} className="full-width no-margin">Create a task </button>
              <Modal isOpen={isModalOpen} setOpen={setModalOpen} title={"Create a task"}>
                <CreateTask onSubmit={() => setModalOpen(false)}/>
              </Modal>
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
