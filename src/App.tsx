import { ThemeProvider, createTheme } from "@mui/material/styles";
import Layout from "./layout";
import "./styles/index.scss";

import AOS from "aos";
import "aos/dist/aos.css";

// initialize AOS library
AOS.init();

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
