import React from "react";
import { BodyStyle } from "./styles";
import { AreaGrafico } from './AreaGrafico';
import { HorizontalGraficoDireita } from './HorizontalGraficoDireita';
import { HorizontalGraficoEsquerda } from './HorizontalGraficoEsquerda';

const Estatisticas: React.FC = () => {

  return (
    <div>
      <BodyStyle>
        <HorizontalGraficoEsquerda/>
        <HorizontalGraficoDireita/>
      </BodyStyle>
      <div>
          <AreaGrafico/>
      </div>
    </div>
  );
};

export default Estatisticas;
