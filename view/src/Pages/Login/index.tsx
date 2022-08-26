import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


import { Form, Container, HiperLink, Title } from "./styles";
import Input from "../../Components/Inputs/PrimaryInput";
import PrimaryButton from "../../Components/Buttons/ButtonDark";
import ContainerBottons from "../../Components/ContainerButtons";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Modal from "../../Components/Modal";

import getDataInput from "../../services/getDataInput";


import requestAjax from "../../services/RequestAjax";
// import { endpoint } from "../../configs/endPoint";

// Tipagens 
import { ResponseJ, DadosUsuario } from './types';
import { IHandleValueElementHTML } from "./interfaces";
import { Link } from "react-router-dom";



const Login: React.FC = () => {

  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");

 
  const logar = async(e: IHandleValueElementHTML) => {
    e.preventDefault();

  } 

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/admin/dash');
  };

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          type="text"
          descricaoPlaceholder={"Login"}
          onChange={(e:any) => {getDataInput(e,setLogin)}}
          />
        <Input
          type="password"
          descricaoPlaceholder={"Senha"}
          onChange={(e:any) => {getDataInput(e,setSenha)}}
        />
        <ContainerBottons>
          <PrimaryButton
            onClick={navigateToHome}
          >
            Logar 
          </PrimaryButton>
          <SecondaryButton ><Link to={'/registrar'}>Registrar</Link></SecondaryButton>
        </ContainerBottons>
        <HiperLink href="./senhaesquecida">Esqueci a minha senha</HiperLink>
      </Form>
      
    </Container>
  );
  
};

export default Login;
