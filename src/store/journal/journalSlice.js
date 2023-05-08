import { createSlice } from "@reduxjs/toolkit";
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],

    active: {
      // id: "ABC123",
      //   title: '',
      //   body: '',
      //   date: 123456,
      //   imageURLs:[],
    },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    SetActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      // state.notes = false;
      state.notes = action.payload;
      //state.active.data;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });

      state.messageSaved = `${action.payload.title} Su cambio fue existos`;
    },
    deleteNoteById: (state, action) => {},
  },
});
export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  SetActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
