import PropTypes from "prop-types";
import css from "./TaskList.module.css";

const TaskList = ({ task }) => {
  return (
    <ul className={css.TaskListConteiner}>
      {task.map((task, index) => (
        <li className={css.list} key={index}>
          <p className={css.takstList}>{task}</p>
          <span className={css.buttonConteiner}>
            <button type="click" className={css.buttonEdit}>
              Edit
            </button>
            <button type="click" className={css.buttonRemove}>
              Remove
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  task: PropTypes.array.isRequired, // Очікуємо масив
};

export default TaskList;
