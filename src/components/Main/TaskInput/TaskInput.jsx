import { useState } from "react";
import PropTypes from "prop-types";
import css from "./TaskInput.module.css";

const TaskInput = ({ setTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() === "") {
      setIsError(true);
      return;
    }

    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const handleKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      setIsError(false);

      addTask();
    }
  };

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    setIsError(false);
    addTask();
  };

  return (
    <div className={css.inputConteiner}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPressEnter}
        placeholder="Task name"
      />
      <button type="submit" onClick={handleButtonSubmit}>
        Add
      </button>

      {isError && (
        <span className={css.errorMessage}>Please, enter the words</span>
      )}
    </div>
  );
};

TaskInput.propTypes = {
  setTask: PropTypes.func.isRequired, // Очікуємо функцію
};

export default TaskInput;
