import React from "react";
import { SuccessStyle } from "../styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
  }
  

const AlertaSuccess :React.FC<ChildrensCard> = ({
    children,
}) => {
    return(<SuccessStyle>
        <img src='./assets/success.svg' alt="certo"></img>
        { children }
    </SuccessStyle>)
};

export default AlertaSuccess;