import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNote = async (uid = "") => {
  if (!uid) throw new Error("el usuario no existe");
  
  const collectionRef = collection(FirebaseDB, `${uid}/jornal/notes`);

  const docs = await getDocs(collectionRef);

  const notes = [];
  
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};

