import { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import SortControls from "../SortControls/SortControls.jsx";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [selectedValue, setSelectedValue] = useState("all");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.removeItem("tasks");
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (taskTest) => {
    const newTask = {
      id: Date.now(),
      text: taskTest,
      checked: false,
      Date: new Date().toLocaleString(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleFilterChange = (event) => {
    setSelectedValue(event);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event);
  };

  return (
    <main>
      <TaskInput addTask={addTask} />
      <SortControls
        selectedValue={selectedValue}
        selectedSort={selectedSort}
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        selectedValue={selectedValue}
        selectedSort={selectedSort}
      />
    </main>
  );
};

export default TaskBoard;
