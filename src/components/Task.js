import React from "react";

function Task({task, category, id, handleDelete}) {

  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}

export default Task;
