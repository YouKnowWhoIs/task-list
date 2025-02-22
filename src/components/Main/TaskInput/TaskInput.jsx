import { useState } from "react";
import css from "./TaskInput.module.css";
import ToDoList from "../ToDoList/ToDoList";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleButtonSubmit = () => {
    ToDoList(setInputValue);
    setInputValue("");
    console.log("hello");
  };

  return (
    <div className={css.inputConteiner}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Task name"
      />
      <button type="submit" onClick={handleButtonSubmit}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
