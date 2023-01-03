import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks, selectedCategory}) {

function handleDelete(id){
  const newList = tasks.filter((task) => tasks.indexOf(task) !== id)
  setTasks(newList)
}
const itemsToDisplay = tasks.filter((task) => {
  if (selectedCategory === 'All') return true;

  return task.category === selectedCategory

})

const taskElements = itemsToDisplay.map((task, index) => (
    <Task key={index} id={index} task={task.text} category={task.category} handleDelete={handleDelete} />
))


  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
