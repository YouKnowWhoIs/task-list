import { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (taskTest) => {
    const newTask = { id: Date.now(), text: taskTest, checked: false };

    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default TaskBoard;
