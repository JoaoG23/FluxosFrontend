import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Container } from "./styles";
import Input from "../../Components/Inputs/PrimaryInput";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
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
          <SecondaryButton><Link to={'/'}>Voltar</Link></SecondaryButton>
      </Form>
    </Container>
  );
};

export default Registrar;
