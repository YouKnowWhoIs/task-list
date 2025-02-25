import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const TaskBoard = () => {
  const [task, setTask] = useState([]);

  return (
    <main>
      <TaskInput setTask={setTask} />
      <TaskList task={task} />
    </main>
  );
};

export default TaskBoard;
