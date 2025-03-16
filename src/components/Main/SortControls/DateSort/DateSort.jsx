import PropTypes from "prop-types";
import css from "./DateSort.module.css";

const DateSort = ({ selectedSort, handleSortChange }) => {
  return (
    <div className={css.DateSortButton}>
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
        <span
          className={
            selectedSort === "new"
              ? css.DateSortButtonDecorationActive
              : css.DateSortButtonDecoration
          }
        >
          New
        </span>
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
        <span
          className={
            selectedSort === "old"
              ? css.DateSortButtonDecorationActive
              : css.DateSortButtonDecoration
          }
        >
          Old
        </span>
      </label>
    </div>
  );
};

DateSort.propTypes = {
  selectedSort: PropTypes.array.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default DateSort;
