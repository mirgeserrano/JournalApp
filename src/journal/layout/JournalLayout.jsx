import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
const drawerWidth = 310;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <NavBar drawerWidth={drawerWidth}></NavBar>
      <SideBar drawerWidth={drawerWidth}></SideBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
