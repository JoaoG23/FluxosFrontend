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
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const DadosUsuario: React.FC = () => {
  const dispatch = useDispatch();
  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };

  const [nome, setNome] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [usuarioNome, setUsuarioNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const novoDadosUsuario: DadosUsuarioInsercaoSemID = {
    nomeusuario: nome,
    login: login,
    senha: senha,
    email: email,
    telefone: telefone,
  };

  const adicionar = async () => {
    try {
      const respostaAdicionar = await urlBase.post(
        "/admin/usuario",
        novoDadosUsuario
      );
      dispatch(setIsCarregado());

      toBackUntilTime(2000);
      setRespostaServer(respostaAdicionar.data.resposta);
      mostrarModalServer(3000);
    } catch (error) {
      setError(error as Error);
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const toBackUntilTime = (timeToAction: number) => {
    setTimeout(() => {
      navigate(-1);
    }, timeToAction);
  };

  return (
    <Container>
      <Form>
        {isCarregado && <h2>Carregando...</h2>}
        <Title>Registrar-se aqui</Title>

        <>
          <label>Nome</label>
          <InputSecondary
            type="text"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setNome);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Usuário</label>
          <InputSecondary
            type="text"
            value={usuarioNome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setUsuarioNome);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Login</label>
          <InputSecondary
            type="text"
            value={login}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setLogin);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Senha</label>
          <InputSecondary
            type="password"
            value={senha}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setSenha);
            }}
          ></InputSecondary>
        </>
        <>
          <label>Telefone</label>
          <InputSecondary
            type="text"
            value={telefone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getDataInput(e, setTelefone);
            }}
          ></InputSecondary>
        </>
        <>
          <label>E-mail</label>
          <InputSecondary
            type="text"
            value={email}
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
            Registrar-se
          </PrimaryButton>
          <SecondaryButton
          
          ><Link to={'/'}>Voltar</Link>
          </SecondaryButton>
        </div>
      </Form>
          {showModalserver && (
            <AlertaSuccess>
              <h3>{respostaServer.msg}</h3>
            </AlertaSuccess>
          )}
          {error && (
            <AlertaDanger>
              <h3>{error?.message}</h3>
            </AlertaDanger>
          )}
    </Container>
  );
};

export default DadosUsuario;
