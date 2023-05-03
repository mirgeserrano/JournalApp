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
    },
    setNotes: (state, action) => {
      // state.notes = false;
      state.notes = action.payload;
      //state.active.data;
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
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
