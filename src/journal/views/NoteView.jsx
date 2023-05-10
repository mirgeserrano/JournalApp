import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { SetActiveNote } from "../../store/journal/journalSlice";
import { starSaveNote, starUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active, messageSaved, isSaving } = useSelector(
    (state) => state.journal
  );
  //const { active: note } = useSelector((state) => state.journal);
  //console.log(active);
  const { body, title, date, onInputChange, formState } = useForm(active);

  const dateString = useMemo(() => {
    const newData = new Date(date);
    return newData.toUTCString();
  }, [date]);
  //console.log(body, title);
  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(SetActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(starSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) {
      return;
    }
    //  console.log(target.files);
    dispatch(starUploadingFiles(target.files));
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

      <input
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={onFileInputChange}
        ref={fileInputRef}
      />

      <IconButton
        color="primary"
        disabled={isSaving}
        onClick={() => fileInputRef.current.click()}
      >
        <UploadFileOutlined />
      </IconButton>

      <Grid item>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
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
      <ImageGallery images={active.imageUrls} />
    </Grid>
  );
};
