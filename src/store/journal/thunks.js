import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  SetActiveNote,
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNote } from "../../helpers/loadNote";
import { fileUpload } from "../../helpers";
import { Dialpad } from "@mui/icons-material";

export const starNewNota = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      imageUrls: [],
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/jornal/notes`));
    const resp = await setDoc(newDoc, newNote);

    console.log({ resp });

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(SetActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del usuario No existe");

    const notas = await loadNote(uid);
    dispatch(setNotes(notas));
  };
};

export const starSaveNote = () => {
  return async (dispatch, getState) => {
    
    dispatch(setSaving());

    const { uid } = getState().auth;

    const { active: note } = getState().journal;
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    console.log(noteToFireStore);

    const DocRef = doc(FirebaseDB, `${uid}`, "jornal", "notes", `${note.id}`);
    await setDoc(DocRef, noteToFireStore);

    dispatch(updateNote(note));
  };
};

export const starUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    await fileUpload(files[0]);
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(fileUploadPromises);
    console.log(photosUrls);
    dispatch(setPhotosToActiveNote(photosUrls));
    // console.log(files);
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().journal;
    //  DocRef = doc( FirebaseDB, `${ uid }/jornal/notes/${ active.id }`);
    
    const DocRef = doc(FirebaseDB, `${uid}`, "jornal", "notes", `${active.id}`);
    
    // const DocRef = doc(FirebaseDB, `${uid}`, "jornal", "notes", `${active.id}`);
    await deleteDoc(DocRef);
    

    console.log(active.id);
    dispatch(deleteNoteById(active.id));
  };
};
