import { Route, Routes } from "react-router-dom";
import UsuarioLogado from "../../Pages/UsuarioLogado";


const ComumRouters = () => {
  return (
    <Routes>
      <Route path="/logado" element={<UsuarioLogado />}/>
    </Routes>
  );
};

export default ComumRouters;
