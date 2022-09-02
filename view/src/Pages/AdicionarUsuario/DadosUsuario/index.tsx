import React, {  useState } from "react";
// Components
import { useNavigate, useParams } from "react-router-dom";
import AlertaSuccess from "../../../Components/Alerta/AlertaSuccess";
import AlertaDanger from "../../../Components/Alerta/AlertaDanger";

import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import InputSecondary from "../../../Components/Inputs/SecondaryInput";
import { ContainerStyle, PerfilStyle, ContainerInputStyle } from "../styles";

// Services

import urlBase from "../../../services/UrlBase";
import getDataInput from "../../../services/getDataInput";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setIsCarregado } from "../../../Redux/actions/carregadorActions";
import { Carregador } from "../../../Redux/types/carregadorTypes";

// types component Main
import { RespostaServidor } from "../../../Types/RespostaServidor";
import { DadosUsuarioInsercaoSemID } from "../../../Types/UsuariosTipos/UsuarioInsercaoSemId";

const DadosUsuario:React.FC = () => {
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

  const [login, setLogin] = useState<string>("");
  const [usuarioNome, setUsuarioNome] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  
  const novoDadosUsuario: DadosUsuarioInsercaoSemID = {
    nomeusuario: usuarioNome,
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
    <ContainerStyle>
      {isCarregado && <h2>Carregando...</h2>}
      <h2>Novo Usuario</h2>

      <PerfilStyle src="./assets/perfil.svg"></PerfilStyle>
      <ContainerInputStyle>
        <label>Seu nome</label>
        <InputSecondary
          type="text"
          value={usuarioNome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setUsuarioNome);
          }}
        ></InputSecondary>
      </ContainerInputStyle>
      <ContainerInputStyle>
        <label>Login</label>
        <InputSecondary
          type="text"
          value={login}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setLogin);
          }}
        ></InputSecondary>
      </ContainerInputStyle>
      <ContainerInputStyle>
        <label>Senha</label>
        <InputSecondary
          type="password"
          value={senha}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setSenha);
          }}
        ></InputSecondary>
      </ContainerInputStyle>
      <ContainerInputStyle>
        <label>Telefone</label>
        <InputSecondary
          type="text"
          value={telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setTelefone);
          }}
        ></InputSecondary>
      </ContainerInputStyle>
      <ContainerInputStyle>
        <label>E-mail</label>
        <InputSecondary
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setEmail);
          }}
        ></InputSecondary>
      </ContainerInputStyle>

      <div>
        <PrimaryButton
          onClick={() => {
            adicionar();
          }}
        >
          Salvar
        </PrimaryButton>
        {showModalserver && (
          <AlertaSuccess>
            <h3>{respostaServer.msg}</h3>
          </AlertaSuccess>
        )}
        {error && (
          <AlertaDanger onClick={ () => setError(null) }>
            <h3>{error?.message}</h3>
          </AlertaDanger>
        )}
      </div>
    </ContainerStyle>
  );
};

export default DadosUsuario;
