import {
  ContainerLeftStyle,
  MenuMobileStyle,
  HeaderStyle,
  BoxImg,
} from "./styles";
import React from "react";

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <ContainerLeftStyle>
        <MenuMobileStyle src="./assets/menusanduiche.svg"alt="voltar"></MenuMobileStyle>
        <section>
          <BoxImg>
            <img src="./assets/perfil.svg" alt="perfil"></img>
          </BoxImg>
          <p>Usuário</p>
        </section>
      </ContainerLeftStyle>
      <ContainerLeftStyle>
        <div>
          <img src="./assets/voltarsetabranca.svg" alt="voltar"></img>
          <p>Sair</p>
        </div>
      </ContainerLeftStyle>
      {/* <section>
        <p>Usuário</p>
        <BoxImg>
          <img src="./assets/perfil.svg" alt="perfil"></img>
        </BoxImg>
      </section> */}
    </HeaderStyle>
  );
};

export default Header;
