import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasklist, setTasks] = useState([...TASKS]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskFormData, setTaskFormData] = useState({
    text:"",
    category:"",
  })

  function onTaskFormSubmit(event) {
    event.preventDefault();
    if (taskFormData.text !== "" && taskFormData.category !== "" && taskFormData.category !== "All") {
      setTasks([...tasklist,taskFormData]);
      setTaskFormData({
        text:"",
        category:"",
      })
      event.target.reset();
    }
  }

  function findItemPositionByCategory(deletedIndex) {
    let nTimes = -1;
    let retPos = -1
    tasklist.forEach((item,index) => {
      if (item.category === selectedCategory) {
        nTimes++;
        if (nTimes == deletedIndex ){
          retPos = index;
        }
      }      
    })
    return retPos;
  }

  function deletedItemPos(deletedIndex) {
    return (selectedCategory === "All") ? deletedIndex : findItemPositionByCategory(deletedIndex);
  }

  function removeTask(deletedIndex) {
    let pos = deletedItemPos(deletedIndex);
    if (pos > -1 && pos <= tasklist.length) {
      tasklist.splice(pos,1);
      setTasks([...tasklist]);
    }
  }

  function onElementChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type === "checkbox"){
      value = event.target.checked ;
    }
    setTaskFormData({
      ...taskFormData,
      [name]:value,
    })
  }

  function handleCategoryButtonClick(event) {
    setSelectedCategory(event.target.value);
  }  

  function handleDeletedItem(event) {
    removeTask(event.target.value);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategoryButtonClick={handleCategoryButtonClick} 
        selectedCategory={selectedCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit} 
        onElementChange={onElementChange} 
      />
      <TaskList
        tasks = {tasklist}
        selectedCategory={selectedCategory}
        deleteItem={handleDeletedItem}
      />
    </div>
  );
}

export default App;
