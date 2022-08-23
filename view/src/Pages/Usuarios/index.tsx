import { Link , useNavigate } from "react-router-dom";
import DarkButton from "../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Card";

import { ContainerStyle, GroupBtnStyle } from "./styles";
const Usuarios = () => {


  const navigate = useNavigate();
  
  const toEdit = (id: number | string) => {
    navigate(`/admin/usuarios/${id}`);
  };

  return (
    <ContainerStyle>
      <div>
        <DarkButton>
         <Link to={'/admin/adicionarusuario'}>+ Adicionar</Link>
        </DarkButton>
      </div>
      <Card>
        <img src="./assets/perfil.svg" alt="perfil"></img>

        <p>João Guilherme</p>
        <p>Tipo: Adimn</p>
        <GroupBtnStyle>
          <PrimaryButton onClick={() => toEdit(2)}>
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
