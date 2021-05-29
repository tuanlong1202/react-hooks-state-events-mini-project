import React from "react";

function NewTaskForm({categories,onTaskFormSubmit, onElementChange}) {
  const items = [...categories];
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onElementChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={onElementChange}>
          {(items.length > 0) 
            ? items.map((item,index) => {
              return (
                <option key={index} value={item}>{item}</option>
              );
            })
            : null
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
