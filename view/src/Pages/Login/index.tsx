import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Components
import { Form, Container, HiperLink, Title } from "./styles";
import Input from "../../Components/Inputs/PrimaryInput";
import PrimaryButton from "../../Components/Buttons/ButtonDark";
import ContainerBottons from "../../Components/ContainerButtons";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import AlertaSuccess from "../../Components/Alerta/AlertaSuccess";
import AlertaDanger from "../../Components/Alerta/AlertaDanger";

// Redux

// Nao sera usado por enquanto
// import { useSelector, useDispatch } from "react-redux";
// import { setLogin,setLogout } from '../../Redux/actions/loginActions';
// import { InfoLoginStore } from '../../Redux/types/loginTypes'
// Services
import getDataInput from "../../services/getDataInput";
import urlBase from "../../services/UrlBase";

// Tipagens
import { DadosUsuario } from "./types";

type ResponseLogin = {
  dadosUsuario?: object;
  situacao?: boolean;
  msg?: string;
  tokenUser?: string;
};

const Login: React.FC = () => {
  // const dispatch = useDispatch();

  // const loginState = useSelector((store:InfoLoginStore) => store?.login?.logar);

  const [respostaServer, setRespostaServer] = useState<ResponseLogin>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [carregamento, setCarregamento] = useState(false);

  const dadosParaLogar: DadosUsuario = {
    usuario: usuario,
    senha: senha,
  };

  const insererDadosUsuarioNaSessao = (id:number,nome:string, admin:boolean, token:string) => {
    localStorage.setItem("id", JSON.stringify(id) );
    localStorage.setItem("nome", nome );
    localStorage.setItem("admin", JSON.stringify(admin) );
    localStorage.setItem("token", token );
    
  };

  const logar = async (e: any) => {
    setCarregamento(true);
    e.preventDefault();
    try {
      const respostaLogin = await urlBase.post("/login", dadosParaLogar);
      
      const dadosRequest = respostaLogin.data; 
      setRespostaServer(dadosRequest);
      const tokenSessao = dadosRequest.tokenUser;
      const idUser = dadosRequest.dadosUsuario.id;
      const userName = dadosRequest.dadosUsuario.usuario;
      const admin = dadosRequest.dadosUsuario.admin;

      insererDadosUsuarioNaSessao( idUser, userName, admin , tokenSessao );
      // dispatch(setLogin(dadosRequest)) // Ainda nao sera usado 

      mostrarModalServer(3000);
      toHomeUntilTime(2000);
    } catch (error) {
      setError(error as Error);
      console.error(error);
    } finally {
      setCarregamento(false);
    }
  };

  const navigate = useNavigate();
  const toHomeUntilTime = (timeToAction: number) => {
    setTimeout(() => {
      navigate("/auth");
    }, timeToAction);
  };

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          type="text"
          descricaoPlaceholder={"Usuário"}
          onChange={(e: any) => {
            getDataInput(e, setUsuario);
          }}
        />
        <Input
          type="password"
          descricaoPlaceholder={"Senha"}
          onChange={(e: any) => {
            getDataInput(e, setSenha);
          }}
        />
        <ContainerBottons>
          <PrimaryButton onClick={logar}>Logar</PrimaryButton>
          <SecondaryButton>
            <Link to={"/registrar"}>Registrar</Link>
          </SecondaryButton>
        </ContainerBottons>
        <HiperLink href="./senhaesquecida">Esqueci a minha senha</HiperLink>
        {carregamento && <h4>Carregando...</h4>}
      </Form>

      {showModalserver && (
        <AlertaSuccess>
          <h3>{respostaServer.msg}</h3>
        </AlertaSuccess>
      )}
      {error && (
        <AlertaDanger onClick={() => setError(null)}>
          <p>{error?.message}</p>
        </AlertaDanger>
      )}
    </Container>
  );
};

export default Login;
