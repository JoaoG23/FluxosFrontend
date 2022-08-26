import {
  HeaderStyle,
  ContainerStyle,
  BodyStyle,
  ChatsContainerStyle,
} from "./styles";

import urlBase from "../../services/UrlBase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSaldoAtual, setGanho, setGasto } from "../../Redux/actions/dashActions";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";

import Card from "../../Components/Card";
import { dashStore } from "../../Redux/types/dashTypes";
import { Carregador } from "../../Redux/types/carregadorTypes";

const Dashboard = () => {

  const dispatch = useDispatch();

  const isCarregado = useSelector((store:Carregador) => store?.carregador);
  const meuSaldo = useSelector((store: dashStore) => store?.dashboard?.saldoAtual);
  const meuGasto = useSelector((store: dashStore) => store?.dashboard?.gasto);
  const meuGanho = useSelector((store: dashStore) => store?.dashboard?.ganho);

  useEffect(() => {
    const loadDash = async () => {
      const saldoAtual = await urlBase.get("/calculos/saldoatual/");
      const gasto = await urlBase.get("/calculos/mesatualgasto/");
      const ganho = await urlBase.get("/calculos/mesatualganho/");

      dispatch(setIsCarregado());
      dispatch(setSaldoAtual(saldoAtual.data));
      dispatch(setGasto(gasto.data));
      dispatch(setGanho(ganho.data));
    };
    loadDash();
  }, [dispatch]);

  return (
    <ContainerStyle>
      <HeaderStyle>
        <Card>
          <img src="./assets/wallet.svg" alt="Saldo"></img>
          <div>
            <p>Saldo atual</p>
            {isCarregado && <p>Carregando ..</p>}
            <h2>{meuSaldo.resposta} R$</h2>
          </div>
        </Card>
        <Card>
          <img src="./assets/gasto.svg" alt="Ganhou"></img>
          <div>
            <p>Quanto gastou neste mês</p>
            {isCarregado && <p>Carregando ..</p>}
            <h2>{meuGasto.resposta} R$</h2>
          </div>
        </Card>
        <Card>
          <img src="./assets/valores.svg" alt="Gastou"></img>
          <div>
            <p>Quanto ganho neste mês</p>
            {isCarregado && <p>Carregando ..</p>}
            <h2>{meuGanho.resposta} R$</h2>
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
