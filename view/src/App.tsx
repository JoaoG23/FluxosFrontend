import { BrowserRouter as Router } from "react-router-dom";

import AdminRouters from "./Routers/AdminRouters";
import InicialRouters from "./Routers/InicialRouters";
import ComumRouters from "./Routers/ComumRouters";

import GlobalStyle from "./themes/global";
import { ThemeProvider } from "styled-components";

import SidebarMobile from './Components/SidebarMobile';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Body } from "./styles";
import light from "./themes/light";

import store from "./Redux/store";
import { Provider } from "react-redux";
// import PrivateRouter from './Routers/Auth/PrivateRouter';

function App() {

  

  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <>
          <GlobalStyle />
          <Router>
            <Sidebar/>
            <SidebarMobile />
            <Header/>
            <Body>
              <AdminRouters />
              <ComumRouters />
            </Body>
            <InicialRouters />
          </Router>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
