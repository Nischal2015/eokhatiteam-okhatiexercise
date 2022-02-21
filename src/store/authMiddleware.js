import { authActions } from "./auth-slice";

export const authMiddleware = (store) => (next) => (action) => {
  if (authActions.loginSuccess.match(action)) {
    localStorage.setItem("email", action.payload.email);
  } else if (authActions.logout.match(action)) {
    localStorage.removeItem("email");
  }
  return next(action);
};
