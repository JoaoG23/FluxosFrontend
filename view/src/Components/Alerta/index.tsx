import React from "react";
import { AlertaStyle } from "./styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
  }
  

const Alerta :React.FC<ChildrensCard> = ({
    children,
}) => {
    return(<AlertaStyle>
        { children }
    </AlertaStyle>)
};

export default Alerta;