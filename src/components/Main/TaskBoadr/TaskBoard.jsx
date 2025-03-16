import { useState } from "react";
import PropTypes from "prop-types";
import AddButton from "../AddButton/AddButton.jsx";
import TaskList from "../TaskList/TaskList.jsx";
import SortControls from "../SortControls/SortControls.jsx";

const TaskBoard = ({ tasks, setTasks }) => {
  const [selectedValue, setSelectedValue] = useState("all");
  const [selectedSort, setSelectedSort] = useState("new");

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
      <AddButton addTask={addTask} />
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

TaskBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.array.isRequired,
};

export default TaskBoard;
