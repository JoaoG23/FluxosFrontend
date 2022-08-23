import {
  ContainerRightStyle,
  MenuMobileStyle,
  HeaderStyle,
  BoxImg,
} from "./styles";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonDefault from "../Buttons/ButtonDefault";

const Header: React.FC = () => {

  const navigate = useNavigate();

  const toUser = () => {
    navigate('/admin/logado');
  };
  const toBack = () => {
    navigate(-1);
  };

  return (
    <HeaderStyle>
      <ContainerRightStyle>
        <MenuMobileStyle src="./assets/menusanduiche.svg"alt="voltar"></MenuMobileStyle>
        <ButtonDefault onClick={toUser}>
          <BoxImg>
            <img src="./assets/perfil.svg" alt="perfil"></img>
          </BoxImg>
          <p>Usuário</p>
        </ButtonDefault>
      </ContainerRightStyle>
      <ContainerRightStyle>
        <ButtonDefault  onClick={toBack}>
            <img src="./assets/voltarsetabranca.svg" alt="voltar"></img>
          <p>Voltar</p>
        </ButtonDefault>
      </ContainerRightStyle>
    </HeaderStyle>
  );
};

export default Header;
