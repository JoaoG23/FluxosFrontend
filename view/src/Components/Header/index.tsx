import { useNavigate } from "react-router-dom";

import {
  ContainerRightStyle,
  MenuMobileStyle,
  HeaderStyle,
  BoxImg,
} from "./styles";
import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import { getDataSession } from "../../services/getDataSession";
import { useSelector } from "react-redux";

// import { setLogin } from "../../Redux/actions/loginActions";
// import { InfoLoginStore } from '../../Redux/types/loginTypes'
// import { useDispatch } from "react-redux";
import { setMostrar, setEsconder } from '../../Redux/actions/menuMobileAction'
import { useDispatch } from "react-redux";

const Header: React.FC = () => {


  const dadosUsuario = getDataSession();

  const { nomeUsuario } = dadosUsuario;
  const dispatch = useDispatch();



  // Busca dados do Login
  // const DADOS_USUARIO:any = localStorage.getItem('dados');

  // // Trasforma em objeto
  // const dadosUsuario:object = JSON.parse(DADOS_USUARIO);
  // console.log(dadosUsuario);

  // //Colocar no estado para uso 
  // dispatch( setLogin( dadosUsuario ));
  
  
  const navigate = useNavigate();

  const toUser = () => {
    navigate('/admin/logado');
  };
  const toBack = () => {
    navigate(-1);
  };


  function mostrarSidebar() {
    dispatch(setMostrar())
  }

  return (
    <HeaderStyle>
      <ContainerRightStyle>
        <MenuMobileStyle onClick={ () => mostrarSidebar()} src="./assets/menusanduiche.svg"alt="voltar"></MenuMobileStyle>
        <ButtonDefault onClick={toUser}>
          <BoxImg>
            <img src="./assets/perfil.svg" alt="perfil"></img>
          </BoxImg>
          <h4>Olá {nomeUsuario}</h4>
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
