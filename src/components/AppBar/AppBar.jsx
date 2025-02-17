import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
      <nav className="flex gap-2 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? (
          <button
            className="cursor-pointer border-2 border-white rounded-md px-2 py-1"
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
