import css from "./TaskItems.module.css";
import PropTypes from "prop-types";
import RemoveButton from "../RemoveButton/RemoveButton.jsx";
import EditButton from "../EditButton/EditButton.jsx";
import { useState } from "react";

const TaskItem = ({ task, setTasks }) => {
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

  const handleCheckedChange = () => {
    setTasks((prevTask) =>
      prevTask.map((t) =>
        t.id === task.id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  return (
    <li className={css.list}>
      {isEditing ? (
        <textarea
          type="text"
          value={newText ?? ""}
          onChange={handleTextareaChange}
        />
      ) : (
        <p className={css.takstList}>{task.text}</p>
      )}

      <span className={css.buttonConteiner}>
        <EditButton
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleSave={handleSave}
        />
        <RemoveButton onRemove={handleRemove} />
        <input
          type="checkbox"
          checked={task.checked}
          onChange={handleCheckedChange}
        />
      </span>
      <span className={css.dateCreate}>{task.Date}</span>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;
