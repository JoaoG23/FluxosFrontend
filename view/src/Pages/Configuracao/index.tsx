import { Link, useNavigate } from "react-router-dom";
import DarkButton from "../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Card";
import { listaConfiguracao } from "./data/listaConfiguracao";

import { ContainerStyle, GroupBtnStyle } from "./styles";
const Configuracoes = () => {
  // const navigate = useNavigate();

  // const toEdit = (id: number | string) => {
  //   navigate(`/admin/usuarios/${id}`);
  // };

  type Configuracao = {
    id?: number;
    descricao?: string;
    img?: string;
  };
  return (
    <ContainerStyle>
      {listaConfiguracao.map((configuracao) => (
        <Card>
          <p key={configuracao.id}>{configuracao.descricao}</p>
          <img src={configuracao.img} alt={configuracao.descricao}></img>
        </Card>
      ))}
    </ContainerStyle>
  );
};

export default Configuracoes;
