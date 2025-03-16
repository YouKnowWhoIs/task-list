import { useState } from "react";
import PropTypes from "prop-types";
import css from "./AddButton.module.css";
import ModalTaskInput from "../ModalAdd/ModalAdd.jsx";

const AddButton = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={css.addButtonConteiner}>
        <button type="submit" onClick={handleAddButton}>
          Add
        </button>
      </div>

      {isOpen && <ModalTaskInput addTask={addTask} setIsOpen={setIsOpen} />}
    </>
  );
};

AddButton.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddButton;
