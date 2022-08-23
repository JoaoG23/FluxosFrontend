import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Fluxo from "../../Pages/Fluxo";
import Usuarios from "../../Pages/Usuarios";
import Usuario from "../../Pages/UsuarioLogado";
import Login from "../../Pages/Login";
import AdicionarUsuario from "../../Pages/AdicionarUsuario";


const AdminRouters = () => {
  return (
    <Routes>
      <Route path="/admin/dash" element={<Dashboard />}></Route>
      <Route path="/admin/fluxo" element={<Fluxo />}></Route>
      <Route path="/admin/usuarios" element={<Usuarios />}></Route>
      <Route path="/admin/usuario" element={<Usuario />}></Route>
      <Route path="/admin/adicionarusuario" element={<AdicionarUsuario />}></Route>
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
};

export default AdminRouters;
