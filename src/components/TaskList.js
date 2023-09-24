import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList({ tasks, onDeleteTask }) {
  const displayTaskList = tasks.map((task) => {
    return <Task key={uuid()} task={task} onDeleteTask={onDeleteTask} />
  })

  return (
    <div className="tasks">
      {displayTaskList}
    </div>
  );
}

export default TaskList;
