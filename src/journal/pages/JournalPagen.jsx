import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { starNewNota } from "../../store/journal";
import { useMemo } from "react";

export const JournalPagen = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  //console.log(!active);

  const onclickNewNota = () => {
    dispatch(starNewNota());
  };

  return (
    <>
      <JournalLayout>
        {!!active && <NoteView />}
        {!active && <NothingSelectedView />}
        {/* 
        {!!active ? <NoteView /> : <NothingSelectedView />} */}

        <IconButton
          onClick={onclickNewNota}
          size="large"
          disabled={isSaving}
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.5 },
            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
