import React, { useEffect } from "react";
import "./App.css";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import AlertStatus from "./components/AlertStatus";
import { Outlet } from "react-router-dom";
import { alertActions } from "./store/alert-slice";
import { useSelector, useDispatch } from "react-redux";

import Navigation from "./components/Navigation";

function App() {
  const alert = useSelector((state) => state.alert.message);
  const dispatch = useDispatch();

  const alertType = useSelector((state) => state.alert.alertType);
  useEffect(() => {
    let interval = setTimeout(() => {
      if (alertType) {
        dispatch(alertActions.clear());
      }
    }, 3000);
    return () => clearTimeout(interval);
  }, [alertType, dispatch]);

  return (
    <Container maxWidth='md' sx={{ marginTop: "3.2rem" }}>
      {alert && <AlertStatus />}
      <Navigation />
      <Card
        sx={{
          boxShadow: "4px 8px 40px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Outlet />
      </Card>
    </Container>
  );
}

export default App;
