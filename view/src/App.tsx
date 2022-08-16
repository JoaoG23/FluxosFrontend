import React from "react";
import Login from "./Pages/Login";
import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import { Main, Body } from "./styles";

import light from "./themes/light";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Main>
        <GlobalStyle />
        <Sidebar></Sidebar>
        <Header></Header>
        <Body></Body>
        {/* <Login></Login> */}
      </Main>
    </ThemeProvider>
  );
}

export default App;
