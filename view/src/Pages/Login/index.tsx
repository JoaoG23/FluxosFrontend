import { Link , useNavigate} from "react-router-dom";
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

import { useSelector, useDispatch } from "react-redux";
import { Carregador } from "../../Redux/types/carregadorTypes";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";


// Services 
import getDataInput from "../../services/getDataInput";
import urlBase from "../../services/UrlBase";

// Tipagens 
import { DadosUsuario } from './types';
import { IHandleValueElementHTML } from "./interfaces";

type ResponseLogin = {
  dadosUsuario?:object;
  situacao?: boolean;
  msg?: string;
  tokenUser?: string;
};



const Login: React.FC = () => {

  const dispatch = useDispatch();

  const [respostaServer, setRespostaServer] = useState<ResponseLogin>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  
  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");

  const dadosParaLogar:DadosUsuario = {
    usuario: usuario,
    senha: senha
  };

 
  const logar = async(e: IHandleValueElementHTML) => {
    e.preventDefault();

      try {
        const respostaLogin = await urlBase.post(
          "/login",
          dadosParaLogar
        );
        dispatch(setIsCarregado());
        toBackUntilTime(2000);
        setRespostaServer(respostaLogin.data);
        mostrarModalServer(3000);
      } catch (error) {
        setError(error as Error);
        console.error(error);
      }
      
    } 

    const navigate = useNavigate();
    const toBackUntilTime = (timeToAction: number) => {
      setTimeout(() => {
        navigate('/admin/dash');
      }, timeToAction);
      
    };

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          type="text"
          descricaoPlaceholder={"Usuário"}
          onChange={(e:any) => {getDataInput(e,setUsuario)}}
          />
        <Input
          type="password"
          descricaoPlaceholder={"Senha"}
          onChange={(e:any) => {getDataInput(e,setSenha)}}
        />
        <ContainerBottons>
          <PrimaryButton
            onClick={logar}
          >
            Logar 
          </PrimaryButton>
          <SecondaryButton ><Link to={'/registrar'}>Registrar</Link></SecondaryButton>
        </ContainerBottons>
        <HiperLink href="./senhaesquecida">Esqueci a minha senha</HiperLink>
        {isCarregado && <h2>Carregando...</h2>}
      </Form>

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
        
      
    </Container>
  );
  
};

export default Login;
