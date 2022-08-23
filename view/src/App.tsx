import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouterAdmin from "./Routers/RouterAdmin/indext";

import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Body } from "./styles";
import light from "./themes/light";

import Login from "./Pages/Login";
// import Dashboard from "./Pages/Dashboard";
// import Fluxo from "./Pages/Fluxo";
// import Usuarios from "./Pages/Usuarios";
// import Usuario from "./Pages/Usuario";
import Registrar from "./Pages/Registrar";

function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <GlobalStyle />
        <Router>
          <Sidebar></Sidebar>
          <Header></Header>
          <Body>
            <RouterAdmin></RouterAdmin>
          </Body>
          <Routes>
            <Route path="/" element={<Login />}></Route>

          </Routes>
          {/* <Registrar></Registrar> */}
        </Router>
      </>
    </ThemeProvider>
    // <ThemeProvider theme={light}>
    //   <Main>
    //     <GlobalStyle />
    //     <Sidebar></Sidebar>
    //     <Header></Header>
    //     <Body>
    //       {/* <Usuarios></Usuarios> */}
    //       {/* <Usuario></Usuario> */}
    //       {/* <Dashboard></Dashboard> */}
    //       {/* <Fluxo></Fluxo> */}
    //     </Body>
    //     <Login></Login>
    //     {/* <Registrar></Registrar> */}
    //   </Main>
    // </ThemeProvider>
  );
}

export default App;
