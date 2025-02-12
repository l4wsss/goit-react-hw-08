import { Link } from "react-router-dom";
import s from "../App/App.module.css";

const AppBar = () => {
  return (
    <div className={s.li}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/login">Login</Link>
      <Link to="/registr">Registr</Link>
    </div>
  );
};

export default AppBar;
