import iconFolder from "../assets/folder.svg";
import iconNewNotes from "../assets/add.svg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div className="three-points-container">
        <div className="point point-red"></div>
        <div className="point point-yellow"></div>
        <div className="point point-green"></div>
      </div>
      <Link to="/">
        <img src={iconFolder} alt="icon" className="icon" />
      </Link>
      <Link to="/add">
        <img src={iconNewNotes} alt="icon" className="icon" />
      </Link>
    </div>
  );
};

export default Menu;
