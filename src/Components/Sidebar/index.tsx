import React from "react";
import { Link, useNavigate } from "react-router-dom";
import adminListaRotas, {
  comumListaRotas,
  classificacaoes,
} from "../Sidebar/data/listaMenu";
// Components
import { SidebarStyle, Logo, Item , ButtonExit } from "./styles";
// Services
import { getDataSession } from "../../services/getDataSession";
import ButtonBackGround from "../Buttons/BackgroundButton";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const exitEndLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  const { isAdmin } = getDataSession();

  let itemDoSidebar = adminListaRotas;

  if (!isAdmin) {
    itemDoSidebar = comumListaRotas;
  }

  return (
    <SidebarStyle prefix="flex">
      <div>
        <div>
          <Logo src="./assets/logomarca.png" alt="logo"></Logo>
        </div>
        <ul>
          {itemDoSidebar.map((item) => (
            <Item key={item.id}>
              <Link to={item.path}>{item.descricao}</Link>
            </Item>
          ))}
        </ul>
        <details>
          <summary>Classificações</summary>
          <ul>
            {classificacaoes.map((item) => (
              <Item key={item.id}>
                <Link to={item.path}>{item.descricao}</Link>
              </Item>
            ))}
          </ul>
        </details>
      </div>
      <ButtonExit onClick={exitEndLogout}>Sair</ButtonExit>
    </SidebarStyle>
  );
};

export default Sidebar;
