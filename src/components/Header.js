import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  //                ☝ destructured props object as we need only title from props object

  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h1 style={headerStyle}>{title}</h1> */}
      {location.pathname === "/" && <Button onClick={onAdd} text={!showAdd? 'Add' : 'Close'} bgColor={!showAdd ? '#000' : '#f00' } />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propType = {
  title: PropTypes.string.isRequired,
  // if isRequired is not mentioned, invalid values will be printed with error will be displayed in the console
  // if isRequired is mentioned, invalid values won't be printed and error will be displayed in the console
};

// CSS in JS
// const headerStyle = {
//     color: 'navy'
// }

export default Header;
