import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectCategory, setSelectCategory] = useState("All")

  function onDeleteTask(taskToBeDeleted) {
    const filterTask = tasks.filter(task => taskToBeDeleted !== task)
    setTasks(filterTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <NewTaskForm />
      <TaskList
        tasks={tasks}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
