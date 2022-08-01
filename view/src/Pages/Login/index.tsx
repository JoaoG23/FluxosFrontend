import { Form, Container, HiperLink, Title } from "./styles";
import Input from "../../Components/Inputs/PrimaryInput";
import PrimaryButton from "../../Components/Buttons/ButtonDark";
import ContainerBottons from "../../Components/ContainerButtons";
import SecondaryButton from "../../Components/Buttons/PrimaryButton";
import Modal from "../../Components/Modal";

import { useState } from "react";
const Login: React.FC = () => {
  type ResponseJ = {
    situacao?: boolean;
    msg?: string;
    tokenUser?: string;
  };

  type DadosUsuario = {
    usuario: string;
    senha: string;
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);

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

  const getSenhaInput = (event: any) => {
    let text = event.target.value;
    console.info(text);
    setSenha(text);
  };
  const getLoginInput = (event: any) => {
    let text = event.target.value;
    console.info(text);
    setLogin(text);
  };

  const [dados, setDados] = useState<ResponseJ>({});
  let url = `http://localhost:2001/login`;
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
  
  function logar(e: any) {
    e.preventDefault();
    // console.log("Seus dados buscado : " + senha + " " + login);

    fetch(url, options)
      .then((response) => response.json())
      .then(
        (data) => {
          setDados(data);
          setIsLoaded(true);
          showModal();
          showOutModal();
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => console.log(error));
  }
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          type="text"
          descricaoPlaceholder={"Login"}
          // onChange={(e: any) => setLogin(e.target.value)} // Commentado para fins estudantis
          onChange={getLoginInput}
        />
        <Input
          type="password"
          descricaoPlaceholder={"Senha"}
          onChange={getSenhaInput}
        // onChange={(e: any) => setSenha(e.target.value)} // Commentado para fins estudantis
        />
        <ContainerBottons>
          <PrimaryButton
            onClick={logar}
          >
            Logar
          </PrimaryButton>
          <SecondaryButton>Registrar</SecondaryButton>
        </ContainerBottons>
        <HiperLink href="./senhaesquecida">Esqueci a minha senha</HiperLink>
      </Form>
      <Modal prefix={show ? "flex" : ""}>{dados.msg}</Modal>
    </Container>
  );
};

export default Login;
