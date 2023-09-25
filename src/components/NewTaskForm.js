import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    id: uuid(),
    text: "Pass the tests",
    category: "Code"
  })

  const filteredOptionList = categories.filter((category) => category !== "All")

  const displayOptionList = filteredOptionList.map((category) => {
    return <option key={category} value={category}>{category}</option>
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(formData)
    setFormData({
      id: uuid(),
      text: "",
      category: ""
    })
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {displayOptionList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
