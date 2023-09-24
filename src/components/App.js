import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  const onDeleteTask = (taskToBeDeleted) => {
    const filterTask = tasks.filter(task => taskToBeDeleted !== task)
    setTasks(filterTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
