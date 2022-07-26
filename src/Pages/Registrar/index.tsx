import React, { useState } from "react";
// Components
import { useNavigate, Link } from "react-router-dom";
import AlertaSuccess from "../../Components/Alerta/AlertaSuccess";
import AlertaDanger from "../../Components/Alerta/AlertaDanger";

import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import InputSecondary from "../../Components/Inputs/SecondaryInput";
import { Container, Form, Title } from "./styles";

// Services

import urlBase from "../../services/UrlBase";
import getDataInput from "../../services/getDataInput";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";
import { Carregador } from "../../Redux/types/carregadorTypes";

// types component Main
import { RespostaServidor } from "../../Types/RespostaServidor";
import { DadosUsuarioInsercaoSemID } from "../../Types/UsuariosTipos/UsuarioInsercaoSemId";
import ButtonBackGround from "../../Components/Buttons/BackgroundButton";

const DadosUsuario: React.FC = () => {
  const dispatch = useDispatch();
  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };

  const [nome, setNome] = useState<string>("");
  const [usuarioNome, setUsuarioNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const novoDadosUsuario: DadosUsuarioInsercaoSemID = {
    nomeusuario: nome,
    login: usuarioNome,
    senha: senha,
    email: email,
    telefone: telefone,
  };

  const adicionar = async () => {
    try {
      const respostaAdicionar = await urlBase.post(
        "/login/registrar",
        novoDadosUsuario
      );
      dispatch(setIsCarregado());

      toBackUntilTime(2000);
      setRespostaServer(respostaAdicionar.data.resposta);
      mostrarModalServer(3000);
    } catch (error) {
      setError(error);
      desapareceDepoisTempo(setError);
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const toBackUntilTime = (timeToAction: number) => {
    setTimeout(() => {
      navigate(-1);
    }, timeToAction);
  };
  function desapareceDepoisTempo(setState:any) {
    setTimeout(() => {
      setState(false);
    }, 3000);
  };


  return (
    <Container>
      <Form>
        {isCarregado && <h2>Carregando...</h2>}
        <Title>Registrar-se aqui</Title>

        <>
          <label>Nome Completo</label>
          <InputSecondary
            type="text"
            // value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setNome);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Usuário</label>
          <InputSecondary
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setUsuarioNome);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Senha</label>
          <InputSecondary
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setSenha);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Telefone</label>
          <InputSecondary
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setTelefone);
            }}
          ></InputSecondary>
        </>
        <>
          <label>E-mail</label>
          <InputSecondary
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setEmail);
            }}
          ></InputSecondary>
        </>

        <div>
          <PrimaryButton
            onClick={() => {
              adicionar();
            }}
          >
            Clique aqui para se registrar
          </PrimaryButton>
          <ButtonBackGround
          
          ><Link to={'/'}>Voltar</Link>
          </ButtonBackGround>
        </div>
      </Form>
          {showModalserver && (
            <AlertaSuccess>
              <h3>{respostaServer.msg}</h3>
            </AlertaSuccess>
          )}
      {error && (
        <AlertaDanger onClick={() => setError(null)}>
          <p>{error?.response?.data?.msg}</p>
        </AlertaDanger>
      )}
    </Container>
  );
};

export default DadosUsuario;
