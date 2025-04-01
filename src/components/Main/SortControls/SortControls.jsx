import PropTypes from "prop-types";
import Filter from "./Filter/Filter";
import DateSort from "./DateSort/DateSort";
import css from "./SortControls.module.css";

const SortControls = ({
  selectedValue,
  selectedSort,
  handleFilterChange,
  handleSortChange,
}) => {
  return (
    <div className={css.SortControlsConteiner}>
      <Filter
        selectedValue={selectedValue}
        handleFilterChange={handleFilterChange}
      />
      <DateSort
        selectedSort={selectedSort}
        handleSortChange={handleSortChange}
      />
    </div>
  );
};

SortControls.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  selectedSort: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default SortControls;
