import React from "react";

function NewTaskForm({categories, setDetails, setFormCategory, onTaskFormSubmit}) {

  const optionElements = categories.map((cat) => {
    if (cat === 'All'){
      return
    }else{
      return <option key={cat}>{cat}</option>
    }
  })

  function handleDetailsChange(e){
    setDetails(e.target.value)
  }

  function handleCatChange(e){
    setFormCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCatChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
