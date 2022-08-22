import { SidebarStyle, Logo,Item } from "./styles";
import React from "react";
import listaItensMenu from "./data/listaMenu";

const Sidebar: React.FC = () => {
  // Lembrar de POOO
  return (
    <SidebarStyle>
      <div>
        <Logo src="./assets/logomarca.png" alt="logo"></Logo>
      </div>
      <ul>
        {listaItensMenu.map((item) => (
          <Item key={item.id}>{item.descricao}</Item>
        ))}
      </ul>
    </SidebarStyle>
  );
};

export default Sidebar;
