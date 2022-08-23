import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import Registrar from "../../Pages/Registrar";


const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar" element={<Registrar />}></Route>
    </Routes>
  );
};

export default InicialRouters;
