import { useParams } from "react-router-dom";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import InputSecondary from "../../Components/Inputs/SecondaryInput";
import { ContainerStyle, PerfilStyle, ContainerInputStyle } from "./styles";

const EditarUsuario = () => {

  const { id } = useParams();
  return (
    <ContainerStyle>
      <h2>Editar Usuario</h2>
      <h2>{id}</h2>
      
        <PerfilStyle src="./assets/perfil.svg"></PerfilStyle>
        <ContainerInputStyle>
          <label>Nome</label>
          <InputSecondary type="text"></InputSecondary>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <label>Login</label>
          <InputSecondary type="text"></InputSecondary>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <label>Senha</label>
          <InputSecondary type="text"></InputSecondary>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <label>Telefone</label>
          <InputSecondary type="text"></InputSecondary>
        </ContainerInputStyle>
        <ContainerInputStyle>
          <label>E-mail</label>
          <InputSecondary type="text"></InputSecondary>
        </ContainerInputStyle>


      <div>
        <PrimaryButton>
          Salvar
        </PrimaryButton>
      </div>
    </ContainerStyle>
  );
};

export default EditarUsuario;
