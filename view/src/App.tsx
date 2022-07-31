import React from "react";
import Login from "./Pages/Login";
import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";

import light from "./themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Login></Login>
    </ThemeProvider>
  );
}

export default App;
