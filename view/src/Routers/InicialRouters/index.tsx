import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import Registrar from "../../Pages/Registrar";
import AuthRedirect from '../../Pages/AuthRedirect';


const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/auth" element={<AuthRedirect />}></Route>
      <Route path="/registrar" element={<Registrar />}></Route>
    </Routes>
  );
};

export default InicialRouters;
