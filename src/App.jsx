import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Welcome from "./components/Header/Welcome/Welcome.jsx";
import TaskBoard from "./components/Main/TaskBoadr/TaskBoard.jsx";

function App() {
  return (
    <div className="taskLisrConteiner">
      <Welcome />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
