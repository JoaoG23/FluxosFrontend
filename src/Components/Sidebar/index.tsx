import React from "react";
import { Link, useNavigate } from "react-router-dom";
import listaItensMenu, { comumUsuarioLIstaData } from "./data/listaMenu";
import { SidebarStyle, Logo, Item } from "./styles";
import { getDataSession } from "../../services/getDataSession";
import PrimaryButton from "../Buttons/PrimaryButton";

const Sidebar: React.FC = () => {

  const navigate = useNavigate();
  const exitEndLogout = () => {
    navigate('/');
    localStorage.clear();
  };

  const { isAdmin } = getDataSession();

  let listaMenu = listaItensMenu;

  if (!isAdmin) {
    listaMenu = comumUsuarioLIstaData;
  } 

  return (
    <SidebarStyle prefix="flex">
      <div>
        <div>
          <Logo src="./assets/logomarca.png" alt="logo"></Logo>
        </div>
        <ul>
          {listaMenu.map((item) => (
            <Item key={item.id}>
              <Link to={item.path}>{item.descricao}</Link>
            </Item>
          ))}
        </ul>
      </div>
      <PrimaryButton onClick={exitEndLogout}>Sair</PrimaryButton>
    </SidebarStyle>
  );
};

export default Sidebar;
