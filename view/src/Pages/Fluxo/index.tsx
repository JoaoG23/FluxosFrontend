import Card from "../../Components/Card";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { HeaderStyle, ContainerStyle, TableStyle } from "./styles";
const Fluxo = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>
        <h2>Fluxo de Caixa</h2>
        <div>
          <SecondaryButton>+ adicionar</SecondaryButton>
        </div>
      </HeaderStyle>
      <TableStyle>
        <tr>
          <th>ID</th>
          <th>Ano</th>
          <th>Mês</th>
          <th>Dia</th>
          <th>Elementos</th>
          <th>Subelementos</th>
          <th>Tipos</th>
          <th>Subtipos</th>
          <th>Minitipos</th>
          <th>Nanotipos</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Saldo</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
      </TableStyle>
    </ContainerStyle>
  );
};

export default Fluxo;
