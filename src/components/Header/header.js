import "./header.css";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";

const Header = (props) => {
  const dispatch=useDispatch();
  // const showPopUp = () => {
  //   props.setShowPop(true);
  // };

  return (
    <div className="header">
      <div>Today</div>
      <Icon.PlusCircle className="icon"
      //  onClick={showPopUp} 
      onClick={()=>dispatch(actionCreators.showPop(true))}
       />
    </div>
  );
};

export default Header;
