import TaskItem from "../TaskItem/TaskItems";
import css from "./TaskList.module.css";
import PropTypes from "prop-types";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className={css.TaskListConteiner}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
