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
import urlBase from '../../../../services/UrlBase';
import { Subelementos } from './types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio:false,
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Ganhos Com Subelementos",
    },
  },
};


export function HorizontalGrafico() {
  
  const estoqueGanhosValores:number[] = [];
  const estoqueDescricaoSubelemento:string[] = [];
  
  const [ganho, setGanho] = useState<number[]>(estoqueGanhosValores);
  const [labels, setDescricaoSubelemento] = useState<string[]>(estoqueDescricaoSubelemento);
  useEffect(() => {
    async function ganhosComSubelementos() {
      const resposta = await urlBase.get("/calculos/ganhosubelementos");
      const tipos = resposta.data;

      tipos.map((tipo: Subelementos) => {
        let ganho: any = tipo?.dados?.resposta;
        let descricao:any = tipo?.dados?.nomeCategoria;
        
        let descricaoConvertida = converterNullParaString(descricao);
        let ganhoConvertido = converterValoresStringParaNumero(ganho);
        
        estoqueGanhosValores.push(ganhoConvertido);
        estoqueDescricaoSubelemento.push(descricaoConvertida);
      });
      console.info(estoqueDescricaoSubelemento);

      setGanho(estoqueGanhosValores);
      setDescricaoSubelemento(estoqueDescricaoSubelemento);
    }
    ganhosComSubelementos()
  }, []);

   const data = {
    labels,
    datasets: [
      {
        label: "Saldo de Ganhos",
        data: ganho,
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
