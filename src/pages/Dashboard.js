import React from "react";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography sx={{ fontSize: "1.6rem" }}>
        This is the private page which can only be visited once you log in using
        your account.
      </Typography>
    </Container>
  );
};

export default Dashboard;
