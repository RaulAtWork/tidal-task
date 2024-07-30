import React from "react";

function TaskList({ list }) {
  return (
    <div>
        <h2>Task List</h2>
      {list.map((t, index) => {
       return <TaskItem key={t.title+index}
          title={t.title}
          startTime={t.startTime}
          endTime={t.endTime}
        />;
      })}
    </div>
  );
}

function TaskItem({ title, startTime, endTime }) {
  return (
    <div>
      <p>{title}</p>
      <p>
        {startTime} - {endTime}
      </p>
    </div>
  );
}

export default TaskList;
