import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";

function TaskList({ tasks, selectCategory, setSelectCategory, onDeleteTask }) {
  const filteredTaskListByCategory = tasks.filter((task) => {
    if (selectCategory === "All") {
      return true
    } else {
      return task.category === selectCategory
    }
  })

  const displayTaskList = filteredTaskListByCategory.map((task) => {
    return <Task key={uuid()} task={task} onDeleteTask={onDeleteTask}
    />
  })

  return (
    <div className="tasks">
      {displayTaskList}
    </div>
  );
}

export default TaskList;
