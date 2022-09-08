import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import { listaClassificacao } from "./data/listaClassificacao";
import { Classificao } from "./types/Configuracao";

import { ContainerStyle } from "./styles";
const Classificacao = () => {
  // const navigate = useNavigate();

  // const toEdit = (id: number | string) => {
  //   navigate(`/admin/usuarios/${id}`);
  // };

  return (
    <ContainerStyle>
      {listaClassificacao.map((configuracao: Classificao) => (
        <Link key={configuracao.id} to={configuracao.path}>
          <Card>
            <p>{configuracao.descricao}</p>
            <img src={configuracao.img} alt={configuracao.descricao}></img>
          </Card>
        </Link>
      ))}
    </ContainerStyle>
  );
};

export default Classificacao;
