import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#47217d",
    },
    secondary: {
      main: "#672cc4",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
