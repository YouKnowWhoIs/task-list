import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Welcome from "./components/Header/Welcome/Welcome.jsx";
import TaskList from "./components/Main/TaskList/TaskList.jsx";

function App() {
  return (
    <div className="taskLisrConteiner">
      <Welcome />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
