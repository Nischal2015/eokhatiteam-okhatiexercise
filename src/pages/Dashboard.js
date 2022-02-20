import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth-actions";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Button
        variant='contained'
        size='large'
        onClick={logoutHandler}
        sx={{ margin: "1.6rem 0" }}
      >
        Logout
      </Button>
      <Typography sx={{ fontSize: "1.6rem" }}>
        This is the private page which can only be visited once you log in using
        your account.
      </Typography>
    </Container>
  );
};

export default Dashboard;
