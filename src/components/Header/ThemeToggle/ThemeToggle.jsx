import { useEffect, useState } from "react";
import css from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("themeDark");
      document.body.classList.remove("themeLight");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("themeLight");
      document.body.classList.remove("themeDark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <label className={css.switch}>
      <input type="checkbox" checked={isDark} onChange={handleToggle} />
      <span className={css.slider}></span>
    </label>
  );
};

export default ThemeToggle;
