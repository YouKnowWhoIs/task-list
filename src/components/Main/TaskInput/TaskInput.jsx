import { useState } from "react";
import PropTypes from "prop-types";
import css from "./TaskInput.module.css";

const TaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setIsError(true);
      return;
    }

    addTask(inputValue);
    setInputValue("");
    setIsError(false);
  };

  const handleKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      handleButtonSubmit(event);
    }
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
  addTask: PropTypes.func.isRequired,
};

export default TaskInput;
