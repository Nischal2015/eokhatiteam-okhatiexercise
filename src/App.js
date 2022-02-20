import React, { useEffect } from "react";
import "./App.css";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import AlertStatus from "./components/AlertStatus";
import { Outlet, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authActions } from "./store/auth-slice";
import { app } from "./firebase";
import { alertActions } from "./store/alert-slice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const alert = useSelector((state) => state.alert.message);
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      authActions.loginSuccess(user)
    );
    return unsubscribe;
  }, []);

  const dispatch = useDispatch();
  const alertType = useSelector((state) => state.alert.alertType);
  useEffect(() => {
    let interval = setTimeout(() => {
      if (alertType) {
        dispatch(alertActions.clear());
      }
    }, 2000);
    return () => clearTimeout(interval);
  }, [alertType, dispatch]);

  return (
    <Container maxWidth='md' sx={{ marginTop: "3.2rem" }}>
      {alert && <AlertStatus />}
      <Link to='/' style={{ fontSize: "1.8rem" }}>
        Home
      </Link>{" "}
      {""} | {""}
      <Link to='/dashboard' style={{ fontSize: "1.8rem" }}>
        Dashboard
      </Link>{" "}
      {""} | {""}
      <Link to='/login' style={{ fontSize: "1.8rem" }}>
        Login
      </Link>
      {"   "}|{"   "}
      <Link to='/signup' style={{ fontSize: "1.8rem" }}>
        Signup
      </Link>{" "}
      |{" "}
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
