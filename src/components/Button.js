import PropTypes from "prop-types";

const Button = ({ bgColor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Add",
  bgColor: "#000",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
