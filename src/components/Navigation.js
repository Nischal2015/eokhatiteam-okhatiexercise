import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth-actions";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Link to='/' style={{ fontSize: "1.8rem" }}>
        Home
      </Link>{" "}
      {""} | {""}
      <Link to='/dashboard' style={{ fontSize: "1.8rem" }}>
        Dashboard
      </Link>{" "}
      {""} | {""}
      {user ? (
        <Button
          variant='contained'
          size='large'
          onClick={logoutHandler}
          sx={{ margin: "1.6rem 0" }}
        >
          Logout
        </Button>
      ) : (
        <React.Fragment>
          <Link to='/login' style={{ fontSize: "1.8rem" }}>
            Login
          </Link>
          {"   "}|{"   "}
          <Link to='/signup' style={{ fontSize: "1.8rem" }}>
            Signup
          </Link>{" "}
        </React.Fragment>
      )}
    </div>
  );
};

export default Navigation;
