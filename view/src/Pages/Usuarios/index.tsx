import DarkButton from "../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Card";

import { ContainerStyle,GroupBtnStyle } from "./styles";
const Usuarios = () => {
  return (
    <ContainerStyle>
      <Card>
        <img src="./assets/perfil.svg" alt='perfil'></img>

        <p>João Guilherme</p>
        <p>Tipo: Adimn</p>
        <GroupBtnStyle>
          <PrimaryButton>
            <img src="./assets/editar.svg" alt="editar"></img>
          </PrimaryButton>
          <DarkButton>
            <img src="./assets/remover.svg" alt="remover"></img>
          </DarkButton>
        </GroupBtnStyle>
      </Card>
    </ContainerStyle>
  );
};

export default Usuarios;
