import PropTypes from "prop-types";
import css from "./RemoveButton.module.css";

const RemoveButton = ({ id, onRemove }) => {
  const handleRemoveButton = () => {
    onRemove(id);
  };

  return (
    <button
      type="click"
      className={css.buttonRemove}
      onClick={handleRemoveButton}
    >
      Remove
    </button>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.any.isRequired,
  onRemove: PropTypes.any.isRequired,
};

export default RemoveButton;
