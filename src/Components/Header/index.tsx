import React from "react";
import { useNavigate } from "react-router-dom";

//
import {
  ContainerRightStyle,
  MenuMobileStyle,
  HeaderStyle,
  BoxImg,
} from "./styles";

import ButtonDefault from "../Buttons/ButtonDefault";
import { getDataSession } from "../../services/getDataSession";

// Redux ====

import { setMostrar } from "../../Redux/actions/menuMobileAction";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
  // Buscar todos os dados da sessao
  const dadosUsuario = getDataSession();

  const { nomeUsuario } = dadosUsuario;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toUser = () => {
    navigate("/admin/logado");
  };
  const toBack = () => {
    navigate(-1);
  };

  function mostrarSidebar() {
    dispatch(setMostrar());
  }

  return (
    <HeaderStyle>
      <ContainerRightStyle>
        <MenuMobileStyle
          onClick={() => mostrarSidebar()}
          src="./assets/menusanduiche.svg"
          alt="voltar"
        ></MenuMobileStyle>
        <ButtonDefault onClick={toUser}>
          <BoxImg>
            <img src="./assets/perfil.svg" alt="perfil"></img>
          </BoxImg>
          <h3>Olá {nomeUsuario}</h3>
        </ButtonDefault>
      </ContainerRightStyle>
      <ContainerRightStyle>
        <ButtonDefault onClick={toBack}>
          <img src="./assets/voltarsetabranca.svg" alt="voltar"></img>
          <p>Voltar</p>
        </ButtonDefault>
      </ContainerRightStyle>
    </HeaderStyle>
  );
};

export default Header;
