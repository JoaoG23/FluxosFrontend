import React from "react";
import Login from "./Pages/Login";
import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";

import light from "./themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header></Header>
      {/* <Login></Login> */}
    </ThemeProvider>
  );
}

export default App;
