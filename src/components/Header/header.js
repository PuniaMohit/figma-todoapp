import "./header.css";
import * as Icon from "react-bootstrap-icons";

const Header = (props) => {
  const showPopUp = () => {
    props.setShowPop(true);
  };
  return (
    <div className="header">
      <div>Today</div>
      <Icon.PlusCircle className="icon" onClick={showPopUp} />
    </div>
  );
};

export default Header;
