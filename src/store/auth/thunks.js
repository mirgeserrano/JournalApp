import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { clearNote } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resul = await singInWithGoogle();
    //console.log({ resul });

    if (!resul.ok) return dispatch(logout(resul.errorMessage));

    dispatch(login(resul));
  };
};

export const startWinthEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { uid, photoURL, errorMessage, ok } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    if (!ok) {
      return dispatch(logout({ errorMessage }));
    }
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassaword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const resp = await loginWithEmailPassword({
      email,
      password,
    });

    if (!resp.ok) return dispatch(logout(resp));

    dispatch(login(resp));
  };
};

export const startLogout = () => {

  return async (dispatch) => {

    await logoutFirebase();

    dispatch(clearNote());
    dispatch(logout());
  };
};

