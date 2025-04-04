import css from "./TaskItems.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";

const TaskItem = ({ id, task, setTasks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckedChange = () => {
    setTasks((prevTask) =>
      prevTask.map((t) =>
        t.id === task.id ? { ...t, checked: !t.checked } : t
      )
    );
  };

  const handleListOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <li className={css.list} onClick={handleListOpen}>
        <p className={css.takstList}>{task.text.trimEnd()}</p>
        <span className={css.buttonConteiner}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={handleCheckedChange}
            onClick={(e) => e.stopPropagation()}
          />
        </span>
        <span className={css.dateCreate}>{task.Date}</span>
      </li>

      {isOpen && (
        <ModalDetails
          id={id}
          task={task}
          setTasks={setTasks}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  id: PropTypes.any.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;
