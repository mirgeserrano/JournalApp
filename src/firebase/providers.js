import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { login } from "../store/auth/authSlice";
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };

    // const credentials = GoogleAuthProvider.credentialFromResult(result);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    //Funcion que me muestra el usuario actual
    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });

    console.log(resp);
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
      password,
    };
  } catch (error) {
    // console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    //singInWithEmailAndPassword
    const resul = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { displayName, photoURL, uid } = resul.user;

    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "Email o password invalido",
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
