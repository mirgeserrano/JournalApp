import {
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

    const resul = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    console.log(resul);
  };
};
