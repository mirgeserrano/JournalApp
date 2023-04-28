import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
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

    console.log(resp);
    if (!resp.ok) return dispatch(logout(resp.errorMessage));

    dispatch(login(resp));
  };
};
