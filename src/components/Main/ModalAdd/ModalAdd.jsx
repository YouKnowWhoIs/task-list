import PropTypes from "prop-types";
import css from "./ModalAdd.module.css";
import { useState } from "react";

const ModalTaskInput = ({ addTask, setIsOpen }) => {
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
    setIsOpen(false);
    setIsError(false);
  };

  const handleMouseClose = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={css.taskInputModalConteiner} onClick={handleMouseClose}>
      <div className={css.taskInputModalItems}>
        <textarea
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Task name"
        />
        {isError && (
          <span className={css.errorMessage}>Please, enter the words</span>
        )}
        <button type="submit" onClick={handleButtonSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

ModalTaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
  setIsOpen: PropTypes.bool.isRequired,
};

export default ModalTaskInput;
