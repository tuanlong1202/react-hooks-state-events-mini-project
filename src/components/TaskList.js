import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, deleteItem}) {
  const tasklist = tasks.filter((item,index) => {
    if (selectedCategory === "All") return true;
    return (item.category === selectedCategory);
  });
  return (
    <div className="tasks">
      {
        (tasklist.length > 0)
          ? tasklist.map((item,index) => {
            return (
              <Task
                key={index}
                pos={index}
                category={item.category}
                text={item.text}
                deleteItem={deleteItem}
              />
            );
          })
          : null
      }
    </div>
  );
}

export default TaskList;
