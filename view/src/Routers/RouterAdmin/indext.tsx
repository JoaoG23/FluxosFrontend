import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Fluxo from "../../Pages/Fluxo";
import Usuarios from "../../Pages/Usuarios";
import Usuario from "../../Pages/Usuario";


const RouterAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/fluxo" element={<Fluxo />}></Route>
      <Route path="/usuarios" element={<Usuarios />}></Route>
      <Route path="/usuario" element={<Usuario />}></Route>
      <Route path="*" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default RouterAdmin;
