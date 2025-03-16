import PropTypes from "prop-types";
import css from "./ModalDetails.module.css";
import EditButton from "../EditButton/EditButton";
import RemoveButton from "../RemoveButton/RemoveButton";
import { useState } from "react";

const ModalDetails = ({ task, setTasks, setIsOpen }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text || "");

  const handleSave = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, text: newText } : t))
    );
    setIsEditing(false);
  };

  const handleRemove = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  const handleTextareaChange = (event) => {
    setNewText(event.target.value);
  };

  const handleMouseClose = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={css.modalDetailConteiner} onClick={handleMouseClose}>
      <div className={css.modalDetailItem}>
        {isEditing ? (
          <textarea
            type="text"
            value={newText ?? ""}
            onChange={handleTextareaChange}
          />
        ) : (
          <div className={css.testDetail}>
            <p className={css.takstList}>{task.text}</p>
          </div>
        )}
        <div className={css.buttonsConteiner}>
          <EditButton
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleSave={handleSave}
          />
          <RemoveButton onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
};

ModalDetails.propTypes = {
  task: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
  setIsOpen: PropTypes.bool.isRequired,
};

export default ModalDetails;
