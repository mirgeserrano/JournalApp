import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPagen = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography variant="h6">
          Ut do adipisicing voluptate ad velit tempor ipsum cupidatat esse
          laborum. Aute et officia qui cillum tempor eu ad do et nisi incididunt
          culpa qui do. Duis tempor eiusmod nisi minim deserunt Lorem sit duis.
          Deserunt commodo enim occaecat do incididunt nostrud eiusmod. Anim
          deserunt Lorem dolore ipsum. Consequat sint eiusmod incididunt enim
          ullamco. Ex proident ut quis cillum laborum.
        </Typography> */}
        <NothingSelectedView />
        {/* <NoteView /> */}
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: 0.9 },
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
