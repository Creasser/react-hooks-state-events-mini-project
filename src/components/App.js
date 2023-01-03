import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS)
const [selectedCategory, setCategory] = useState('All')
const [details, setDetails] = useState('')
const [formCategory, setFormCategory] = useState('Code')

function handleFormSubmit(e){
  e.preventDefault()
  const newTask = {
    text: details,
    category: formCategory
  }
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} selectedCategory={selectedCategory} setCategory={setCategory} />

      <NewTaskForm categories={CATEGORIES} setFormCategory={setFormCategory} setDetails={setDetails} onTaskFormSubmit={handleFormSubmit}/>

      <TaskList tasks={tasks} setTasks={setTasks} selectedCategory={selectedCategory}  />
    </div>
  );
}

export default App;
