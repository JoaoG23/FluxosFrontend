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
import  ButtonBackGround  from "../../Components/Buttons/BackgroundButton";
// Services
import getDataInput from "../../services/getDataInput";
import urlBase from "../../services/UrlBase";
import { toShowUntilSomeTime } from '../../services/toShowUntilSomeTime'
// import { ToHomeUntilTime } from '../../services/toBackUntilTime'
import { insererDadosUsuarioNaSessao } from './services/insererDadosUsuarioNaSessao';

// Tipagens
import { DadosUsuario, ResponseLogin } from "./types";
import DarkButton from "../../Components/Buttons/ButtonDark";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [respostaServer, setRespostaServer] = useState<ResponseLogin>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [carregamento, setCarregamento] = useState(false);

  const dadosParaLogar: DadosUsuario = {
    usuario: usuario,
    senha: senha,
  };

  const logar = async (e: any) => {
    setCarregamento(true);
    e.preventDefault();
    try {
      const respostaLogin = await urlBase.post("/login", dadosParaLogar);
      const dadosRequest = respostaLogin.data;
      const userData = dadosRequest.dadosUsuario;
      const tokenSessao = dadosRequest.tokenUser;

      const {
        id,
        usuario,
        admin
      } = userData;

      setRespostaServer(dadosRequest);
      insererDadosUsuarioNaSessao( id, usuario, admin , tokenSessao );
      // Mostrar modal de sucesso
      toShowUntilSomeTime(setShowModalserver,2000);
      setTimeout(() => {
        navigate('/auth');
        // window.location.replace('/admin/dash')
      }, 2000);
    } catch (error) {
      setError(error as Error);
      console.error(error);
    } finally {
      setCarregamento(false);
    }
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
          <ButtonBackGround>
            <Link to={"/registrar"}>Registrar</Link>
          </ButtonBackGround>
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
