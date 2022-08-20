import { StyleDefault ,BoxImg } from "./styles";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  // Lembrar de POOO
  return (
    <StyleDefault>
        <img src="./assets/voltarsetabranca.svg" alt="voltar"></img>
      <section>
        <p>Usuário</p>
        <BoxImg>
          <img src="./assets/perfil.svg" alt="perfil"></img>
        </BoxImg>
      </section>
    </StyleDefault>
  );
};

export default Header;
