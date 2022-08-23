import { useState } from "react";
import { Form, Container, HiperLink, Title } from "./styles";
import Input from "../../Components/Inputs/PrimaryInput";
// import ContainerBottons from "../../Components/ContainerButtons";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Modal from "../../Components/Modal";

import getDataInput from "../../services/getDataInput";

import requestAjax from "../../services/RequestAjax";
import DarkButton from "../../Components/Buttons/ButtonDark";
// import { endpoint } from "../../configs/endPoint";

// Tipagens

const Registrar: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Criar uma Conta</h1>
        <label>Nome</label>
        <Input type="text"></Input>
        <label>Usuário</label>
        <Input type="text"></Input>
        <label>Senha</label>
        <Input type="text"></Input>
        <label>Digite a senha novamente</label>
        <Input type="text"></Input>
        <PrimaryButton>Registrar</PrimaryButton>
          <SecondaryButton><a href="/index">Voltar</a></SecondaryButton>
      </Form>
    </Container>
  );
};

export default Registrar;
