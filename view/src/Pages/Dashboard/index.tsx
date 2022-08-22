import Card from "../../Components/Card";
import { HeaderStyle, ContainerStyle, BodyStyle,
  ChatsContainerStyle } from "./styles";
const Dashboard = () => {
  return (
    <ContainerStyle>
      <HeaderStyle>
        <Card>
          <img src="./assets/wallet.svg"></img>
          <div>
            <p>Saldo atual</p>
            <p>2039,00</p>
          </div>
        </Card>
        <Card>
          <img src="./assets/gasto.svg"></img>
          <div>
            <p>Quanto foi gastou</p>
            <p>2039,00</p>
          </div>
        </Card>
        <Card>
        <img src="./assets/valores.svg"></img>
          <div>
            <p>Quanto foi gastou</p>
            <p>2039,00</p>
          </div>
        </Card>
      </HeaderStyle>
      <BodyStyle>
        <ChatsContainerStyle>
          <h5>Gastos Pessoais do Mês</h5>
        </ChatsContainerStyle>
        <ChatsContainerStyle>
          <h5>Ganhos pessoais do Mês</h5>
        </ChatsContainerStyle>
      </BodyStyle>
      <div>
        <ChatsContainerStyle>
          <h4>Ganhos e Gastos ao longo do ano</h4>
        </ChatsContainerStyle>
      </div>
    </ContainerStyle>
  );
};

export default Dashboard;
