import { useState } from "react";
import { useNavigate } from 'react-router-dom';


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

const Login: React.FC = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState<ResponseJ>({});


  // Modal States
  const showModal = (): void => {
    setShow(true);
  };
  const showOutModal = (): void => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");

  let url = `hrmldaaq /login`;
  
  let dadosInput: DadosUsuario = {
    usuario: login,
    senha: senha,
  };

  const dadosString = JSON.stringify(dadosInput);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dadosString,
  };

  const logar = async(e: IHandleValueElementHTML) => {
    e.preventDefault();

    const myFetch = await requestAjax(url, options);

    if(!myFetch){

      setError(myFetch);
    }
    console.info(myFetch);
    setData(myFetch);
    showModal();
    showOutModal();
  } 

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/dash');
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
          <SecondaryButton>Registrar</SecondaryButton>
        </ContainerBottons>
        <HiperLink href="./senhaesquecida">Esqueci a minha senha</HiperLink>
      </Form>
      
      {/* <Modal prefix={show ? "flex" : ""}>{data.msg}</Modal> */}
    </Container>
  );
  
};

export default Login;
