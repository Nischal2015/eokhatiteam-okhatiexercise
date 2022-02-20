import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "../store/alert-slice";
import { Typography } from "@mui/material";

const AlertStatus = () => {
  const alertType = useSelector((state) => state.alert.alertType);
  const message = useSelector((state) => state.alert.message);
  const dispatch = useDispatch();

  const closeAlertHandler = () => {
    dispatch(alertActions.clear());
  };
  return (
    <Alert
      variant='filled'
      severity={alertType}
      onClose={closeAlertHandler}
      sx={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
      }}
    >
      <Typography sx={{ fontSize: "1.4rem" }}>{message}</Typography>
    </Alert>
  );
};

export default AlertStatus;
