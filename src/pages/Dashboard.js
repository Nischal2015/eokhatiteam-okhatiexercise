import React from "react";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const email = useSelector((state) => state.auth.user);
  return (
    <Container>
      <Typography variant='h1' component='h1'>
        Welcome {email}
      </Typography>
    </Container>
  );
};

export default Dashboard;
