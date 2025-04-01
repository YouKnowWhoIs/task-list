import PropTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ selectedValue, handleFilterChange }) => {
  return (
    <div className={css.filterButton}>
      <label>
        <input
          type="radio"
          value="all"
          name="togleFilter"
          checked={selectedValue === "all"}
          onChange={() => handleFilterChange("all")}
        />
        <span
          className={
            selectedValue === "all"
              ? css.filterButtonDecoratonActive
              : css.filterButtonDecoraton
          }
        >
          All
        </span>
      </label>
      <label>
        <input
          type="radio"
          value="complete"
          name="togleFilter"
          checked={selectedValue === "complete"}
          onChange={() => handleFilterChange("complete")}
        />
        <span
          className={
            selectedValue === "complete"
              ? css.filterButtonDecoratonActive
              : css.filterButtonDecoraton
          }
        >
          Complet
        </span>
      </label>
      <label>
        <input
          type="radio"
          value="notComplete"
          name="togleFilter"
          checked={selectedValue === "notComplete"}
          onChange={() => handleFilterChange("notComplete")}
        />
        <span
          className={
            selectedValue === "notComplete"
              ? css.filterButtonDecoratonActive
              : css.filterButtonDecoraton
          }
        >
          Not Complet
        </span>
      </label>
    </div>
  );
};

Filter.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
