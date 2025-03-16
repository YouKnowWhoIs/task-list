import { useState } from "react";
import css from "./ToggleTeam.module.css";

const ToggleTeam = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(() => (toggle ? false : true));
    console.log(toggle);
  };

  return (
    <label className={css.switch}>
      <input type="checkbox" onChange={handleToggle} />
      <span className={css.slider}></span>
    </label>
  );
};

export default ToggleTeam;
