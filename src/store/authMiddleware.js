import { authActions } from "./auth-slice";

export const authMiddleware = (store) => (next) => (action) => {
  if (authActions.loginSuccess.match(action)) {
  } else if (authActions.signupRequest.match(action)) {
  }
  return next(action);
};
