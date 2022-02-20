import { authActions } from "./auth-slice";
import { alertActions } from "./alert-slice";
import { app } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);

export const login =
  ({ email, password }, callback) =>
  async (dispatch) => {
    try {
      dispatch(authActions.loginRequest());
      const response = await signInWithEmailAndPassword(auth, email, password);
      dispatch(authActions.loginSuccess({ email: response.user.email }));
      dispatch(alertActions.success("You have logged in successfully"));
      callback();
    } catch (error) {
      dispatch(authActions.loginFail());
      dispatch(alertActions.error("Email or password is incorrect"));
    }
  };

export const signup =
  ({ email, password }, registerStatusHandler) =>
  async (dispatch) => {
    try {
      dispatch(authActions.signupRequest());
      await createUserWithEmailAndPassword(auth, email, password);
      registerStatusHandler();
      dispatch(
        alertActions.success("Your account has been created successfully")
      );
      dispatch(authActions.signupSuccess());
    } catch (error) {
      dispatch(alertActions.error("Email already exists"));
      dispatch(authActions.signupFailed());
    }
  };

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(authActions.logout());
    dispatch(alertActions.success("You have been successfully logged out"));
  } catch (error) {
    dispatch(alertActions.error("Failed to log out"));
  }
};
