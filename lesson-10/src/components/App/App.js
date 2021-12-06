import "./App.css";
import Router from "../Router/Router";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import TopMenu from "../TopMenu/TopMenuComponent";
import Box from "@material-ui/core/Box";
import { memo } from "react";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", flexDirection: "column", maxWidth: "1000px" }}
      >
        <TopMenu />
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default memo(App);
