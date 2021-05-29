import React from "react";

function Task({category, text, deleteItem, pos}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteItem} value={pos}>X</button>
    </div>
  );
}

export default Task;
