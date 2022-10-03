import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Fluxo from "../../Pages/Fluxo";
import Usuarios from "../../Pages/Usuarios";
import UsuarioLogado from "../../Pages/UsuarioLogado";
import AdicionarUsuario from "../../Pages/AdicionarUsuario";
import AdicionarElementos from '../../Pages/AdicionarElementos';
import EditarUsuario from "../../Pages/EditarUsuario";
import Configuracoes from "../../Pages/Configuracao";
import Classificacao from "../../Pages/Classificacao";
import Elementos from "../../Pages/Elementos";
import Subelementos from "../../Pages/Subelementos";
import Tipos from "../../Pages/Tipos";
import Subtipos from "../../Pages/Subtipos";
import Minitipos from "../../Pages/Minitipos";
import Nanotipos from "../../Pages/Nanotipos";
import AdicionarFluxo from "../../Pages/AdicionarFluxo";
import EditarFluxo from "../../Pages/EditarFluxo";
import PrivateRoute from "../Auth/PrivateRouter";

const AdminRouters = () => {
  return (
    <Routes>
      <Route
        path="/admin/dash"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/configuracao"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Configuracoes />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/classificacao"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Classificacao />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/elementos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Elementos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/elementos/add"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarElementos/>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/elementos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Elementos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/subelementos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Subelementos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/subelementos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Subelementos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/tipos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Tipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/tipos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Tipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/subtipos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Subtipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/subtipos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Subtipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/minitipos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Minitipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/minitipos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Minitipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/nanotipos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Nanotipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/nanotipos/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Nanotipos />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/fluxo"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Fluxo />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/fluxo/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarFluxo />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/fluxo/add"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarFluxo />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/usuarios/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/usuarios"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Usuarios />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/logado"
        element={
          <PrivateRoute redirectTo={"/"}>
            <UsuarioLogado />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/adicionarusuario"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarUsuario />
          </PrivateRoute>
        }
      />
      {/* <Route path="/admin/configuracao" element={<Configuracoes />} /> */}
      {/* <Route path="/admin/classificacao" element={<Classificacao />} /> */}
      {/* <Route path="/admin/elementos" element={<Elementos />} /> */}
      {/* <Route path="/admin/subelementos" element={<Subelementos />} /> */}
      {/* <Route path="/admin/tipos" element={<Tipos />} /> */}
      {/* <Route path="/admin/subtipos" element={<Subtipos />} /> */}
      {/* <Route path="/admin/minitipos" element={<Minitipos />} /> */}
      {/* <Route path="/admin/nanotipos" element={<Nanotipos />} /> */}
      {/* <Route path="/admin/fluxo" element={<Fluxo />} /> */}
      {/* <Route path="/admin/fluxo/:id" element={<EditarFluxo />} /> */}
      {/* <Route path="/admin/fluxo/add" element={<AdicionarFluxo />} /> */}
      {/* <Route path="/admin/usuarios/:id" element={<EditarUsuario />} /> */}
      {/* <Route path="/admin/usuarios" element={<Usuarios />} /> */}
      {/* <Route path="/admin/logado" element={<UsuarioLogado />} /> */}
      {/* <Route path="/admin/adicionarusuario" element={<AdicionarUsuario />} /> */}
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

export default AdminRouters;
