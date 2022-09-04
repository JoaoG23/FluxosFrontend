import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Horizontal } from "./styles";

import { converterValoresStringParaNumero } from "../../services/converterValoresStringParaNumero";
import { converterNullParaString } from "../../services/converterNullString";
import urlBase from "../../../../services/UrlBase";
import { Subelementos } from "./types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  // responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "gastos Com Subelementos",
    },
  },
};

export function HorizontalGraficoDireita() {
  const estoquegastosValores: number[] = [];
  const estoqueDescricaoSubelemento: string[] = [];

  const [gasto, setGasto] = useState<number[]>(estoquegastosValores);
  const [labels, setDescricaoSubelemento] = useState<string[]>(
    estoqueDescricaoSubelemento
  );
  useEffect(() => {
    async function gastosComSubelementos() {
      try {
        const resposta = await urlBase.get("/calculos/gastosubelementos");
        const tipos = resposta.data;

        tipos.map((tipo: Subelementos) => {
          let gasto: any = tipo?.dados?.resposta;
          let gastoConvertido = converterValoresStringParaNumero(gasto);
          estoquegastosValores.push(gastoConvertido);
        });

        tipos.map((tipo:Subelementos) => {
          let descricao: any = tipo?.dados?.nomeCategoria;
          let descricaoConvertida = converterNullParaString(descricao);
          estoqueDescricaoSubelemento.push(descricaoConvertida);
        })
        setGasto(estoquegastosValores);
        setDescricaoSubelemento(estoqueDescricaoSubelemento);
      } catch (error) {

        console.error(error);
      }
    }
    gastosComSubelementos();
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Saldo de gastos",
        data: gasto,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Horizontal>
      <Bar options={options} data={data} />
    </Horizontal>
  );
}
