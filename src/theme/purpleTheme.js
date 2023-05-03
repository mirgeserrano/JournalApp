import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#E7A28C",
    },
  },

  secondary: {
    main: "white",
  },

  error: {
    main: red.A400,
  },
});
