import { useEffect, useState } from "react";
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
import { DadosUsuarioInsercao } from "../../../Types/UsuariosTipos/UsuarioInsercao";
import Switch from "../../../Components/Switch";

const DadosUsuario = () => {
  const dispatch = useDispatch();
  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  const { id } = useParams();

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };

  const [getId, setId] = useState<number>(0);
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [admin, setAdmin] = useState(false);

  const handleChange = () => {
    setAdmin(!admin);
  };

  useEffect(() => {
    const buscaDadosUsuario = async () => {
      try {
        const dadosUsuario = await urlBase.get(`/admin/usuario/${id}`);
        dispatch(setIsCarregado());

        const {
          id_login,
          nome_login,
          nomeusuario_login,
          email_login,
          tel_login,
          isadmin_login,
        } = dadosUsuario.data[0];

        setId(id_login);
        setNome(nomeusuario_login);
        setLogin(nome_login);
        setSenha("");
        setEmail(email_login);
        setTelefone(tel_login);
        setAdmin(isadmin_login);
      } catch (error) {
        setError(error as Error);
        console.error(error);
      }
    };
    buscaDadosUsuario();
  }, []);

  const novoDadosUsuario: DadosUsuarioInsercao = {
    id: getId,
    nomeusuario: nome,
    login: login,
    senha: senha,
    email: email,
    telefone: telefone,
    admin: admin,
  };

  const atualizar = async () => {
    try {
      const respostaDadoAtualizado = await urlBase.put(
        "/admin/usuario",
        novoDadosUsuario
      );
      dispatch(setIsCarregado());

      toBackUntilTime(1500);
      setRespostaServer(respostaDadoAtualizado.data);
      mostrarModalServer(3000);
    } catch (error) {
      setError(error);
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
      <h2>Editar Usuario</h2>
      <h2>{id}</h2>

      <PerfilStyle src="./assets/perfil.svg"></PerfilStyle>
      <ContainerInputStyle>
        <label>Nome</label>
        <InputSecondary
          type="text"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            getDataInput(e, setNome);
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
        <p>Permissão de admin : { admin ? 'Permitido' : 'Negado'}</p>
        <Switch checked={admin} onChange={handleChange}></Switch>
      </div>

      <div>
        <PrimaryButton
          onClick={() => {
            atualizar();
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
          <AlertaDanger onClick={() => setError(null)}>
            <p>{error?.response?.data?.msg}</p>
          </AlertaDanger>
        )}
      </div>
    </ContainerStyle>
  );
};

export default DadosUsuario;
