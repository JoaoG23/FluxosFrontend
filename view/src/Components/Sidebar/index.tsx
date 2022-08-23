import React from "react";
import { Link } from "react-router-dom";
import listaItensMenu from "./data/listaMenu";
import { SidebarStyle, Logo,Item } from "./styles";

const Sidebar: React.FC = () => {
  // Lembrar de POOO
  return (
    <SidebarStyle>
      <div>
        <Logo src="./assets/logomarca.png" alt="logo"></Logo>
      </div>
      <ul>
        {listaItensMenu.map((item) => (
          <Item key={item.id}><Link to={item.path}>{item.descricao}</Link></Item>
        ))}
      </ul>
    </SidebarStyle>
  );
};

export default Sidebar;
