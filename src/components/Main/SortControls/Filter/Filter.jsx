import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ selectedValue, handleFilterChange }) => {
  return (
    <div className={css.filterTogle}>
      <label>
        <input
          type="radio"
          value="all"
          name="togleFilter"
          checked={selectedValue === "all"}
          onChange={() => handleFilterChange("all")}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="complete"
          name="togleFilter"
          checked={selectedValue === "complete"}
          onChange={() => handleFilterChange("complete")}
        />
        Complet
      </label>
      <label>
        <input
          type="radio"
          value="notComplete"
          name="togleFilter"
          checked={selectedValue === "notComplete"}
          onChange={() => handleFilterChange("notComplete")}
        />
        Not Complet
      </label>
    </div>
  );
};

Filter.propTypes = {
  selectedValue: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
