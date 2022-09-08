import React from "react";
import { Link, useNavigate } from "react-router-dom";
import adminListaRotas, { comumListaRotas } from "../Sidebar/data/listaMenu";
// Components
import PrimaryButton from "../Buttons/PrimaryButton";
import { SidebarStyle, Logo, Item } from "./styles";
// Services 
import { getDataSession } from "../../services/getDataSession";

const Sidebar: React.FC = () => {

  const navigate = useNavigate();
  const exitEndLogout = () => {
    navigate('/');
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
      </div>
      <PrimaryButton onClick={exitEndLogout}>Sair</PrimaryButton>
    </SidebarStyle>
  );
};

export default Sidebar;
