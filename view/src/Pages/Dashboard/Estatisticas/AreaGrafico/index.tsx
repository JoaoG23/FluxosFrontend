import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Area } from "./styles";

import { options } from "./DadosGrafico/options";
import urlBase from "../../../../services/UrlBase";
import {converterValoresStringParaNumero} from '../../services/converterValoresStringParaNumero';

import { labels } from './DadosGrafico/labels';
// Types ---
import { Gastos , Ganhos } from './DadosGrafico/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function AreaGrafico() {
  const estoqueGastos12Meses: number[] = [];
  const estoqueGanhos12Meses: number[] = [];
  const [gastoUltimos12Meses, setGastoUltimos12Meses] = useState<number[]>(
    estoqueGastos12Meses
  );
  const [ganhoUltimos12Meses, setGanhoUltimos12Meses] = useState<number[]>(
    estoqueGanhos12Meses
  );

  useEffect(() => {
    async function getGastosUltimos12Meses() {
      const resposta = await urlBase.get("/calculos/gastoultimo12/2022");
      const meses = resposta.data;

      meses.map((mes: Gastos) => {
        let gasto: any = mes?.verRegistro?.resposta;
        let gastoConvertido = converterValoresStringParaNumero(gasto);
        estoqueGastos12Meses.push(gastoConvertido);
      });
      setGastoUltimos12Meses(estoqueGastos12Meses);
    }
    getGastosUltimos12Meses();

    async function getGanhoUltimos12Meses() {
      const resposta = await urlBase.get("/calculos/ganhoultimo12/2022");
      const meses = resposta.data;
      meses.map((mes: Ganhos) => {
        let ganho: any = mes?.ganho?.resposta;
        let ganhoConvertido = converterValoresStringParaNumero(ganho);
        estoqueGanhos12Meses.push(ganhoConvertido);
      });
      setGanhoUltimos12Meses(estoqueGanhos12Meses);
    }
    getGanhoUltimos12Meses();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Gasto",
        data: gastoUltimos12Meses,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        fill: true,
        label: "Ganhos",
        data: ganhoUltimos12Meses,
        borderColor: "rgb(199, 53, 235)",
        backgroundColor: "rgba(235, 53, 165, 0.5)",
      },
    ],
  };
  return (
    <Area>
      <Line options={options} data={data} />
    </Area>
  );
}
