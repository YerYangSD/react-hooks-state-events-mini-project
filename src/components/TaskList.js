import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList({ tasks, selectCategory, onDeleteTask }) {

  const filteredTaskListByCategory = tasks.filter((task) => {
    if (selectCategory === "All") {
      return true
    } else {
      return selectCategory === task.category
    }
  })

  const displayTaskList = filteredTaskListByCategory.map((task) => {
    return <Task key={uuid()} id={task.id} text={task.text} category={task.category} onDeleteTask={onDeleteTask}
    />
  })

  return (
    <div className="tasks">
      {displayTaskList}
    </div>
  );
}

export default TaskList;
