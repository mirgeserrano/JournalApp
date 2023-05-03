import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveNote } from "../../store/journal/journalSlice";
import { starSaveNote } from "../../store/journal/thunks";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.journal);
  //const { active: note } = useSelector((state) => state.journal);
  //console.log(active);
  const { body, title, date, onInputChange, formState } = useForm(active);

  const dateString = useMemo(() => {
    const newData = new Date(date);
    return newData.toUTCString();
  }, [date]);
  //console.log(body, title);

  useEffect(() => {
    dispatch(SetActiveNote(formState));
  }, [formState]);

  const onSeveNote = () => {
    dispatch(starSaveNote());
  };

  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__delay-1s"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button onClick={onSeveNote} color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Titulo"
          label="Titulo"
          sx={{ border: "none", mb: 2 }}
          value={title}
          name="title"
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio Hoy?"
          minRows={6}
          value={body}
          name="body"
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
