import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import RequireAuth from "../components/RequireAuth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};
