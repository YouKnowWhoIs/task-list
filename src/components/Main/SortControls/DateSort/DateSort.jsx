import PropTypes from "prop-types";
import css from "./DateSort.module.css";

const DateSort = ({ selectedSort, handleSortChange }) => {
  return (
    <div className={css.DateSortTogle}>
      <label>
        <input
          type="radio"
          value="new"
          name="togleDate"
          checked={selectedSort === "new"}
          onChange={() => {
            handleSortChange("new");
          }}
        />
        New
      </label>
      <label>
        <input
          type="radio"
          value="old"
          name="togleDate"
          checked={selectedSort === "old"}
          onChange={() => {
            handleSortChange("old");
          }}
        />
        Old
      </label>
    </div>
  );
};

DateSort.propTypes = {
  selectedSort: PropTypes.array.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default DateSort;
