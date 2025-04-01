import PropTypes from "prop-types";
import css from "./EditButton.module.css";

const EditButton = ({ isEditing, setIsEditing, handleSave }) => {
  return (
    <button
      type="click"
      className={css.buttonEdit}
      onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
    >
      {isEditing ? "Save" : "Edit"}
    </button>
  );
};

EditButton.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default EditButton;
