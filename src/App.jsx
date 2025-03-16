import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Welcome from "./components/Header/Welcome/Welcome.jsx";
import TaskBoard from "./components/Main/TaskBoadr/TaskBoard.jsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.removeItem("tasks");
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="taskLisrConteiner">
      <Welcome tasks={tasks} />
      <TaskBoard tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;
