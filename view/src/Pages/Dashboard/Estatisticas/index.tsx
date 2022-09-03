import React from "react";
import { BodyStyle } from "./styles";
import { AreaGrafico } from './AreaGrafico';
import { HorizontalGrafico } from './HorizontalGrafico';

const Estatisticas: React.FC = () => {

  return (
    <>
      <BodyStyle>
        <HorizontalGrafico/>
        {/* <ChatsContainerStyle>
          <h5>Gastos Pessoais do Mês</h5>
        </ChatsContainerStyle>
        <ChatsContainerStyle>
          <h5>Ganhos pessoais do Mês</h5>
        </ChatsContainerStyle> */}
      </BodyStyle>
      <div>
          <AreaGrafico/>
      </div>
    </>
  );
};

export default Estatisticas;
