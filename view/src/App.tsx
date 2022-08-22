import React from "react";
import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";

import { Main, Body } from "./styles";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Fluxo from "./Pages/Fluxo";
import Usuarios from "./Pages/Usuarios";
import Usuario from "./Pages/Usuario";

import light from "./themes/light";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={light}>
      <Main>
        <GlobalStyle />
        <Sidebar></Sidebar>
        <Header></Header>
        <Body>
          {/* <Usuarios></Usuarios> */}
          <Usuario></Usuario>
          {/* <Dashboard></Dashboard> */}
          {/* <Fluxo></Fluxo> */}

        </Body>
        {/* <Login></Login> */}
      </Main>
    </ThemeProvider>
  );
}

export default App;
