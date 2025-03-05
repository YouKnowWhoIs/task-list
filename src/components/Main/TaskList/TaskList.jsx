import TaskItem from "../TaskItem/TaskItems";
import css from "./TaskList.module.css";
import PropTypes from "prop-types";

const TaskList = ({ tasks, setTasks, selectedValue, selectedSort }) => {
  let filteredTask = tasks;

  if (selectedValue === "complete") {
    filteredTask = tasks.filter((task) => task.checked === true);
  } else if (selectedValue === "notComplete") {
    filteredTask = tasks.filter((task) => task.checked === false);
  }

  const sortedTask = [...filteredTask].sort((a, b) =>
    selectedSort === "new"
      ? new Date(b.Date) - new Date(a.Date)
      : new Date(a.Date) - new Date(b.Date)
  );

  return (
    <ul className={css.TaskListConteiner}>
      {sortedTask.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  selectedSort: PropTypes.string.isRequired,
};

export default TaskList;
