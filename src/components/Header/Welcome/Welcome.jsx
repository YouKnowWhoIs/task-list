import PropTypes from "prop-types";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import css from "./Welcome.module.css";

const Welcome = ({ tasks }) => {
  return (
    <header>
      <section className={css.welcomeConteiner}>
        <div className={css.welkomePanel}>
          <h1>Welkome!</h1>
          <span className={css.toggleConteiner}>
            <ThemeToggle />
          </span>
        </div>
        <h3>Your total tasks: {tasks.length}</h3>
      </section>
    </header>
  );
};

Welcome.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default Welcome;
